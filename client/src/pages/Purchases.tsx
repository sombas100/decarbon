import PurchaseSimulator from "../components/purchases/PurchaseSimulator";
import RecentPurchases from "../components/dashboard/RecentPurchases";

import { useDemo } from "../context/DemoContext";

export default function Purchases() {
  const { purchases } = useDemo();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-navy-900">
          Purchase Management
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          View purchase records and simulate supplier integrations.
        </p>
      </div>

      <PurchaseSimulator />

      <RecentPurchases purchases={purchases} />
    </div>
  );
}
