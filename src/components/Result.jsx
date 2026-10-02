import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function Result({ wpm, accuracy, correct, mistakes, seconds, samples, onRestart }) {
  return (
    <div className="card result">
      <h2>🏁 Test Complete</h2>

      <div className="result-stats">
        <div>
          <span>WPM</span>
          <b className="gold">{wpm}</b>
        </div>
        <div>
          <span>Accuracy</span>
          <b>{accuracy}%</b>
        </div>
        <div>
          <span>Correct chars</span>
          <b>{correct}</b>
        </div>
        <div>
          <span>Mistakes</span>
          <b>{mistakes}</b>
        </div>
        <div>
          <span>Time</span>
          <b>{seconds}s</b>
        </div>
      </div>

      <h3>Speed during this test</h3>
      <div className="chart-box">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={samples}>
            <CartesianGrid stroke="#2a2f3a" strokeDasharray="3 3" />
            <XAxis dataKey="second" stroke="#7c8496" unit="s" />
            <YAxis stroke="#7c8496" allowDecimals={false} />
            <Tooltip
              contentStyle={{ background: "#1c2029", border: "1px solid #2a2f3a" }}
            />
            <Line
              type="monotone"
              dataKey="wpm"
              stroke="#d4a95a"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <button className="btn" onClick={onRestart}>
        Try Again
      </button>
    </div>
  );
}

export default Result;