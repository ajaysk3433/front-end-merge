import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor?: string;
  iconBg?: string;
  className?: string;
}

export function StatsCard({
  title,
  value,
  icon: Icon,
  iconColor = "text-primary",
  iconBg = "bg-primary/10",
  className,
}: StatsCardProps) {
  return (
    <div className={cn("stats-card", className)}>
      <div
        className={cn(
          "w-10 h-10 rounded-lg flex items-center justify-center",
          iconBg
        )}
      >
        <Icon className={cn("w-5 h-5", iconColor)} />
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{title}</p>
        <p className="text-lg font-bold text-foreground">{value}</p>
      </div>
    </div>
  );
}
