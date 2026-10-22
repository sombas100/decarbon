import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Bell, Check, ArrowUpRight, Inbox } from "lucide-react";

import { useDemo } from "../../context/DemoContext";

export default function NotificationDropdown() {
  const { notifications, markNotificationRead } = useDemo();

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter(
    (notification) => !notification.isRead,
  ).length;

  const recentNotifications = notifications.slice(0, 4);

  useEffect(() => {
    if (!isOpen) return;

    function handleOutsideClick(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      {/* Notification trigger */}
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={`Notifications, ${unreadCount} unread`}
        aria-expanded={isOpen}
        aria-controls="notification-dropdown"
        className={`relative rounded-xl p-2.5 transition-colors ${
          isOpen
            ? "bg-decarbon-elevated text-decarbon-accent"
            : "text-decarbon-muted hover:bg-decarbon-surface hover:text-decarbon-text"
        }`}
      >
        <Bell size={20} strokeWidth={1.8} />

        {unreadCount > 0 && (
          <span className="absolute -right-1 -top-1 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-decarbon-accent px-1 text-[10px] font-bold text-decarbon-bg">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          id="notification-dropdown"
          className="absolute right-0 top-full z-50 mt-3 w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-decarbon-border bg-decarbon-surface shadow-2xl shadow-black/40"
        >
          <div className="flex items-center justify-between border-b border-decarbon-border p-4">
            <div>
              <h3 className="text-sm font-semibold text-decarbon-text">
                Notifications
              </h3>

              <p className="mt-1 text-[11px] text-decarbon-muted">
                {unreadCount} unread alerts
              </p>
            </div>

            <span className="rounded-full bg-decarbon-accent/10 px-2.5 py-1 text-[10px] font-medium text-decarbon-accent">
              Activity
            </span>
          </div>

          <div className="max-h-80 overflow-y-auto">
            {recentNotifications.length === 0 ? (
              <div className="flex flex-col items-center gap-2 px-4 py-10 text-center">
                <Inbox size={25} className="text-decarbon-muted" />

                <p className="text-xs text-decarbon-muted">
                  No notifications yet.
                </p>
              </div>
            ) : (
              recentNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`flex items-start gap-3 border-b border-decarbon-border/70 p-4 last:border-b-0 ${
                    notification.isRead ? "" : "bg-decarbon-accent/[0.035]"
                  }`}
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-decarbon-elevated">
                    <Bell
                      size={15}
                      className={
                        notification.isRead
                          ? "text-decarbon-muted"
                          : "text-decarbon-accent"
                      }
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-decarbon-text">
                      {notification.title}
                    </p>

                    <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-decarbon-muted">
                      {notification.message}
                    </p>

                    <p className="mt-2 text-[10px] text-decarbon-muted/70">
                      {new Date(notification.createdAt).toLocaleString(
                        "en-GB",
                        {
                          dateStyle: "medium",
                          timeStyle: "short",
                        },
                      )}
                    </p>
                  </div>

                  {!notification.isRead && (
                    <button
                      type="button"
                      onClick={() => markNotificationRead(notification.id)}
                      title="Mark as read"
                      aria-label={`Mark ${notification.title} as read`}
                      className="rounded-lg p-1.5 text-decarbon-muted transition-colors hover:bg-decarbon-elevated hover:text-decarbon-accent"
                    >
                      <Check size={15} />
                    </button>
                  )}
                </div>
              ))
            )}
          </div>

          <Link
            to="/notifications"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 border-t border-decarbon-border p-4 text-xs font-semibold text-decarbon-accent transition-colors hover:bg-decarbon-elevated"
          >
            View All Notifications
            <ArrowUpRight size={15} />
          </Link>
        </div>
      )}
    </div>
  );
}
