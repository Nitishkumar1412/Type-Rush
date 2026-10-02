import { useState } from "react";

const times = [15, 30, 60, 120];
const levels = ["easy", "medium", "hard", "quotes", "custom"];

function Controls({ duration, level, onDuration, onLevel, onApplyCustom }) {
  const [input, setInput] = useState("");

  return (
    <div className="card controls">
      <div className="control-row">
        <div className="group">
          <label>Time</label>
          <div className="pills">
            {times.map((t) => (
              <button
                key={t}
                className={duration === t ? "pill active" : "pill"}
                onClick={() => onDuration(t)}
              >
                {t}s
              </button>
            ))}
          </div>
        </div>

        <div className="group">
          <label>Difficulty</label>
          <div className="pills">
            {levels.map((l) => (
              <button
                key={l}
                className={level === l ? "pill active" : "pill"}
                onClick={() => onLevel(l)}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      {level === "custom" && (
        <div className="custom">
          <textarea
            placeholder="Paste or write your own text here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn" onClick={() => onApplyCustom(input)}>
            Use this text
          </button>
        </div>
      )}
    </div>
  );
}

export default Controls;