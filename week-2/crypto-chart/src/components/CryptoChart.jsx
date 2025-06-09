import {
  LineChart,
  Line,
  CartesianGrid,
  YAxis,
  XAxis,
  ResponsiveContainer,
} from "recharts";

export function CryptoChart({ data }) {
  console.log("data", data);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="bitcoinPrice" stroke="#8884d8" />
        <Line type="monotone" dataKey="ethereumPrice" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis domain={["dataMin", "dataMax"]} />
      </LineChart>
    </ResponsiveContainer>
  );
}
