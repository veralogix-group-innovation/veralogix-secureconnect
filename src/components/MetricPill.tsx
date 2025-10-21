import { cn } from "@/lib/utils";

interface MetricPillProps {
  label: string;
  value: string | number;
  variant?: "default" | "success" | "warning" | "info";
  className?: string;
}

export const MetricPill = ({ 
  label, 
  value, 
  variant = "default",
  className = "" 
}: MetricPillProps) => {
  const variants = {
    default: "border-primary/50 text-primary",
    success: "border-primary text-primary",
    warning: "border-accent text-accent",
    info: "border-secondary text-secondary",
  };

  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-card/50 backdrop-blur-sm",
      variants[variant],
      className
    )}>
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-lg font-bold">{value}</span>
    </div>
  );
};
