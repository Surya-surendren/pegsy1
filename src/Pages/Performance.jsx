import { useParams } from "react-router-dom";

function Performance() {
  const { patientName } = useParams();

  return (
    <>
      <style>{`
        .perf-page {
          min-height: 100vh;
          background: #f0fdfa;
          padding: 40px;
          font-family: "Segoe UI", sans-serif;
        }

        .perf-card {
          background: white;
          border-radius: 18px;
          padding: 30px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          max-width: 700px;
          margin: auto;
        }

        h2 {
          color: #0f766e;
          margin-bottom: 10px;
        }

        .bar {
          height: 10px;
          background: #e5e7eb;
          border-radius: 6px;
          overflow: hidden;
          margin: 10px 0 20px;
        }

        .fill {
          height: 100%;
          background: #14b8a6;
        }
      `}</style>

      <div className="perf-page">
        <div className="perf-card">
          <h2>Performance Analysis</h2>
          <p>Patient: <b>{patientName}</b></p>

          <p>Grip Strength</p>
          <div className="bar"><div className="fill" style={{ width: "75%" }} /></div>

          <p>Reaction Time</p>
          <div className="bar"><div className="fill" style={{ width: "60%" }} /></div>

          <p>Accuracy</p>
          <div className="bar"><div className="fill" style={{ width: "85%" }} /></div>

          <p>
            <b>Summary:</b> Patient shows steady improvement and is responding
            well to therapy exercises.
          </p>
        </div>
      </div>
    </>
  );
}

export default Performance;
