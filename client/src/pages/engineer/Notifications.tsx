import { Bell, Check, BellRing, Inbox } from "lucide-react";

import { useDemo } from "../../context/DemoContext";

export default function Notifications() {
  const { notifications, markNotificationRead } = useDemo();

  const unreadCount = notifications.filter(
    (notification) => !notification.isRead,
  ).length;

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-decarbon-accent">
            Decarbon / Activity Centre
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-decarbon-text">
            Notifications
          </h2>

          <p className="mt-2 text-sm text-decarbon-muted">
            Monitor equipment activity and important updates.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-decarbon-border bg-decarbon-surface px-4 py-2">
          <BellRing size={15} className="text-decarbon-accent" />

          <span className="text-xs font-medium text-decarbon-muted">
            {unreadCount} Unread
          </span>
        </div>
      </div>

      {/* Notification feed */}
      <section className="overflow-hidden rounded-2xl border border-decarbon-border bg-decarbon-surface">
        <div className="flex items-center justify-between border-b border-decarbon-border p-6">
          <div>
            <h3 className="text-lg font-semibold text-decarbon-text">
              Activity Feed
            </h3>

            <p className="mt-1 text-xs text-decarbon-muted">
              Your latest platform notifications
            </p>
          </div>

          <Bell size={19} className="text-decarbon-accent" />
        </div>

        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-3 py-16">
            <Inbox size={32} className="text-decarbon-muted" />

            <p className="text-sm text-decarbon-muted">
              No notifications available.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-decarbon-border">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-start gap-4 p-6 transition-colors ${
                  notification.isRead
                    ? "hover:bg-decarbon-elevated/20"
                    : "bg-decarbon-accent/[0.035] hover:bg-decarbon-elevated/40"
                }`}
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    notification.isRead
                      ? "bg-decarbon-elevated"
                      : "bg-decarbon-accent/10"
                  }`}
                >
                  <Bell
                    size={19}
                    className={
                      notification.isRead
                        ? "text-decarbon-muted"
                        : "text-decarbon-accent"
                    }
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h4 className="text-sm font-semibold text-decarbon-text">
                      {notification.title}
                    </h4>

                    {!notification.isRead && (
                      <span className="h-2 w-2 rounded-full bg-decarbon-accent" />
                    )}
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-decarbon-muted">
                    {notification.message}
                  </p>

                  <p className="mt-3 text-xs text-decarbon-muted/70">
                    {new Date(notification.createdAt).toLocaleString("en-GB", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </p>
                </div>

                {!notification.isRead && (
                  <button
                    type="button"
                    onClick={() => markNotificationRead(notification.id)}
                    title="Mark as read"
                    aria-label={`Mark ${notification.title} as read`}
                    className="rounded-lg border border-decarbon-border p-2 text-decarbon-muted transition-colors hover:border-decarbon-accent hover:text-decarbon-accent"
                  >
                    <Check size={17} />
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
