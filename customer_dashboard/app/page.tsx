"use client";

import { useState } from "react";
import Sidebar from "../components/Layout/Sidebar";
import DashboardHeader from "../components/Layout/DashboardHeader";
import { Info, ArrowUp } from "lucide-react";
import RevenueChart from "@/components/dashboard/RevenueChart";
import Link from "next/link";
import Image from "next/image";
import User from "../public/user.jpg";

export default function DashboardPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

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
                <span className="rev-title">
                  Monthly Revenue <Info size={18} color="#D3D3D3" />
                </span>
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
            <div className="active-users">
              <div className="Users-list">
                <div className="section-head">
                  <h3>Active Customer</h3>
                  <Link href="/customers">view all</Link>
                </div>
                <div className="user-detail">
                  <div className="profile-img">
                    <Image
                      src={User}
                      alt="User profile"
                      width={50}
                      height={50}
                      className="profile-image"
                      sizes="50px"
                      priority={false}
                    />
                    <span>Acme Inc.</span>
                  </div>
                  <div className="profit-amt">
                    $2.00/ <span>mo</span>
                  </div>
                </div>
                <div className="user-detail">
                  <div className="profile-img">
                    <Image
                      src={User}
                      alt="User profile"
                      width={50}
                      height={50}
                      className="profile-image"
                      sizes="50px"
                      priority={false}
                    />
                    <span>Acme Inc.</span>
                  </div>
                  <div className="profit-amt">
                    $2.00/ <span>mo</span>
                  </div>
                </div>
                <div className="user-detail">
                  <div className="profile-img">
                    <Image
                      src={User}
                      alt="User profile"
                      width={50}
                      height={50}
                      className="profile-image"
                      sizes="50px"
                      priority={false}
                    />
                    <span>Acme Inc.</span>
                  </div>
                  <div className="profit-amt">
                    $2.00/ <span>mo</span>
                  </div>
                </div>
                <div className="user-detail">
                  <div className="profile-img">
                    <Image
                      src={User}
                      alt="User profile"
                      width={50}
                      height={50}
                      className="profile-image"
                      sizes="50px"
                      priority={false}
                    />
                    <span>Acme Inc.</span>
                  </div>
                  <div className="profit-amt">
                    $2.00/ <span>mo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
