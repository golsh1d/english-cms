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
import { useState, useEffect } from "react";

export default function SaleChart() {
  const [salesData, setSalesData] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/api/sales/`)
      .then((res) => res.json())
      .then((data) => setSalesData(data));
  }, []);

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={salesData}>
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
