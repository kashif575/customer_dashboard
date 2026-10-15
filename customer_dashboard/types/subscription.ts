export type SubscriptionPlan = "Enterprise" | "Pro" | "Basic";

export type SubscriptionStatus =
  | "Active"
  | "Trial"
  | "Cancelled"
  | "Past Due"
  | "Expired";

export type BillingCycle = "Monthly" | "Yearly";

export interface Subscription {
  id: string;
  customerId: string;
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  billingCycle: BillingCycle;
  price: number;
  currency: string;
  startDate: string;
  nextBillingDate: string | null;
  paymentMethod: string;
  autoRenew: boolean;
}
