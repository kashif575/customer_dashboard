"Use Client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useState } from "react";

const revenueData = [
  { month: "May", revenue: 28500 },
  { month: "Jun", revenue: 31200 },
  { month: "Jul", revenue: 29800 },
  { month: "Aug", revenue: 35600 },
  { month: "Sep", revenue: 38200 },
  { month: "Oct", revenue: 42100 },
  { month: "Nov", revenue: 39800 },
  { month: "Dec", revenue: 46500 },
  { month: "Jan", revenue: 48200 },
  { month: "Feb", revenue: 51800 },
  { month: "Mar", revenue: 49300 },
  { month: "Apr", revenue: 58400 },
];

const periods = ["12 months", "6 months", "30 days"];

export default function RecentCustomer() {
  const [period, setPeriod] = useState("12 months");

  const visibleData =
    period === "6 months"
      ? revenueData.slice(-6)
      : period === "30 days"
        ? revenueData.slice(-1)
        : revenueData;

  return (
    <section className="panel revenue panel">
      <div className="panel-header">
        <div className="panel-title">
          <h2>Revenue Overview</h2>
          <p className="panel-subtitle">Monthly recurring revenue over time</p>
        </div>

        <label className="period-select-label">
          <span className="sr-only">Chart period</span>
        </label>
        <select
          className="period-select"
          value={period}
          onChange={(event) => setPeriod(event.target.value)}
        >
          {periods.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
