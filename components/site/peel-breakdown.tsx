import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { InfoCircledIcon } from "@radix-ui/react-icons";

interface PeelBreakdownProps {
  sections: {
    name: string;
    text: string;
    point?: string;
    explanation?: string;
    example?: string;
    link?: string;
  }[];
  className?: string;
}

const PEEL_COLORS = {
  point: "bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400",
  explanation: "bg-purple-500/10 border-purple-500/30 text-purple-600 dark:text-purple-400",
  example: "bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400",
  link: "bg-green-500/10 border-green-500/30 text-green-600 dark:text-green-400",
};

export function PeelBreakdown({ sections, className }: PeelBreakdownProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>P-E-E-L Structure Breakdown</CardTitle>
        <p className="text-sm text-muted-foreground">
          Point - Explanation - Example - Link
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="space-y-4">
            <h4 className="font-semibold text-lg">{section.name}</h4>
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <p className="text-sm leading-relaxed">{section.text}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {section.point && (
                <div className={`rounded-lg border p-3 ${PEEL_COLORS.point}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">P</Badge>
                    <span className="text-xs font-semibold uppercase">Point</span>
                  </div>
                  <p className="text-xs">{section.point}</p>
                </div>
              )}
              {section.explanation && (
                <div className={`rounded-lg border p-3 ${PEEL_COLORS.explanation}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">E</Badge>
                    <span className="text-xs font-semibold uppercase">Explanation</span>
                  </div>
                  <p className="text-xs">{section.explanation}</p>
                </div>
              )}
              {section.example && (
                <div className={`rounded-lg border p-3 ${PEEL_COLORS.example}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">E</Badge>
                    <span className="text-xs font-semibold uppercase">Example</span>
                  </div>
                  <p className="text-xs">{section.example}</p>
                </div>
              )}
              {section.link && (
                <div className={`rounded-lg border p-3 ${PEEL_COLORS.link}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">L</Badge>
                    <span className="text-xs font-semibold uppercase">Link</span>
                  </div>
                  <p className="text-xs">{section.link}</p>
                </div>
              )}
            </div>

            {index < sections.length - 1 && <Separator className="pt-6" />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
