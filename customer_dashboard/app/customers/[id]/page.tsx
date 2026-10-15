import { Suspense } from "react";
import CustomerDetailContent from "./CustomerDetailContent";

export default function CustomerDetailPage() {
  return (
    <Suspense fallback={<p>Loading customer details...</p>}>
      <CustomerDetailContent />
    </Suspense>
  );
}
