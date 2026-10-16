import { notFound } from "next/navigation";
import { customersData } from "@/data/customers";
import CustomerDetailContent from "./CustomerDetailContent";
import DataState from "@/components/common/DataState";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function CustomerDetailPage({ params }: PageProps) {
  const { id } = await params;

  const customer = customersData.find((item) => item.id === id);

  if (!customer) {
    notFound();
  }

  return customer ? (
    <CustomerDetailContent customer={customer} />
  ) : (
    <DataState
      type="empty"
      title="No customer found"
      message="There are no customer records available yet."
    />
  );
}
