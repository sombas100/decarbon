import { HardHat, Fingerprint, Building2, Shield } from "lucide-react";
import type { Engineer } from "../../data/mockData";

interface EngineerProfileProps {
  engineer: Engineer;
}

export default function EngineerProfile({ engineer }: EngineerProfileProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-decarbon-border bg-decarbon-surface p-6 lg:p-8">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #a3e635 1px, transparent 1px), linear-gradient(to bottom, #a3e635 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-decarbon-accent" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-decarbon-muted">
              Engineer Identity
            </span>
          </div>

          <span className="rounded-full border border-decarbon-border bg-decarbon-elevated px-3 py-1 text-[11px] font-medium text-decarbon-accent">
            Demonstration Profile
          </span>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-decarbon-border bg-decarbon-elevated">
              <HardHat size={30} className="text-decarbon-accent" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-decarbon-text">
                {engineer.name}
              </h3>

              <p className="mt-1 text-sm text-decarbon-muted">
                {engineer.role}
              </p>

              <div className="mt-3 flex items-center gap-2 text-xs text-decarbon-muted">
                <Building2 size={14} />
                {engineer.company}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-decarbon-border bg-decarbon-bg/80 p-5 lg:min-w-64">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-decarbon-muted">
                F-Gas Identifier
              </span>

              <Fingerprint size={18} className="text-decarbon-accent" />
            </div>

            <p className="mt-3 font-mono text-xl font-semibold tracking-wide text-decarbon-text">
              {engineer.fgasNumber}
            </p>

            <div className="mt-4 flex items-center gap-2 border-t border-decarbon-border pt-3">
              <Shield size={14} className="text-decarbon-muted" />

              <span className="text-[11px] text-decarbon-muted">
                Demo identifier · Not verified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
