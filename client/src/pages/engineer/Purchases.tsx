import { Database, ArrowDownToLine } from "lucide-react";

import PurchaseSimulator from "../../components/engineer/purchases/PurchaseSimulator";
import RecentPurchases from "../../components/engineer/dashboard/RecentPurchases";
import { useDemo } from "../../context/DemoContext";

export default function Purchases() {
  const { purchases } = useDemo();

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-decarbon-accent">
            Decarbon / Supplier Integrations
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-decarbon-text">
            Purchase Management
          </h2>

          <p className="mt-2 text-sm text-decarbon-muted">
            Simulate supplier transactions and review linked equipment records.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-decarbon-border bg-decarbon-surface px-4 py-2">
          <Database size={15} className="text-decarbon-accent" />

          <span className="text-xs font-medium text-decarbon-muted">
            {purchases.length} Demo Records
          </span>
        </div>
      </div>

      <PurchaseSimulator />

      <RecentPurchases purchases={purchases} />
    </div>
  );
}
