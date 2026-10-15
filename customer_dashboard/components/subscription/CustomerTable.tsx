"use client";

import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "../ui/Button";
import { useRouter } from "next/navigation";
import type { Customer } from "@/types/customer";

type CustomerTableProps = {
  customers: Customer[];
};

export default function CustomerTable({ customers }: CustomerTableProps) {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const filteredCustomers = customers.filter((customer) =>
    `${customer.name} ${customer.email} ${customer.id}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <section>
      <InputText
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search customers..."
        className={`mb-3 customSearchInput`}
      />

      <DataTable
        value={filteredCustomers}
        dataKey="id"
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25]}
        stripedRows
        emptyMessage="No customers found."
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column field="id" header="Customer ID" sortable />
        <Column field="name" header="Name" sortable />
        <Column field="email" header="Email" />
        <Column field="plan" header="Plan" sortable />
        <Column field="status" header="Status" sortable />
        <Column
          field="revenue"
          header="Revenue"
          sortable
          body={(row: Customer) => `$${row.revenue.toLocaleString()}`}
        />
        <Column
          field="Action"
          header="Action"
          // body={}
          body={(customer) => (
            <Button
              variant="secondary"
              onClick={() => router.push(`/customers/${customer.id}`)}
            >
              Detail
            </Button>
          )}
        />
      </DataTable>
    </section>
  );
}
