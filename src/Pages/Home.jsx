import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .home {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #e0f7fa, #e8f5e9);
          font-family: "Segoe UI", sans-serif;
        }

        .home-card {
          background: white;
          padding: 70px;
          border-radius: 22px;
          width: 900px;
          text-align: center;
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }

        .home-card h1 {
          font-size: 44px;
          color: #0f766e;
          margin-bottom: 10px;
        }

        .home-card p {
          font-size: 16px;
          color: #475569;
          margin-bottom: 45px;
        }

        .home-card button {
          padding: 14px 46px;
          font-size: 16px;
          border: none;
          border-radius: 30px;
          background: #0d9488;
          color: white;
          cursor: pointer;
        }

        .home-card button:hover {
          background: #0f766e;
        }
      `}</style>

      <div className="home">
        <div className="home-card">
          <h1>PEGSY</h1>
          <p>Digital Patient–Therapist Monitoring & Assistance System</p>
          <button onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
