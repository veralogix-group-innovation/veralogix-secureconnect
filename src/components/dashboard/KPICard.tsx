import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string | number;
  unit?: string;
  trend?: number;
  trendPeriod?: string;
  status?: 'good' | 'warning' | 'critical';
  onClick?: () => void;
  className?: string;
}

export const KPICard = ({
  title,
  value,
  unit,
  trend,
  trendPeriod = "vs last period",
  status = 'good',
  onClick,
  className
}: KPICardProps) => {
  const statusColors = {
    good: "border-primary/30",
    warning: "border-yellow-500/30",
    critical: "border-red-500/30"
  };

  const trendColor = trend && trend > 0 ? "text-primary" : "text-red-400";
  const TrendIcon = trend && trend > 0 ? TrendingUp : TrendingDown;

  return (
    <div
      className={cn(
        "rounded-2xl border bg-[var(--black)] p-6 transition-all duration-300",
        "shadow-[0_0_0_1px_rgba(0,255,255,.08)_inset,0_10px_30px_rgba(0,0,0,.35)]",
        "hover:shadow-[0_0_24px_rgba(168,207,69,.45),0_0_6px_rgba(0,255,255,.35)_inset]",
        statusColors[status],
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className="text-white/80 text-sm mb-2">{title}</div>
      <div className="flex items-baseline gap-2 mb-2">
        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--g1)] via-[var(--g2)] to-[var(--g3)]">
          {value}
        </div>
        {unit && <span className="text-white/60 text-sm">{unit}</span>}
      </div>
      {trend !== undefined && (
        <div className={cn("flex items-center gap-1 text-sm", trendColor)}>
          <TrendIcon className="h-4 w-4" />
          <span>{Math.abs(trend)}%</span>
          <span className="text-white/50 text-xs ml-1">{trendPeriod}</span>
        </div>
      )}
    </div>
  );
};
