import Link from "next/link";
import { notFound } from "next/navigation";

import { subscriptionsData } from "@/data/subscriptionsData";
import type { Subscription } from "@/types/subscription";

type SubscriptionDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function SubscriptionDetailPage({
  params,
}: SubscriptionDetailPageProps) {
  const { id } = await params;

  const subscription: Subscription | undefined = subscriptionsData.find(
    (item) => item.id === id,
  );

  if (!subscription) {
    notFound();
  }

  const formatDate = (date: string | null) => {
    if (!date) return "Not scheduled";

    return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const statusClass = subscription.status.toLowerCase().replace(/\s+/g, "-");

  return (
    <main className="page-content">
      <Link href="/subscriptions" className="back-link">
        ← Back to Subscriptions
      </Link>

      <div className="page-header">
        <div>
          <h1>Subscription Details</h1>
          <p>Subscription ID: {subscription.id}</p>
        </div>

        <span className={`status-badge status-${statusClass}`}>
          {subscription.status}
        </span>
      </div>

      <section className="detail-card">
        <h2>Plan Information</h2>

        <div className="detail-grid">
          <DetailItem label="Subscription ID" value={subscription.id} />
          <DetailItem label="Customer ID" value={subscription.customerId} />
          <DetailItem label="Plan" value={subscription.plan} />
          <DetailItem label="Billing Cycle" value={subscription.billingCycle} />
          <DetailItem
            label="Price"
            value={`${subscription.currency} ${subscription.price.toLocaleString("en-US")}`}
          />
          <DetailItem label="Subscription Status" value={subscription.status} />
        </div>
      </section>

      <section className="detail-card">
        <h2>Billing Information</h2>

        <div className="detail-grid">
          <DetailItem
            label="Start Date"
            value={formatDate(subscription.startDate)}
          />
          <DetailItem
            label="Next Billing Date"
            value={formatDate(subscription.nextBillingDate)}
          />
          <DetailItem
            label="Payment Method"
            value={subscription.paymentMethod}
          />
          <DetailItem
            label="Auto Renew"
            value={subscription.autoRenew ? "Enabled" : "Disabled"}
          />
        </div>
      </section>
    </main>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="detail-item">
      <span className="detail-label">{label}</span>
      <span className="detail-value">{value}</span>
    </div>
  );
}
