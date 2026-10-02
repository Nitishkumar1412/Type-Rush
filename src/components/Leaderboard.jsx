function Leaderboard({ results, name, setName, onClear }) {
  const top = [...results].sort((a, b) => b.wpm - a.wpm).slice(0, 5);

  return (
    <div className="card">
      <h3>🏆 Leaderboard</h3>

      <label>Your name</label>
      <input
        className="name-input"
        placeholder="Guest"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {top.length === 0 ? (
        <p className="muted">No scores yet. Finish a test to see it here.</p>
      ) : (
        <table className="board">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>WPM</th>
              <th>Acc</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            {top.map((r, i) => (
              <tr key={r.id}>
                <td>{i + 1}</td>
                <td>{r.name}</td>
                <td className="gold">{r.wpm}</td>
                <td>{r.accuracy}%</td>
                <td>
                  {r.duration}s {r.level}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {results.length > 0 && (
        <button className="btn outline small" onClick={onClear}>
          Clear scores
        </button>
      )}
    </div>
  );
}

export default Leaderboard;