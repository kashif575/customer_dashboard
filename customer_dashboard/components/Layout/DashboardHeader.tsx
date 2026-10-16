import { Bell, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { Button } from "../ui/Button";
import { useRouter } from "next/navigation";

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
  const [dropDown, setDropDown] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setMobileOpen(window.innerWidth <= 786);
    };

    handleResize(); // Check width on initial render

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setMobileOpen]);

  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    router.push("/login");
  };

  return (
    <header className="dashboard-header">
      {!mobileOpen && (
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
      )}

      <div className="header-actions">
        <Button
          variant="secondary"
          className="icon-button notification-button"
          aria-label="Notifications"
        >
          <Bell size={19} />
          <span className="notification-dot" />
        </Button>

        <button
          className="profile-button"
          aria-label="User profile"
          onClick={() => setDropDown((prev) => !prev)}
        >
          <span className="profile-avatar">KS</span>
          <span className="profile-copy">
            <strong>Kashif</strong>
            <small>Administrator</small>
          </span>
          <ChevronDown size={16} />
        </button>
        {dropDown && (
          <div className="user-drop-down" onClick={handleLogout}>
            <div className="logout">Logout</div>
          </div>
        )}
      </div>
    </header>
  );
}
