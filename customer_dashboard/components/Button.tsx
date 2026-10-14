import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  "aria-label"?: string;
};

export function Button({
  variant = "primary",
  children,
  onClick,
  className = "",
  "aria-label": ariaLabel,
}: ButtonProps) {
  return (
    <button
      className={`button button--${variant} ${className}`.trim()}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}