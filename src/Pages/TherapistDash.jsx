import { useNavigate } from "react-router-dom";

function TherapistDash() {
  const navigate = useNavigate();

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
          <p>Name: <b>Dr. Meera</b> | Specialization: <b>Physiotherapy</b></p>
        </div>

        <div className="td-card">
          <h3>Patients Overview</h3>

          {/* Patient 1 */}
          <div className="patient">
            <b>Arjun Kumar (21)</b>
            <p>Condition: Motor Skill Rehab</p>

            <div className="progress">
              <div className="fill" style={{ width: "75%" }} />
            </div>

            <div className="actions">
              <button>Assign Exercise</button>
              <button>Give Instructions</button>
              <button onClick={() => navigate("/performance/Arjun Kumar")}>
                Performance Analysis
              </button>
            </div>
          </div>

          {/* Patient 2 */}
          <div className="patient">
            <b>Neha R (19)</b>
            <p>Condition: Hand Coordination</p>

            <div className="progress">
              <div className="fill" style={{ width: "60%" }} />
            </div>

            <div className="actions">
              <button>Assign Exercise</button>
              <button>Give Instructions</button>
              <button onClick={() => navigate("/performance/Neha R")}>
                Performance Analysis
              </button>
            </div>
          </div>

          {/* Patient 3 */}
          <div className="patient">
            <b>Rahul S (24)</b>
            <p>Condition: Reaction Training</p>

            <div className="progress">
              <div className="fill" style={{ width: "85%" }} />
            </div>

            <div className="actions">
              <button>Assign Exercise</button>
              <button>Give Instructions</button>
              <button onClick={() => navigate("/performance/Rahul S")}>
                Performance Analysis
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TherapistDash;
