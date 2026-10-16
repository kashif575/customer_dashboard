"Use Client";

import { useState } from "react";

const periods = ["12 months", "6 months", "30 days"];

export default function RecentCustomer() {
  const [period, setPeriod] = useState("12 months");

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
