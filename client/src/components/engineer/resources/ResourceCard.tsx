import {
  ArrowUpRight,
  BookOpen,
  Leaf,
  ShieldCheck,
  Wrench,
  Wind,
  type LucideIcon,
} from "lucide-react";

import type { Resource, ResourceCategory } from "../../../data/resources";

interface ResourceCardProps {
  resource: Resource;
}

const categoryIcons: Record<ResourceCategory, LucideIcon> = {
  "F-Gas": ShieldCheck,
  Decarbonisation: Leaf,
  "Health & Safety": Wind,
  Engineering: Wrench,
};

export default function ResourceCard({ resource }: ResourceCardProps) {
  const Icon = categoryIcons[resource.category];

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-decarbon-border bg-decarbon-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-decarbon-accent/50 hover:shadow-xl hover:shadow-black/10">
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-decarbon-border bg-decarbon-elevated">
          <Icon size={23} className="text-decarbon-accent" />
        </div>

        <span className="rounded-full border border-decarbon-border px-3 py-1 text-[10px] font-medium text-decarbon-muted">
          {resource.audience}
        </span>
      </div>

      <div className="mt-6 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-decarbon-accent">
          {resource.category}
        </p>

        <h3 className="mt-3 text-lg font-semibold tracking-tight text-decarbon-text">
          {resource.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-decarbon-muted">
          {resource.description}
        </p>
      </div>

      <div className="mt-7 flex items-center justify-between border-t border-decarbon-border pt-5">
        <div className="flex items-center gap-2 text-xs text-decarbon-muted">
          <BookOpen size={14} />
          {resource.source}
        </div>

        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Read ${resource.title} on ${resource.source} (opens in a new tab)`}
          className="flex items-center gap-2 text-xs font-semibold text-decarbon-accent transition-colors hover:text-decarbon-accent-hover"
        >
          Read Guide
          <ArrowUpRight size={15} />
        </a>
      </div>
    </article>
  );
}
