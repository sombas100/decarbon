import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  description?: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  description,
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500">{title}</span>

        <div className="rounded-lg bg-green-50 p-2">
          <Icon size={20} className="text-industrial-green" />
        </div>
      </div>

      <p className="mt-4 text-3xl font-bold text-navy-900">{value}</p>

      {description && (
        <p className="mt-2 text-xs text-slate-500">{description}</p>
      )}
    </div>
  );
}
