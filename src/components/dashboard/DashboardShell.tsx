import { ReactNode, useState } from "react";
import { Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NotificationsCenter } from "./NotificationsCenter";

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
  const [showNotifications, setShowNotifications] = useState(false);

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
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setShowNotifications(true)}
                className="relative border-primary/30 hover:bg-primary/10 hover:border-primary/50"
              >
                <Bell className="h-5 w-5 text-primary" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center animate-pulse">
                  3
                </span>
              </Button>
              {headerActions}
            </div>
          </div>
        </div>
        {children}
      </div>

      {showNotifications && (
        <NotificationsCenter onClose={() => setShowNotifications(false)} />
      )}
    </div>
  );
};
