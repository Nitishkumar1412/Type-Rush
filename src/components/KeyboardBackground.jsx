const rows = ["1234567890", "qwertyuiop", "asdfghjkl", "zxcvbnm"];

function KeyboardBackground() {
  return (
    <div className="bg-keys">
      {rows.map((row, r) => (
        <div key={r} className="key-row" style={{ marginLeft: r * 26 }}>
          {row.split("").map((k) => (
            <div key={k} className="key">
              {k}
            </div>
          ))}
        </div>
      ))}
      <div className="key-row">
        <div className="key space"></div>
      </div>
    </div>
  );
}

export default KeyboardBackground;