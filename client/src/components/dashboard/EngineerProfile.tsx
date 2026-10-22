import { HardHat, ShieldCheck } from "lucide-react";
import type { Engineer } from "../../data/mockData";

interface EngineerProfileProps {
  engineer: Engineer;
}

export default function EngineerProfile({ engineer }: EngineerProfileProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-slate-100 p-3">
            <HardHat size={28} className="text-navy-900" />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-navy-900">
              {engineer.name}
            </h3>

            <p className="text-sm text-slate-500">{engineer.role}</p>

            <p className="text-xs text-slate-400">{engineer.company}</p>
          </div>
        </div>

        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
          Demo Profile
        </span>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
        <div>
          <p className="text-xs font-medium text-slate-500">F-Gas Identifier</p>

          <p className="mt-1 font-semibold text-navy-900">
            {engineer.fgasNumber}
          </p>
        </div>

        <ShieldCheck size={24} className="text-industrial-green" />
      </div>
    </section>
  );
}
