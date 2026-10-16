"use client";

import DataState from "@/components/common/DataState";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <DataState
      type="error"
      title="Something went wrong"
      message="We couldn't load the customer details."
      onRetry={reset}
    />
  );
}
