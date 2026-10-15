"use client";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { customersData } from "@/data/customers";

export default function CustomerDetailContent() {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const customer = customersData.find((item) => item.id === id);

  if (!customer) {
    notFound();
  }

  return (
    <div className="customer-detail-page">
      <Link href="/customers" className="customer-detail-back-link">
        ← Back
      </Link>

      <div className="customer-detail-header">
        <div className="customer-detail-avatar">{customer.name.charAt(0)}</div>

        <div className="customer-detail-profile">
          <h1 className="customer-detail-name">{customer.name}</h1>
          <p className="customer-detail-email">{customer.email}</p>

          <span
            className={`customer-detail-status ${
              customer.status === "Active"
                ? "customer-detail-active"
                : "customer-detail-inactive"
            }`}
          >
            {customer.status}
          </span>
        </div>
      </div>

      <h2 className="customer-detail-section-title">Customer Information</h2>

      <div className="customer-detail-grid">
        <div className="customer-detail-card">
          <span className="customer-detail-label">Customer ID</span>
          <strong className="customer-detail-value">{customer.id}</strong>
        </div>

        <div className="customer-detail-card">
          <span className="customer-detail-label">Email Address</span>
          <strong className="customer-detail-value">{customer.email}</strong>
        </div>

        <div className="customer-detail-card">
          <span className="customer-detail-label">Subscription Plan</span>
          <strong className="customer-detail-value">{customer.plan}</strong>
        </div>

        <div className="customer-detail-card">
          <span className="customer-detail-label">Total Revenue</span>
          <strong className="customer-detail-value">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            }).format(customer.revenue)}
          </strong>
        </div>
      </div>
    </div>
  );
}
