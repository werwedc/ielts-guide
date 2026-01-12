import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ContentSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  variant?: "default" | "highlighted" | "warning";
  className?: string;
}

export function ContentSection({
  title,
  description,
  children,
  variant = "default",
  className,
}: ContentSectionProps) {
  const variantStyles = {
    default: "",
    highlighted: "border-primary/50 bg-primary/5",
    warning: "border-destructive/50 bg-destructive/5",
  };

  return (
    <Card className={cn(variantStyles[variant], className)}>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="prose max-w-none">{children}</CardContent>
    </Card>
  );
}
