import { Bell, CheckCircle2 } from "lucide-react";

import { useDemo } from "../context/DemoContext";

export default function Notifications() {
  const { notifications, markNotificationRead } = useDemo();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-navy-900">Notifications</h2>

        <p className="mt-2 text-sm text-slate-500">
          Purchase alerts and industry updates.
        </p>
      </div>

      <div className="space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`rounded-xl border p-5 shadow-sm ${
              notification.isRead
                ? "border-slate-200 bg-white"
                : "border-green-200 bg-green-50/40"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-white p-3">
                <Bell size={20} className="text-industrial-green" />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-navy-900">
                  {notification.title}
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                  {notification.message}
                </p>

                <p className="mt-2 text-xs text-slate-400">
                  {new Date(notification.createdAt).toLocaleDateString("en-GB")}
                </p>
              </div>

              {!notification.isRead && (
                <button
                  type="button"
                  onClick={() => markNotificationRead(notification.id)}
                  aria-label={`Mark ${notification.title} as read`}
                  title="Mark as read"
                  className="rounded-lg p-2 text-green-700 hover:bg-green-100"
                >
                  <CheckCircle2 size={20} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
