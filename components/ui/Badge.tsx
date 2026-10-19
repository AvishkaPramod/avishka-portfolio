import { cn } from "@/lib/utils";

export default function Badge({
  children,
  variant = "azure",
  className,
}: {
  children: React.ReactNode;
  variant?: "azure" | "emerald" | "muted";
  className?: string;
}) {
  const styles = {
    azure: "bg-azure-500/10 text-azure-400 border-azure-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    muted: "bg-[var(--bg-primary)] text-[var(--text-muted)] border-[var(--border)]",
  };

  return (
    <span
      className={cn(
        "inline-block text-xs px-2.5 py-1 rounded-full border font-medium",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}