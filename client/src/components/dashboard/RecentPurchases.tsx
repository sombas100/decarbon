import { Link } from "react-router";
import { ArrowUpRight, Package } from "lucide-react";
import type { Purchase } from "../../data/mockData";

interface RecentPurchasesProps {
  purchases: Purchase[];
}

export default function RecentPurchases({ purchases }: RecentPurchasesProps) {
  return (
    <section className="overflow-hidden rounded-2xl border border-decarbon-border bg-decarbon-surface">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-decarbon-border p-6">
        <div>
          <h3 className="text-lg font-semibold text-decarbon-text">
            Equipment Activity
          </h3>

          <p className="mt-1 text-xs text-decarbon-muted">
            Recent supplier purchase records
          </p>
        </div>

        <Link
          to="/purchases"
          className="flex items-center gap-2 text-xs font-semibold text-decarbon-accent transition-colors hover:text-decarbon-accent-hover"
        >
          View all
          <ArrowUpRight size={15} />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px] text-left">
          <thead className="border-b border-decarbon-border bg-decarbon-elevated/50">
            <tr className="text-[10px] font-semibold uppercase tracking-wider text-decarbon-muted">
              <th className="px-6 py-4">Equipment</th>
              <th className="px-6 py-4">Supplier</th>
              <th className="px-6 py-4">Reference</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-decarbon-border">
            {purchases.map((purchase) => (
              <tr
                key={purchase.id}
                className="transition-colors hover:bg-decarbon-elevated/50"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-decarbon-elevated">
                      <Package size={17} className="text-decarbon-accent" />
                    </div>

                    <span className="text-sm font-medium text-decarbon-text">
                      {purchase.productName}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-4 text-sm text-decarbon-muted">
                  {purchase.supplier}
                </td>

                <td className="px-6 py-4 font-mono text-xs text-decarbon-muted">
                  {purchase.reference}
                </td>

                <td className="px-6 py-4 text-xs text-decarbon-muted">
                  {new Date(purchase.purchaseDate).toLocaleDateString("en-GB")}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-medium ${
                      purchase.status === "recorded"
                        ? "border-decarbon-accent/20 bg-decarbon-accent/10 text-decarbon-accent"
                        : "border-amber-500/20 bg-amber-500/10 text-amber-400"
                    }`}
                  >
                    {purchase.status === "recorded" ? "Recorded" : "Pending"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {purchases.length === 0 && (
          <div className="p-8 text-center text-sm text-decarbon-muted">
            No purchase records available.
          </div>
        )}
      </div>
    </section>
  );
}
