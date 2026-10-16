"use client";

import Link from "next/link";
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import DataState from "@/components/common/DataState";
import { subscriptionsData } from "@/data/subscriptionsData";
import type { Subscription } from "@/types/subscription";

export default function SubscriptionsPage() {
  const [search, setSearch] = useState("");

  const filteredSubscriptions = subscriptionsData.filter(
    (subscription) =>
      subscription.id.toLowerCase().includes(search.toLowerCase()) ||
      subscription.customerId.toLowerCase().includes(search.toLowerCase()) ||
      subscription.plan.toLowerCase().includes(search.toLowerCase()) ||
      subscription.status.toLowerCase().includes(search.toLowerCase()),
  );

  const statusBodyTemplate = (rowData: Subscription) => {
    const statusClass = rowData.status.toLowerCase().replace(/\s+/g, "-");

    return (
      <span className={`status-badge status-${statusClass}`}>
        {rowData.status}
      </span>
    );
  };

  const priceBodyTemplate = (rowData: Subscription) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: rowData.currency,
    }).format(rowData.price);
  };

  const dateBodyTemplate = (rowData: Subscription) => {
    return new Date(`${rowData.startDate}T00:00:00`).toLocaleDateString(
      "en-US",
      {
        month: "short",
        day: "numeric",
        year: "numeric",
      },
    );
  };

  const actionBodyTemplate = (rowData: Subscription) => (
    <Link
      href={`/subscriptions/${rowData.id}`}
      className="button button-secondary"
    >
      Details
    </Link>
  );

  return (
    <main className="page-content">
      <Link href="/" className="back-link">
        ←
      </Link>

      <div className="page-header">
        <div>
          <h1>Subscriptions</h1>
          <p>Manage subscription plans and billing details.</p>
        </div>
      </div>
      {subscriptionsData.length === 0 ? (
        <DataState
          type="empty"
          title="No customers yet"
          message="There are no customer records available yet."
        />
      ) : (
        <>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Subscriptions</h3>
              <p>{subscriptionsData.length}</p>
            </div>

            <div className="stat-card">
              <h3>Active</h3>
              <p>
                {
                  subscriptionsData.filter(
                    (subscription) => subscription.status === "Active",
                  ).length
                }
              </p>
            </div>

            <div className="stat-card">
              <h3>Cancelled</h3>
              <p>
                {
                  subscriptionsData.filter(
                    (subscription) => subscription.status === "Cancelled",
                  ).length
                }
              </p>
            </div>
          </div>

          <div className="table-card">
            <div className="table-toolbar">
              <h2>All Subscriptions</h2>

              <InputText
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search subscriptions..."
              />
            </div>

            <DataTable
              value={filteredSubscriptions}
              dataKey="id"
              paginator
              rows={10}
              rowsPerPageOptions={[5, 10, 25]}
              emptyMessage="No subscriptions found."
              stripedRows
              responsiveLayout="scroll"
            >
              <Column field="id" header="Subscription ID" sortable />
              <Column field="customerId" header="Customer ID" sortable />
              <Column field="plan" header="Plan" sortable />
              <Column
                field="status"
                header="Status"
                body={statusBodyTemplate}
                sortable
              />
              <Column field="billingCycle" header="Billing Cycle" sortable />
              <Column
                field="price"
                header="Price"
                body={priceBodyTemplate}
                sortable
              />
              <Column
                field="startDate"
                header="Start Date"
                body={dateBodyTemplate}
                sortable
              />
              <Column header="Action" body={actionBodyTemplate} />
            </DataTable>
          </div>
        </>
      )}
    </main>
  );
}
