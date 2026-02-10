function Games() {
  return (
    <>
      <style>{`
        .games-page {
          min-height: 100vh;
          background: #f0fdfa;
          padding: 40px;
          font-family: "Segoe UI", sans-serif;
        }

        .games-header {
          margin-bottom: 30px;
        }

        .games-header h2 {
          color: #0f766e;
        }

        .games-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 25px;
        }

        .game-card {
          background: white;
          padding: 25px;
          border-radius: 18px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .game-card:hover {
          transform: translateY(-5px);
          background: #0d9488;
          color: white;
        }

        .game-card h4 {
          margin-bottom: 10px;
        }

        .game-card p {
          font-size: 14px;
          opacity: 0.9;
        }
      `}</style>

      <div className="games-page">
        <div className="games-header">
          <h2>Rehabilitation Games</h2>
          <p>Select a game to start therapy</p>
        </div>

        <div className="games-grid">
          <div className="game-card">
            <h4>Grip Strength Game</h4>
            <p>Improve hand grip and muscle control</p>
          </div>

          <div className="game-card">
            <h4>Reaction Time Game</h4>
            <p>Enhance response speed</p>
          </div>

          <div className="game-card">
            <h4>Accuracy Game</h4>
            <p>Train precision and coordination</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Games;
