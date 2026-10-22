import { Link } from "react-router";
import { Package } from "lucide-react";
import type { Purchase } from "../../data/mockData";

interface RecentPurchasesProps {
  purchases: Purchase[];
}

export default function RecentPurchases({ purchases }: RecentPurchasesProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-navy-900">
          Recent Purchases
        </h3>

        <Link
          to="/purchases"
          className="text-sm font-medium text-industrial-green hover:underline"
        >
          View all
        </Link>
      </div>

      <div className="divide-y divide-slate-100">
        {purchases.map((purchase) => (
          <div
            key={purchase.id}
            className="flex flex-wrap items-center gap-4 py-4"
          >
            <div className="rounded-lg bg-slate-100 p-3">
              <Package size={20} className="text-slate-600" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="font-medium text-navy-900">
                {purchase.productName}
              </p>

              <p className="text-xs text-slate-500">
                {purchase.supplier} · {purchase.reference}
              </p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                purchase.status === "recorded"
                  ? "bg-green-50 text-green-700"
                  : "bg-amber-50 text-amber-700"
              }`}
            >
              {purchase.status === "recorded" ? "Recorded" : "Pending"}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
