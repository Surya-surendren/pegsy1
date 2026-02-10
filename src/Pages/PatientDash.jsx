import { useNavigate } from "react-router-dom";

function PatientDash() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .pd-page {
          min-height: 100vh;
          background: #f0fdfa;
          padding: 40px;
          font-family: "Segoe UI", sans-serif;
        }

        /* Header */
        .pd-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 25px;
        }

        .pd-avatar {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: #0d9488;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          font-weight: bold;
        }

        .pd-header h2 {
          margin: 0;
          color: #0f766e;
        }

        .pd-header p {
          margin-top: 5px;
          color: #475569;
        }

        /* Games Tab */
        .games-tab {
          background: #0d9488;
          color: white;
          padding: 18px 30px;
          border-radius: 16px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          width: fit-content;
          margin-bottom: 35px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          transition: all 0.2s ease;
        }

        .games-tab:hover {
          background: #0f766e;
          transform: translateY(-3px);
        }

        /* Grid */
        .pd-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 25px;
        }

        .pd-card {
          background: white;
          border-radius: 18px;
          padding: 25px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .pd-card h3 {
          color: #0f766e;
          margin-bottom: 15px;
        }

        /* Progress */
        .game {
          margin-bottom: 18px;
        }

        .progress {
          height: 10px;
          background: #e5e7eb;
          border-radius: 6px;
          overflow: hidden;
          margin-top: 6px;
        }

        .fill {
          height: 100%;
          background: #14b8a6;
        }

        /* Chart */
        .chart {
          display: flex;
          align-items: flex-end;
          gap: 16px;
          height: 160px;
          margin-top: 20px;
        }

        .bar {
          width: 42px;
          background: #0d9488;
          border-radius: 10px 10px 0 0;
          position: relative;
        }

        .bar span {
          position: absolute;
          top: -22px;
          width: 100%;
          text-align: center;
          font-size: 12px;
          color: #0f766e;
          font-weight: bold;
        }
      `}</style>

      <div className="pd-page">
        {/* Header */}
        <div className="pd-header">
          <div className="pd-avatar">P</div>
          <div>
            <h2>Patient Dashboard</h2>
            <p>
              Name: <b>Arjun Kumar</b> | Age: <b>21</b>
            </p>
          </div>
        </div>

        {/* SINGLE GAMES TAB */}
        <div
          className="games-tab"
          onClick={() => navigate("/games")}
        >
          🎮 Games
        </div>

        {/* Main Content */}
        <div className="pd-grid">
          {/* Profile */}
          <div className="pd-card">
            <h3>Profile</h3>
            <p><b>Name:</b> Arjun Kumar</p>
            <p><b>Age:</b> 21</p>
            <p><b>Condition:</b> Motor Skill Rehabilitation</p>
            <p><b>Assigned Therapist:</b> Dr. Meera</p>
          </div>

          {/* Games Progress */}
          <div className="pd-card">
            <h3>Games Progress</h3>

            <div className="game">
              Grip Strength – 70%
              <div className="progress">
                <div className="fill" style={{ width: "70%" }} />
              </div>
            </div>

            <div className="game">
              Reaction Time – 55%
              <div className="progress">
                <div className="fill" style={{ width: "55%" }} />
              </div>
            </div>

            <div className="game">
              Accuracy – 80%
              <div className="progress">
                <div className="fill" style={{ width: "80%" }} />
              </div>
            </div>
          </div>

          {/* Performance */}
          <div className="pd-card">
            <h3>Performance Analysis</h3>
            <p>Weekly Improvement Score</p>

            <div className="chart">
              <div className="bar" style={{ height: "60%" }}><span>60</span></div>
              <div className="bar" style={{ height: "75%" }}><span>75</span></div>
              <div className="bar" style={{ height: "85%" }}><span>85</span></div>
              <div className="bar" style={{ height: "90%" }}><span>90</span></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientDash;
