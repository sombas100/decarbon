import { Package, Bell, Building2, Activity } from "lucide-react";

import StatCard from "../../components/engineer/dashboard/StatCard";
import EngineerProfile from "../../components/engineer/dashboard/EngineerProfile";
import RecentPurchases from "../../components/engineer/dashboard/RecentPurchases";
import ResetDemoButton from "../../components/engineer/ResetDemoButton";
import IntegrationStatus from "../../components/engineer/IntegrationStatus";

import { useDemo } from "../../context/DemoContext";
import { mockEngineer } from "../../data/mockData";

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
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-decarbon-accent">
            Decarbon / Engineer Portal
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-decarbon-text">
            Overview
          </h2>

          <p className="mt-2 text-sm text-decarbon-muted">
            Welcome back, {mockEngineer.name.split(" ")[0]}. Here's your
            engineering activity overview.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-decarbon-border bg-decarbon-surface px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-decarbon-accent" />

          <span className="text-xs font-medium text-decarbon-muted">
            Demo Workspace
          </span>
        </div>

        <ResetDemoButton />
      </div>

      {/* Engineer identity */}
      <EngineerProfile engineer={mockEngineer} />

      {/* Metrics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Purchases"
          value={purchases.length}
          icon={Package}
          description="Recorded supplier transactions"
          highlighted
        />

        <StatCard
          title="New Notifications"
          value={unreadNotifications}
          icon={Bell}
          description="Unread activity alerts"
        />

        <StatCard
          title="Suppliers"
          value={suppliers}
          icon={Building2}
          description="Associated demo suppliers"
        />

        <StatCard
          title="Activity Events"
          value={purchases.length + notifications.length}
          icon={Activity}
          description="Total demonstration records"
        />
      </div>

      <IntegrationStatus />

      {/* Equipment activity */}
      <RecentPurchases purchases={purchases.slice(0, 5)} />
    </div>
  );
}
