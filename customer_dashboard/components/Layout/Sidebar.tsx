"use client";

import {
  Building2,
  CreditCard,
  LayoutDashboard,
  Menu,
  Users,
  X,
} from "lucide-react";
import { useEffect, type Dispatch, type SetStateAction } from "react";
import { Button } from "../ui/Button";
import Link from "next/link";

interface SidebarProps {
  mobileOpen: boolean;
  setMobileOpen: Dispatch<SetStateAction<boolean>>;
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}

const navigation = [
  { label: "Overview", href: "/", icon: LayoutDashboard },
  { label: "Customers", href: "/customers", icon: Users },
  { label: "Subscriptions", href: "/subscriptions", icon: CreditCard },
];

export default function Sidebar({
  mobileOpen,
  setMobileOpen,
  collapsed,
  setCollapsed,
}: SidebarProps) {
  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth <= 786);
    };

    handleResize(); // Check initial width
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setCollapsed]);
  return (
    <>
      <Button
        variant="secondary"
        className="mobile-menu-button"
        onClick={() => setMobileOpen(true)}
        aria-label="Open navigation"
      >
        <Menu size={22} />
      </Button>

      {mobileOpen && (
        <button
          className="sidebar-overlay"
          onClick={() => setMobileOpen(false)}
          aria-label="Close navigation"
        />
      )}

      <aside
        className={`sidebar ${
          collapsed ? "sidebar-collapsed" : ""
        } ${mobileOpen ? "sidebar-mobile-open" : ""}`}
      >
        <div className="sidebar-brand">
          <div className="brand-icon">
            <Building2 size={22} />
          </div>

          {!collapsed && (
            <div className="brand-copy">
              <span className="brand-name">MetricFlow</span>
            </div>
          )}

          <button
            className="mobile-close-button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation"
          >
            <X size={20} />
          </button>
        </div>

        {!collapsed && <p className="nav-section-label">WORKSPACE</p>}

        <nav className="sidebar-nav" aria-label="Main navigation">
          {navigation.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              title={collapsed ? label : undefined}
              className={`nav-link ${
                label === "Overview" ? "nav-link-active" : ""
              }`}
              onClick={() => setMobileOpen(false)}
            >
              <Icon size={19} />
              {!collapsed && <span>{label}</span>}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
