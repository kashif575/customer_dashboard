import { customersData } from "@/data/customers";
import type { Customer } from "@/types/customer";
import Link from "next/link";
import CustomerTable from "../../components/customers/CustomerTable";
import DataState from "@/components/common/DataState";

const customers: Customer[] = customersData.map((customer) => ({
  ...customer,
  plan: customer.plan as Customer["plan"],
  status: customer.status as Customer["status"],
}));

export default function CustomersPage() {
  return (
    <main className="page-content">
      <Link href="/" className="back-link">
        ←
      </Link>
      <h1>Customers</h1>
      <p>View and manage your customer records.</p>

      {customers.length === 0 ? (
        <DataState
          type="empty"
          title="No customers yet"
          message="There are no customer records available yet."
        />
      ) : (
        <CustomerTable customers={customers} />
      )}
    </main>
  );
}
