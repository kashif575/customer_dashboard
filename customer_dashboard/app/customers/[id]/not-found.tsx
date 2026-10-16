import DataState from "@/components/common/DataState";

export default function NotFound() {
  return (
    <DataState
      type="not-found"
      title="Customer Not Found"
      message="The customer you're looking for doesn't exist."
      actionLabel="Back to Customers"
      actionHref="/customers"
    />
  );
}
