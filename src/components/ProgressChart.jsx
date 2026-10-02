import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function ProgressChart({ results }) {
  const data = results.slice(-15).map((r, i) => ({
    test: i + 1,
    wpm: r.wpm,
    accuracy: r.accuracy,
  }));

  return (
    <div className="card">
      <h3>📈 Your Progress</h3>

      {data.length < 2 ? (
        <p className="muted">Complete at least two tests to see your progress graph.</p>
      ) : (
        <div className="chart-box">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid stroke="#2a2f3a" strokeDasharray="3 3" />
              <XAxis dataKey="test" stroke="#7c8496" />
              <YAxis stroke="#7c8496" allowDecimals={false} />
              <Tooltip
                contentStyle={{ background: "#1c2029", border: "1px solid #2a2f3a" }}
              />
              <Legend />
              <Line type="monotone" dataKey="wpm" stroke="#d4a95a" strokeWidth={3} />
              <Line type="monotone" dataKey="accuracy" stroke="#4ade80" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default ProgressChart;