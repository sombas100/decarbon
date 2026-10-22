import { Bell, Menu, CircleUserRound } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-5 lg:px-8">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open navigation"
          className="text-slate-700 lg:hidden"
        >
          <Menu size={24} />
        </button>

        <div>
          <h1 className="text-lg font-semibold text-navy-900">
            Engineer Portal
          </h1>
          <p className="text-xs text-slate-500">Decarbon Management Platform</p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <span className="hidden rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 sm:inline-flex">
          Demo Mode
        </span>

        <Bell size={20} className="text-slate-600" />

        <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
          <CircleUserRound size={28} className="text-slate-600" />
          <span className="hidden text-sm font-medium text-slate-700 md:block">
            Demo Engineer
          </span>
        </div>
      </div>
    </header>
  );
}
