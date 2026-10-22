import { ArrowUpRight, type LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  description?: string;
  highlighted?: boolean;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  description,
  highlighted = false,
}: StatCardProps) {
  return (
    <div
      className={`
        group relative overflow-hidden rounded-2xl border p-6
        transition-all duration-300
        ${
          highlighted
            ? "border-decarbon-accent bg-decarbon-accent"
            : "border-decarbon-border bg-decarbon-surface hover:border-decarbon-accent/40"
        }
      `}
    >
      <div className="flex items-start justify-between">
        <div
          className={`
            flex h-11 w-11 items-center justify-center rounded-xl
            ${highlighted ? "bg-decarbon-bg/10" : "bg-decarbon-elevated"}
          `}
        >
          <Icon
            size={22}
            strokeWidth={1.8}
            className={
              highlighted ? "text-decarbon-bg" : "text-decarbon-accent"
            }
          />
        </div>

        <ArrowUpRight
          size={17}
          className={
            highlighted
              ? "text-decarbon-bg/60"
              : "text-decarbon-muted/50 transition-colors group-hover:text-decarbon-accent"
          }
        />
      </div>

      <div className="mt-6">
        <p
          className={`text-4xl font-semibold tracking-tight ${
            highlighted ? "text-decarbon-bg" : "text-decarbon-text"
          }`}
        >
          {value.toString().padStart(2, "0")}
        </p>

        <h3
          className={`mt-2 text-sm font-medium ${
            highlighted ? "text-decarbon-bg" : "text-decarbon-text"
          }`}
        >
          {title}
        </h3>

        {description && (
          <p
            className={`mt-1 text-xs ${
              highlighted ? "text-decarbon-bg/70" : "text-decarbon-muted"
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
