"use client";

import { useState } from "react";
import { DataTable, type DataTableFilterMeta } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown";
import { Tag } from "primereact/tag";
import type { TagProps } from "primereact/tag";
import { FilterMatchMode } from "primereact/api";
import { useRouter } from "next/navigation";

import { Button } from "../ui/Button";
import type { Customer } from "@/types/customer";

type CustomerTableProps = {
  customers: Customer[];
};

type CustomerStatus = "Active" | "Inactive";

const statuses: CustomerStatus[] = ["Active", "Inactive"];

const getSeverity = (status: string): TagProps["severity"] => {
  switch (status.toLowerCase()) {
    case "qualified":
      return "success";
    case "new":
      return "info";
    case "negotiation":
      return "warning";
    case "renewal":
      return "success";
    case "unqualified":
      return "danger";
    default:
      return "secondary";
  }
};

export default function CustomerTable({ customers }: CustomerTableProps) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState<DataTableFilterMeta>({
    status: {
      value: null,
      matchMode: FilterMatchMode.EQUALS,
    },
  });

  const filteredCustomers = customers.filter((customer) =>
    `${customer.name} ${customer.email} ${customer.id}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const statusBodyTemplate = (customer: Customer) => (
    <Tag value={customer.status} severity={getSeverity(customer.status)} />
  );

  const statusRowFilterTemplate = (options: {
    value: unknown;
    filterApplyCallback: (value: unknown) => void;
  }) => (
    <Dropdown
      value={options.value}
      options={statuses}
      onChange={(e: DropdownChangeEvent) =>
        options.filterApplyCallback(e.value)
      }
      placeholder="All statuses"
      className="p-column-filter"
      showClear
      style={{ minWidth: "9rem" }}
    />
  );

  return (
    <section>
      <InputText
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search customers..."
        className="mb-3 customSearchInput"
      />

      <DataTable
        value={filteredCustomers}
        filters={filters}
        onFilter={(e) => setFilters(e.filters)}
        filterDisplay="row"
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

        <Column
          field="status"
          header="Status"
          sortable
          filter
          showFilterMenu={false}
          filterElement={statusRowFilterTemplate}
          body={statusBodyTemplate}
          style={{ minWidth: "12rem" }}
        />

        <Column
          field="revenue"
          header="Revenue"
          sortable
          body={(customer: Customer) => `$${customer.revenue.toLocaleString()}`}
        />

        <Column
          header="Action"
          body={(customer: Customer) => (
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
