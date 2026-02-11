import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function TherapistDash() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchTherapist();
    fetchPatients();
  }, []);

  const fetchTherapist = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      navigate("/login");
      return;
    }

    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (data) setProfile(data);
  };

  const fetchPatients = async () => {
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("role", "patient");

    if (data) setPatients(data);
  };

  if (!profile) {
    return <div style={{ padding: "40px" }}>Loading...</div>;
  }

  return (
    <>
      <style>{`
        .td-page {
          min-height: 100vh;
          background: #f0fdfa;
          padding: 40px;
          font-family: "Segoe UI", sans-serif;
        }

        .td-header {
          margin-bottom: 25px;
        }

        .td-header h2 {
          color: #0f766e;
        }

        .td-card {
          background: white;
          border-radius: 18px;
          padding: 25px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          margin-bottom: 25px;
        }

        .patient {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 20px;
          margin-bottom: 20px;
        }

        .patient:last-child {
          border-bottom: none;
        }

        .progress {
          height: 8px;
          background: #e5e7eb;
          border-radius: 6px;
          overflow: hidden;
          margin: 8px 0;
        }

        .fill {
          height: 100%;
          background: #14b8a6;
        }

        .actions {
          display: flex;
          gap: 10px;
          margin-top: 10px;
          flex-wrap: wrap;
        }

        .actions button {
          padding: 8px 14px;
          border-radius: 20px;
          border: none;
          background: #0d9488;
          color: white;
          cursor: pointer;
          font-size: 13px;
        }
      `}</style>

      <div className="td-page">
        <div className="td-header">
          <h2>Therapist Dashboard</h2>
          <p>
            Name: <b>{profile.name}</b> | Role: <b>{profile.role}</b>
          </p>
        </div>

        <div className="td-card">
          <h3>Patients Overview</h3>

          {patients.length === 0 && <p>No patients registered yet.</p>}

          {patients.map((patient) => (
            <div className="patient" key={patient.id}>
              <b>{patient.name} ({patient.age})</b>
              <p>Condition: Rehabilitation Training</p>

              <div className="progress">
                <div className="fill" style={{ width: "60%" }} />
              </div>

              <div className="actions">
                <button>Assign Exercise</button>
                <button>Give Instructions</button>
                <button
                  onClick={() =>
                    navigate(`/performance/${patient.name}`)
                  }
                >
                  Performance Analysis
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TherapistDash;
