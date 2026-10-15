import { Suspense } from "react";
import SubscriptionDetailPage from "./subscriptionsDetails";

type Props = {
  params: Promise<{ id: string }>;
};

export default function Page({ params }: Props) {
  return (
    <Suspense fallback={<p>Loading subscription details...</p>}>
      <SubscriptionDetailPage params={params} />
    </Suspense>
  );
}
