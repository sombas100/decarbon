import { useState } from "react";
import { NavLink } from "react-router";
import {
  LayoutDashboard,
  Package,
  Bell,
  Leaf,
  Users,
  Wind,
  X,
  Activity,
  CircleHelp,
} from "lucide-react";

const navigation = [
  {
    name: "Overview",
    path: "/engineer",
    icon: LayoutDashboard,
  },
  {
    name: "Purchases",
    path: "/engineer/purchases",
    icon: Package,
  },
  {
    name: "Notifications",
    path: "/engineer/notifications",
    icon: Bell,
  },
  {
    name: "Resources",
    path: "/engineer/resources",
    icon: Leaf,
  },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className={`
          fixed inset-y-0 left-0 z-50 flex flex-col
          overflow-hidden border-r border-decarbon-border
          bg-decarbon-sidebar
          transition-all duration-300 ease-in-out
          w-64 lg:w-20 lg:hover:w-64
          lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Brand */}
        <div className="flex h-20 shrink-0 items-center border-b border-decarbon-border px-6">
          <div className="flex min-w-0 items-center gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-decarbon-accent">
              <Wind size={19} className="text-decarbon-bg" />
            </div>

            <div
              className={`
                whitespace-nowrap transition-opacity duration-200
                ${isExpanded || isOpen ? "opacity-100" : "lg:opacity-0"}
              `}
            >
              <span className="text-lg font-bold tracking-tight text-decarbon-text">
                decarbon
              </span>

              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-decarbon-muted">
                Engineering Platform
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className="ml-auto text-decarbon-muted lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden px-3 py-7">
          <p
            className={`
              mb-4 px-4 text-[10px] font-semibold uppercase
              tracking-[0.2em] text-decarbon-muted
              whitespace-nowrap transition-opacity duration-200
              ${isExpanded || isOpen ? "opacity-100" : "lg:opacity-0"}
            `}
          >
            Workspace
          </p>

          <nav className="space-y-1.5">
            {navigation.map(({ name, path, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/engineer"}
                onClick={onClose}
                title={!isExpanded ? name : undefined}
                className={({ isActive }) =>
                  `
                  group relative flex h-12 items-center gap-4
                  rounded-xl px-4 text-sm font-medium
                  whitespace-nowrap transition-all duration-200
                  ${
                    isActive
                      ? "bg-decarbon-elevated text-decarbon-accent"
                      : "text-decarbon-muted hover:bg-decarbon-surface hover:text-decarbon-text"
                  }
                  `
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span className="absolute inset-y-3 left-0 w-1 rounded-r-full bg-decarbon-accent" />
                    )}

                    <Icon size={20} strokeWidth={1.8} className="shrink-0" />

                    <span
                      className={`
                        transition-opacity duration-200
                        ${isExpanded || isOpen ? "opacity-100" : "lg:opacity-0"}
                      `}
                    >
                      {name}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Sidebar footer */}
        <div className="shrink-0 border-t border-decarbon-border p-3">
          <div className="flex h-12 items-center gap-4 rounded-xl px-4 text-decarbon-muted">
            <Activity size={20} className="shrink-0 text-decarbon-accent" />

            <div
              className={`
                whitespace-nowrap transition-opacity duration-200
                ${isExpanded || isOpen ? "opacity-100" : "lg:opacity-0"}
              `}
            >
              <p className="text-xs font-medium text-decarbon-text">
                Demo Environment
              </p>

              <p className="text-[10px] text-decarbon-muted">
                Simulated supplier data
              </p>
            </div>
          </div>

          <div className="mt-2 flex h-12 items-center gap-4 rounded-xl px-4 text-decarbon-muted">
            <CircleHelp size={20} className="shrink-0" />

            <span
              className={`
                whitespace-nowrap text-sm transition-opacity duration-200
                ${isExpanded || isOpen ? "opacity-100" : "lg:opacity-0"}
              `}
            >
              Help & Support
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}
