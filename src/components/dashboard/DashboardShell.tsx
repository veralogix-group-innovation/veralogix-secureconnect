import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DashboardShellProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  headerActions?: ReactNode;
  className?: string;
}

export const DashboardShell = ({
  title,
  subtitle,
  children,
  headerActions,
  className
}: DashboardShellProps) => {
  return (
    <div className={cn("min-h-screen bg-[var(--base)] pt-24 pb-16", className)}>
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--g1)] via-[var(--g2)] to-[var(--g3)] mb-2">
                {title}
              </h1>
              {subtitle && (
                <p className="text-white/70 text-lg">{subtitle}</p>
              )}
            </div>
            {headerActions && (
              <div className="flex items-center gap-2">
                {headerActions}
              </div>
            )}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
