"use client";

import Link from "next/link";
import {
  LoaderCircle,
  Inbox,
  AlertCircle,
  FileQuestion,
  RefreshCw,
} from "lucide-react";

type DataStateType = "loading" | "empty" | "error" | "not-found";

type DataStateProps = {
  type: DataStateType;
  title?: string;
  message?: string;
  onRetry?: () => void;
  actionLabel?: string;
  actionHref?: string;
};

const defaultContent = {
  loading: {
    title: "Loading...",
    message: "Please wait while we load your data.",
  },
  empty: {
    title: "No data found",
    message: "There is nothing to display yet.",
  },
  error: {
    title: "Something went wrong",
    message: "We couldn't load your data. Please try again.",
  },
  "not-found": {
    title: "Not found",
    message: "The requested resource could not be found.",
  },
};

export default function DataState({
  type,
  title,
  message,
  onRetry,
  actionLabel,
  actionHref,
}: DataStateProps) {
  const content = defaultContent[type];

  const icons = {
    loading: LoaderCircle,
    empty: Inbox,
    error: AlertCircle,
    "not-found": FileQuestion,
  };

  const Icon = icons[type];

  return (
    <div
      className={`data-state data-state--${type}`}
      role={type === "error" ? "alert" : "status"}
      aria-live="polite"
    >
      <div className="data-state__icon">
        <Icon
          size={36}
          strokeWidth={1.7}
          className={type === "loading" ? "data-state__spinner" : ""}
        />
      </div>

      <h2 className="data-state__title">{title ?? content.title}</h2>

      <p className="data-state__message">{message ?? content.message}</p>

      {onRetry && (
        <button type="button" className="data-state__button" onClick={onRetry}>
          <RefreshCw size={16} />
          Try Again
        </button>
      )}

      {actionHref && actionLabel && (
        <Link href={actionHref} className="data-state__button">
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
