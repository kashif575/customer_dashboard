"use client";

import { useRouter } from "next/navigation";
import { Button } from "./Button";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      variant="secondary"
      onClick={() => router.back()}
      aria-label="Go back"
    >
      <ArrowLeft size={22} color="#635bff" />
    </Button>
  );
}
