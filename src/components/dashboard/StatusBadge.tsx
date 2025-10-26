import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
  variant?: 'success' | 'warning' | 'error' | 'info';
  className?: string;
}

export const StatusBadge = ({ status, variant = 'info', className }: StatusBadgeProps) => {
  const variants = {
    success: "bg-primary/20 text-primary border-primary/30",
    warning: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    error: "bg-red-500/20 text-red-400 border-red-500/30",
    info: "bg-blue-500/20 text-blue-400 border-blue-500/30"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        variants[variant],
        className
      )}
    >
      {status}
    </span>
  );
};
