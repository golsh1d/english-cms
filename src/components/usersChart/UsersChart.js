import React from "react";
import "./UsersChart.css";
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

export default function UsersChart() {
  const [usersData, setUsersData] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/api/userCount/`)
      .then((res) => res.json())
      .then((data) => setUsersData(data));
  }, []);

  return (
    <ResponsiveContainer
      width="100%"
      height={250}
      className="UsersChart-container"
    >
      <LineChart data={usersData}>
        <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#C68484"
          strokeWidth={2}
          name="users count"
        />
        <XAxis dataKey="name" />
        <YAxis
          width="auto"
          label={{ value: "users count", position: "insideLeft", angle: -90 }}
        />
        <Legend align="right" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}
