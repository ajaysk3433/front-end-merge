import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  iconBg?: string;
  className?: string;
}

export function ToolCard({
  title,
  description,
  icon: Icon,
  href,
  iconBg = "bg-primary/10",
  className,
}: ToolCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        "tool-card group flex flex-col gap-4 h-full",
        className
      )}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110",
          iconBg
        )}
      >
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
}

interface QuickToolProps {
  title: string;
  icon: LucideIcon;
  href: string;
  variant?: "default" | "outline";
}

export function QuickTool({ title, icon: Icon, href, variant = "outline" }: QuickToolProps) {
  return (
    <Link
      to={href}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all",
        variant === "outline"
          ? "border border-border bg-card hover:bg-accent hover:border-primary/30"
          : "gradient-button text-primary-foreground shadow-edtech"
      )}
    >
      <Icon className="w-4 h-4" />
      <span>{title}</span>
    </Link>
  );
}
