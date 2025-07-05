import React from "react";
import "./SaleChart.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function SaleChart() {
  const data = [
    { name: "PRD1", uv: 200, pv: 2400, amt: 2400 },
    { name: "PRD2", uv: 400, pv: 2400, amt: 2400 },
    { name: "PRD3", uv: 300, pv: 2400, amt: 2400 },
    { name: "PRD4", uv: 500, pv: 2400, amt: 2400 },
    { name: "PRD5", uv: 100, pv: 2400, amt: 2400 },
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#C68484"
          strokeWidth={2}
          name="sales count"
        />
        <XAxis dataKey="name" />
        <YAxis
          width="auto"
          label={{ value: "sales count", position: "insideLeft", angle: -90 }}
        />
        <Legend align="right" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}
