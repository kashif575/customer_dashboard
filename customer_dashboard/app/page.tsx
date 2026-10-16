"use client";

import { useEffect, useState } from "react";
import Sidebar from "../components/Layout/Sidebar";
import DashboardHeader from "../components/Layout/DashboardHeader";
import { Info, ArrowUp } from "lucide-react";
import RevenueChart from "../components/dashboard/RevenueChart";
import MetricCard from "../components/dashboard/MatricCard";
import { dashboardMetrics } from "@/data/dashboardMetrics";
import ActiveCustomers from "@/components/dashboard/ActiveCustomers";

export default function DashboardPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 786px)");

    const handleResize = () => {
      setMobileOpen(mediaQuery.matches);
    };

    handleResize();

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, [setMobileOpen]);

  return (
    <div className={`app-shell ${sidebarCollapsed ? "sidebar-collapsed" : ""}`}>
      <Sidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />

      <main className="main-content">
        <DashboardHeader
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          collapsed={sidebarCollapsed}
          setCollapsed={setSidebarCollapsed}
        />

        <div className="page-content">
          <h1>Overview</h1>
          <div className="revenue-status">
            <div className="revenue-generated">
              <div className="revenue-box-head">
                <h3 className="rev-title">
                  Monthly Revenue <Info size={18} color="#D3D3D3" />
                </h3>
                <div className="revenue-infigure">
                  120,000 <span>AED</span>
                </div>
                <div className="rev-card-bottom">
                  <span>
                    {" "}
                    <ArrowUp className="w-4 h-4" /> 50%{" "}
                  </span>{" "}
                  vs 1st sept 26 - 30th sept 26 (90,000)
                </div>
              </div>
              <div className="revenue-chart">
                <RevenueChart />
              </div>
            </div>
            <ActiveCustomers />
          </div>
          <div className="dashboard-metrics">
            {dashboardMetrics.map((metric) => (
              <MetricCard
                key={metric.id}
                title={metric.title}
                amount={metric.amount}
                change={metric.change}
                comparisonText={metric.comparisonText}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
