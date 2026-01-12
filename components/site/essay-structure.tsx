import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface EssayStructureProps {
  title: string;
  sections: {
    name: string;
    description: string;
    wordCount: string;
    points: string[];
  }[];
  className?: string;
}

export function EssayStructure({ title, sections, className }: EssayStructureProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="font-semibold text-lg">{section.name}</h4>
                <p className="text-sm text-muted-foreground">{section.description}</p>
              </div>
              <span className="text-sm font-medium text-primary whitespace-nowrap">
                {section.wordCount}
              </span>
            </div>
            <ul className="space-y-2 ml-4">
              {section.points.map((point, pointIndex) => (
                <li key={pointIndex} className="flex gap-2 text-sm">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            {index < sections.length - 1 && <Separator className="mt-4" />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
