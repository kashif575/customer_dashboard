import { notFound } from "next/navigation";
import SubscriptionDetailPage from "./subscriptionsDetails";
import { subscriptionsData } from "@/data/subscriptionsData";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;

  const subscription = subscriptionsData.find((item) => item.id === id);

  if (!subscription) {
    notFound();
  }

  return <SubscriptionDetailPage subscription={subscription} />;
}
