import { createContext, useContext, useState, type ReactNode } from "react";

import {
  mockEngineer,
  mockPurchases,
  mockNotifications,
  type Purchase,
  type EngineerNotification,
} from "../data/mockData";

interface NewPurchase {
  productName: string;
  supplier: string;
  reference: string;
  fgasNumber: string;
}

interface DemoContextType {
  purchases: Purchase[];
  notifications: EngineerNotification[];
  simulatePurchase: (purchase: NewPurchase) => boolean;
  markNotificationRead: (id: string) => void;
  resetDemo: () => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [purchases, setPurchases] = useState<Purchase[]>(mockPurchases);

  const [notifications, setNotifications] =
    useState<EngineerNotification[]>(mockNotifications);

  function simulatePurchase(purchase: NewPurchase): boolean {
    // Match the supplier-provided F-Gas identifier
    // against our demonstration engineer.
    if (
      purchase.fgasNumber.trim().toUpperCase() !==
      mockEngineer.fgasNumber.toUpperCase()
    ) {
      return false;
    }

    const id = crypto.randomUUID();
    const date = new Date().toISOString();

    const newPurchase: Purchase = {
      id,
      productName: purchase.productName.trim(),
      supplier: purchase.supplier.trim(),
      reference: purchase.reference.trim(),
      purchaseDate: date,
      status: "recorded",
    };

    const newNotification: EngineerNotification = {
      id: crypto.randomUUID(),
      title: "New Purchase Recorded",
      message: `${newPurchase.productName} from ${newPurchase.supplier} has been linked to your F-Gas identifier.`,
      createdAt: date,
      isRead: false,
    };

    setPurchases((prev) => [newPurchase, ...prev]);

    setNotifications((prev) => [newNotification, ...prev]);

    return true;
  }

  function markNotificationRead(id: string) {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification,
      ),
    );
  }

  function resetDemo() {
    setPurchases(mockPurchases);
    setNotifications(mockNotifications);
  }

  return (
    <DemoContext.Provider
      value={{
        purchases,
        notifications,
        simulatePurchase,
        markNotificationRead,
        resetDemo,
      }}
    >
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  const context = useContext(DemoContext);

  if (!context) {
    throw new Error("useDemo must be used within DemoProvider");
  }

  return context;
}
