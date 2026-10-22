export interface Engineer {
  id: string;
  name: string;
  email: string;
  fgasNumber: string;
  company: string;
  role: string;
}

export interface Purchase {
  id: string;
  productName: string;
  supplier: string;
  purchaseDate: string;
  reference: string;
  status: "recorded" | "pending";
}

export interface EngineerNotification {
  id: string;
  title: string;
  message: string;
  createdAt: string;
  isRead: boolean;
}

export const mockEngineer: Engineer = {
  id: "eng-001",
  name: "Alex Morgan",
  email: "alex@example.com",
  fgasNumber: "DEMO-FG-001",
  company: "Demo HVAC Services",
  role: "HVAC Engineer",
};

export const mockPurchases: Purchase[] = [
  {
    id: "pur-001",
    productName: "Air Conditioning Unit",
    supplier: "Demo Supplier A",
    purchaseDate: "2026-10-20",
    reference: "DEMO-ORD-1001",
    status: "recorded",
  },
  {
    id: "pur-002",
    productName: "Refrigerant Equipment",
    supplier: "Demo Supplier B",
    purchaseDate: "2026-10-18",
    reference: "DEMO-ORD-1002",
    status: "recorded",
  },
  {
    id: "pur-003",
    productName: "HVAC Installation Kit",
    supplier: "Demo Supplier A",
    purchaseDate: "2026-10-16",
    reference: "DEMO-ORD-1003",
    status: "pending",
  },
];

export const mockNotifications: EngineerNotification[] = [
  {
    id: "not-001",
    title: "New Purchase Recorded",
    message: "A supplier purchase has been associated with your demo F-Gas identifier.",
    createdAt: "2026-10-20",
    isRead: false,
  },
  {
    id: "not-002",
    title: "Equipment Update",
    message: "New equipment information is available.",
    createdAt: "2026-10-19",
    isRead: false,
  },
  {
    id: "not-003",
    title: "Industry Update",
    message: "New refrigeration industry guidance is available.",
    createdAt: "2026-10-18",
    isRead: false,
  },
];