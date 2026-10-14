import { Bell, ChevronDown, Search, Menu, X } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { Button } from "../Button";

interface DashboardHeaderProps {
  mobileOpen: boolean;
  setMobileOpen: Dispatch<SetStateAction<boolean>>;
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}

export default function DashboardHeader({
  mobileOpen,
  setMobileOpen,
  collapsed,
  setCollapsed,
}: DashboardHeaderProps) {
  return (
    <header className="dashboard-header">
      <Button
        variant="secondary"
        className="collapse-button"
        onClick={() => setCollapsed(!collapsed)}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? (
          <Menu size={22} color="#635bff" />
        ) : (
          <X size={20} color="#635bff" />
        )}
      </Button>
      <div className="header-search">
        <Search size={18} />
        <input
          type="search"
          aria-label="Search dashboard"
          placeholder="Search anything..."
        />
      </div>

      <div className="header-actions">
        {/* <div className="header-date">
          <Sparkles size={16} />
          <span>Customer insights</span>
        </div> */}

        <Button
          variant="secondary"
          className="icon-button notification-button"
          aria-label="Notifications"
        >
          <Bell size={19} />
          <span className="notification-dot" />
        </Button>

        <button className="profile-button" aria-label="User profile">
          <span className="profile-avatar">KS</span>
          <span className="profile-copy">
            <strong>Kashif</strong>
            <small>Administrator</small>
          </span>
          <ChevronDown size={16} />
        </button>
      </div>
    </header>
  );
}
