import { type ButtonHTMLAttributes, type ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
  className?: string;
}

const base =
  "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent2)]",
  ghost:
    "text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-2)]",
  outline:
    "border border-[var(--color-border)] text-[var(--color-text)] bg-white hover:border-[var(--accent-border)] hover:text-[var(--color-accent)]",
};

const shadows: Record<Size, string> = {
  sm: "",
  md: "shadow-[0_8px_20px_-10px_rgba(22,163,74,0.5)]",
  lg: "shadow-[0_8px_24px_-12px_rgba(22,163,74,0.6)]",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-5 py-2.5 text-[13px]",
  lg: "px-7 py-3.5 text-[14px]",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const shadowClass = variant === "primary" ? shadows[size] : "";
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${shadowClass} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
