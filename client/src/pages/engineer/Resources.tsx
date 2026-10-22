import { useMemo, useState } from "react";
import { BookOpen, Search, X, ArrowUpRight, Info } from "lucide-react";

import ResourceCard from "../../components/engineer/resources/ResourceCard";
import { resources, type ResourceCategory } from "../../data/resources";

type CategoryFilter = "All Resources" | ResourceCategory;

const categories: CategoryFilter[] = [
  "All Resources",
  "F-Gas",
  "Decarbonisation",
  "Health & Safety",
  "Engineering",
];

export default function Resources() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] =
    useState<CategoryFilter>("All Resources");

  const filteredResources = useMemo(() => {
    const query = search.trim().toLowerCase();

    return resources.filter((resource) => {
      const matchesCategory =
        activeCategory === "All Resources" ||
        resource.category === activeCategory;

      const matchesSearch =
        !query ||
        [
          resource.title,
          resource.description,
          resource.category,
          resource.source,
        ].some((value) => value.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="space-y-8">
      {/* Page heading */}
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-decarbon-accent">
          Decarbon / Knowledge Centre
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-decarbon-text">
          Resources & Guidance
        </h2>

        <p className="mt-2 text-sm text-decarbon-muted">
          Technical knowledge for a changing industry.
        </p>
      </div>

      {/* Featured introduction */}
      <section className="relative overflow-hidden rounded-2xl border border-decarbon-border bg-decarbon-surface p-6 lg:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #a3e635 1px, transparent 1px), linear-gradient(to bottom, #a3e635 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <div className="mb-4 flex items-center gap-2">
              <BookOpen size={17} className="text-decarbon-accent" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-decarbon-accent">
                Engineering Knowledge
              </span>
            </div>

            <h3 className="text-2xl font-semibold tracking-tight text-decarbon-text">
              Stay informed. Build responsibly.
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-decarbon-muted">
              Explore guidance covering refrigeration, F-Gas compliance,
              environmental impact, ventilation and indoor air quality.
            </p>
          </div>

          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-decarbon-border bg-decarbon-elevated">
            <BookOpen size={34} className="text-decarbon-accent" />
          </div>
        </div>
      </section>

      {/* Search and filters */}
      <section className="space-y-5">
        <div className="relative">
          <Search
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-decarbon-muted"
          />

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search regulations, equipment, air quality..."
            aria-label="Search resources"
            className="w-full rounded-xl border border-decarbon-border bg-decarbon-surface py-4 pl-12 pr-5 text-sm text-decarbon-text outline-none transition-colors placeholder:text-decarbon-muted/60 focus:border-decarbon-accent focus:ring-1 focus:ring-decarbon-accent"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                activeCategory === category
                  ? "border-decarbon-accent bg-decarbon-accent text-decarbon-bg"
                  : "border-decarbon-border bg-decarbon-surface text-decarbon-muted hover:border-decarbon-accent/40 hover:text-decarbon-text"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-decarbon-text">
            Explore Resources
          </h3>

          <p className="text-xs text-decarbon-muted">
            {filteredResources.length} of {resources.length} resources
          </p>
        </div>

        {filteredResources.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center rounded-2xl border border-decarbon-border bg-decarbon-surface px-6 py-14 text-center">
            <Search size={30} className="text-decarbon-muted" />

            <h4 className="mt-4 text-sm font-semibold text-decarbon-text">
              No matching resources
            </h4>

            <p className="mt-2 text-xs text-decarbon-muted">
              Try another search term or category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All Resources");
              }}
              className="mt-5 flex items-center gap-2 text-xs font-semibold text-decarbon-accent hover:text-decarbon-accent-hover"
            >
              <X size={15} />
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Disclaimer */}
      <div className="flex items-start gap-3 rounded-xl border border-decarbon-border bg-decarbon-elevated/40 p-5">
        <Info size={19} className="mt-0.5 shrink-0 text-decarbon-accent" />

        <div>
          <p className="text-sm font-medium text-decarbon-text">
            Information & Regulatory Guidance
          </p>

          <p className="mt-2 text-xs leading-relaxed text-decarbon-muted">
            Decarbon links to third-party guidance for informational purposes.
            Always consult the latest official requirements relevant to your
            location and activities.
          </p>

          <a
            href="https://www.gov.uk/government/collections/fluorinated-gas-f-gas-guidance-for-users-producers-and-traders"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-decarbon-accent hover:text-decarbon-accent-hover"
          >
            Official UK F-Gas Guidance
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
