import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Database,
  Fingerprint,
  Network,
  PlugZap,
  BellRing,
} from "lucide-react";

export default function IntegrationStatus() {
  return (
    <section className="overflow-hidden rounded-2xl border border-decarbon-border bg-decarbon-surface">
      {/* Heading */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-decarbon-border p-6">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-decarbon-accent">
            Supplier Connectivity
          </p>

          <h3 className="mt-2 text-lg font-semibold text-decarbon-text">
            Integration Status
          </h3>

          <p className="mt-1 text-xs text-decarbon-muted">
            Current prototype capabilities and future supplier connections.
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-decarbon-elevated">
          <Network size={21} className="text-decarbon-accent" />
        </div>
      </div>

      {/* Status cards */}
      <div className="grid gap-4 p-6 md:grid-cols-2">
        <div className="rounded-xl border border-decarbon-border bg-decarbon-bg p-5">
          <div className="flex items-center gap-3">
            <Database size={20} className="text-decarbon-accent" />

            <h4 className="text-sm font-semibold text-decarbon-text">
              Demo Supplier Integration
            </h4>
          </div>

          <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-decarbon-accent/20 bg-decarbon-accent/10 px-3 py-1.5 text-[11px] font-medium text-decarbon-accent">
            <CheckCircle2 size={13} />
            Simulation Ready
          </span>

          <p className="mt-4 text-xs leading-relaxed text-decarbon-muted">
            Supplier transactions can be simulated and linked to the
            demonstration engineer using their F-Gas identifier.
          </p>
        </div>

        <div className="rounded-xl border border-decarbon-border bg-decarbon-bg p-5">
          <div className="flex items-center gap-3">
            <PlugZap size={20} className="text-amber-400" />

            <h4 className="text-sm font-semibold text-decarbon-text">
              Live Supplier APIs
            </h4>
          </div>

          <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-[11px] font-medium text-amber-400">
            <Clock3 size={13} />
            Access Pending
          </span>

          <p className="mt-4 text-xs leading-relaxed text-decarbon-muted">
            Real transaction data will require supplier approval, available
            integration methods and appropriate data-sharing arrangements.
          </p>
        </div>
      </div>

      {/* Workflow */}
      <div className="border-t border-decarbon-border bg-decarbon-elevated/30 p-6">
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-decarbon-muted">
          Demonstrated Workflow
        </p>

        <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
          <WorkflowStep
            icon={Database}
            title="Supplier Purchase"
            description="Simulated transaction"
          />

          <ArrowRight
            size={17}
            className="hidden text-decarbon-muted md:block"
          />

          <WorkflowStep
            icon={Fingerprint}
            title="F-Gas Matching"
            description="Demo identifier lookup"
          />

          <ArrowRight
            size={17}
            className="hidden text-decarbon-muted md:block"
          />

          <WorkflowStep
            icon={BellRing}
            title="Engineer Alert"
            description="In-app notification"
          />
        </div>
      </div>
    </section>
  );
}

interface WorkflowStepProps {
  icon: typeof Database;
  title: string;
  description: string;
}

function WorkflowStep({ icon: Icon, title, description }: WorkflowStepProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-decarbon-border bg-decarbon-surface p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-decarbon-elevated">
        <Icon size={18} className="text-decarbon-accent" />
      </div>

      <div>
        <p className="text-xs font-semibold text-decarbon-text">{title}</p>

        <p className="mt-1 text-[11px] text-decarbon-muted">{description}</p>
      </div>
    </div>
  );
}
