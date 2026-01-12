import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  badgeVariant?: "default" | "band-7" | "band-8" | "band-9";
  className?: string;
}

export function PageHeader({
  title,
  description,
  badge,
  badgeVariant = "default",
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("space-y-4 pb-8 pt-6 md:pt-8", className)}>
      {(badge || description) && (
        <div className="flex flex-wrap items-center gap-3">
          {badge && (
            <Badge
              variant="outline"
              className={cn(
                "font-semibold",
                badgeVariant === "band-7" && "badge-band-7",
                badgeVariant === "band-8" && "badge-band-8",
                badgeVariant === "band-9" && "badge-band-9"
              )}
            >
              {badge}
            </Badge>
          )}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h1>
      <Separator />
    </div>
  );
}
