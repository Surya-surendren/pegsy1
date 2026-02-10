import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  return (
    <>
      <style>{`
        .reg-page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #ecfeff;
          font-family: "Segoe UI", sans-serif;
        }

        .reg-card {
          background: white;
          padding: 40px;
          border-radius: 18px;
          width: 380px;
          box-shadow: 0 12px 25px rgba(0,0,0,0.1);
        }

        .reg-card h2 {
          text-align: center;
          color: #0f766e;
          margin-bottom: 20px;
        }

        .reg-card input,
        .reg-card select {
          width: 100%;
          padding: 10px;
          margin-bottom: 12px;
          border-radius: 6px;
          border: 1px solid #cbd5e1;
        }

        .reg-card button {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 25px;
          background: #0d9488;
          color: white;
          font-size: 15px;
          cursor: pointer;
          margin-top: 10px;
        }

        .reg-card button:hover {
          background: #0f766e;
        }

        .login-link {
          text-align: center;
          margin-top: 15px;
          color: #0f766e;
          cursor: pointer;
        }
      `}</style>

      <div className="reg-page">
        <div className="reg-card">
          <h2>Patient / Therapist Registration</h2>

          <input type="text" placeholder="Full Name" />
          <input type="number" placeholder="Age" />

          <select>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <select onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="patient">Patient</option>
            <option value="therapist">Therapist</option>
          </select>

          {role === "therapist" && (
            <input type="text" placeholder="Therapist ID" />
          )}

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button onClick={() => navigate("/login")}>
            Register
          </button>

          <div
            className="login-link"
            onClick={() => navigate("/login")}
          >
            Already registered? Login
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
