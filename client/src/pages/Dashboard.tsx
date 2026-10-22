import { Package, Bell, Building2, Activity } from "lucide-react";

import StatCard from "../components/dashboard/StatCard";
import EngineerProfile from "../components/dashboard/EngineerProfile";
import RecentPurchases from "../components/dashboard/RecentPurchases";

import { mockEngineer } from "../data/mockData";
import { useDemo } from "../context/DemoContext";

export default function Dashboard() {
  const { purchases, notifications } = useDemo();

  const unreadNotifications = notifications.filter(
    (notification) => !notification.isRead,
  ).length;

  const suppliers = new Set(purchases.map((purchase) => purchase.supplier))
    .size;

  return (
    <div className="space-y-8">
      {/* Page heading */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Engineer Portal / Overview
        </p>

        <h2 className="mt-2 text-2xl font-bold text-navy-900">
          Dashboard Overview
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Welcome back, {mockEngineer.name.split(" ")[0]}.
        </p>
      </div>

      {/* Engineer profile */}
      <EngineerProfile engineer={mockEngineer} />

      {/* Dashboard statistics */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Purchases"
          value={purchases.length}
          icon={Package}
        />

        <StatCard
          title="New Notifications"
          value={unreadNotifications}
          icon={Bell}
        />

        <StatCard title="Suppliers" value={suppliers} icon={Building2} />

        <StatCard
          title="Recent Activity"
          value={purchases.length + notifications.length}
          icon={Activity}
        />
      </div>

      {/* Purchase activity */}
      <RecentPurchases purchases={purchases.slice(0, 5)} />
    </div>
  );
}
