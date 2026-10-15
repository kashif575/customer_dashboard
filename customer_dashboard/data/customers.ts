import type { Customer } from "@/types/customer";

export const customersData: Customer[] = [
  {
    id: "CUS-001",
    name: "Aarav Sharma",
    email: "aarav@example.com",
    plan: "Enterprise",
    status: "Active",
    revenue: 12400,
  },
  {
    id: "CUS-002",
    name: "Sara Khan",
    email: "sara@example.com",
    plan: "Pro",
    status: "Active",
    revenue: 5800,
  },
  {
    id: "CUS-003",
    name: "John Smith",
    email: "john@example.com",
    plan: "Basic",
    status: "Inactive",
    revenue: 1200,
  },
];
