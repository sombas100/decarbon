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
} from "lucide-react";

const navigation = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Purchases", path: "/purchases", icon: Package },
  { name: "Notifications", path: "/notifications", icon: Bell },
  { name: "Resources", path: "/resources", icon: Leaf },
  { name: "Community", path: "/community", icon: Users },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className={`
          fixed inset-y-0 left-0 z-50 flex flex-col
          bg-navy-900 text-white
          transition-all duration-200 ease-in-out
          w-64 lg:w-20 lg:hover:w-64
          lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between overflow-hidden border-b border-white/10 px-6">
          <div className="flex items-center gap-3 whitespace-nowrap">
            <Wind className="shrink-0 text-green-400" size={28} />

            <span
              className={`
                text-xl font-bold tracking-tight
                transition-opacity duration-150
                ${isExpanded || isOpen ? "opacity-100" : "lg:opacity-0"}
              `}
            >
              Decarbon
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className="lg:hidden"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 overflow-hidden px-4 py-6">
          {navigation.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={onClose}
              title={!isExpanded ? name : undefined}
              className={({ isActive }) =>
                `flex h-12 items-center gap-4 rounded-lg px-3
                text-sm font-medium whitespace-nowrap
                transition-colors duration-150
                ${
                  isActive
                    ? "bg-navy-800 text-white"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <Icon size={20} className="shrink-0" />

              <span
                className={`
                  transition-opacity duration-150
                  ${isExpanded || isOpen ? "opacity-100" : "lg:opacity-0"}
                `}
              >
                {name}
              </span>
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="overflow-hidden border-t border-white/10 p-5">
          <div
            className={`
              whitespace-nowrap transition-opacity duration-150
              ${isExpanded || isOpen ? "opacity-100" : "lg:opacity-0"}
            `}
          >
            <p className="text-xs text-slate-400">Decarbon Prototype</p>

            <p className="mt-1 text-xs text-green-400">Demo Environment</p>
          </div>
        </div>
      </aside>
    </>
  );
}
