import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = () => {
    if (!email || !password || !role) {
      alert("Please fill all fields");
      return;
    }

    // TEMP LOGIN LOGIC (no backend yet)
    if (role === "patient") {
      navigate("/patient-dashboard");
    } else if (role === "therapist") {
      navigate("/therapist-dashboard");
    }
  };

  return (
    <>
      <style>{`
        .login-page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f0fdfa;
          font-family: "Segoe UI", sans-serif;
        }

        .login-card {
          background: white;
          padding: 40px;
          border-radius: 20px;
          width: 360px;
          box-shadow: 0 12px 25px rgba(0,0,0,0.12);
          text-align: center;
        }

        .login-card h2 {
          color: #0f766e;
          margin-bottom: 25px;
        }

        .login-card input,
        .login-card select {
          width: 100%;
          padding: 12px;
          margin-bottom: 14px;
          border-radius: 8px;
          border: 1px solid #cbd5e1;
        }

        .login-card button {
          width: 100%;
          padding: 12px;
          border-radius: 25px;
          border: none;
          background: #0d9488;
          color: white;
          font-size: 16px;
          cursor: pointer;
          margin-top: 10px;
        }

        .login-card button:hover {
          background: #0f766e;
        }

        .register-link {
          margin-top: 18px;
          color: #0f766e;
          cursor: pointer;
        }
      `}</style>

      <div className="login-page">
        <div className="login-card">
          <h2>Medical Login</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="patient">Patient</option>
            <option value="therapist">Therapist</option>
          </select>

          <button onClick={handleLogin}>Login</button>

          <div
            className="register-link"
            onClick={() => navigate("/register")}
          >
            New user? Register here
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
