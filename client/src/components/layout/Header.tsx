import {
  Bell,
  Menu,
  ChevronDown,
  CircleUserRound,
  ShieldCheck,
} from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-decarbon-border bg-decarbon-bg/95 px-5 backdrop-blur-xl lg:px-8">
      {/* Left section */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open navigation"
          className="text-decarbon-muted hover:text-decarbon-text lg:hidden"
        >
          <Menu size={23} />
        </button>

        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-decarbon-accent" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-decarbon-muted">
              Engineer Workspace
            </p>
          </div>

          <h1 className="mt-1 text-sm font-semibold text-decarbon-text">
            Decarbon Management Platform
          </h1>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-2 rounded-full border border-decarbon-border bg-decarbon-surface px-3 py-1.5 sm:flex">
          <ShieldCheck size={14} className="text-decarbon-accent" />

          <span className="text-[11px] font-medium text-decarbon-muted">
            Demo Mode
          </span>
        </div>

        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-xl p-2.5 text-decarbon-muted transition-colors hover:bg-decarbon-surface hover:text-decarbon-text"
        >
          <Bell size={20} strokeWidth={1.8} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-decarbon-accent ring-2 ring-decarbon-bg" />
        </button>

        <div className="hidden h-8 w-px bg-decarbon-border sm:block" />

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-decarbon-border bg-decarbon-elevated">
            <CircleUserRound size={21} className="text-decarbon-accent" />
          </div>

          <div className="hidden md:block">
            <p className="text-xs font-semibold text-decarbon-text">
              Alex Morgan
            </p>

            <p className="text-[10px] text-decarbon-muted">HVAC Engineer</p>
          </div>

          <ChevronDown
            size={15}
            className="hidden text-decarbon-muted md:block"
          />
        </div>
      </div>
    </header>
  );
}
