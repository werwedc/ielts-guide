import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface BandBadgeProps {
  band: 7 | 8 | 9;
  className?: string;
}

export function BandBadge({ band, className }: BandBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "font-semibold",
        band === 7 && "badge-band-7",
        band === 8 && "badge-band-8",
        band === 9 && "badge-band-9",
        className
      )}
    >
      Band {band}
    </Badge>
  );
}
