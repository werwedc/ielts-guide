import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BandBadge } from "./band-badge";

interface ComparisonTableProps {
  criterion: string;
  rows: {
    aspect: string;
    band7: string;
    band8: string;
    band9: string;
  }[];
  className?: string;
}

export function ComparisonTable({ criterion, rows, className }: ComparisonTableProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {criterion} Comparison
          <BandBadge band={9} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 px-4 text-left font-semibold">Feature</th>
                <th className="py-3 px-4 text-left font-semibold">
                  <span className="flex items-center gap-2">
                    Band 7 <Badge variant="outline" className="badge-band-7">Competent</Badge>
                  </span>
                </th>
                <th className="py-3 px-4 text-left font-semibold">
                  <span className="flex items-center gap-2">
                    Band 8 <Badge variant="outline" className="badge-band-8">Very Good</Badge>
                  </span>
                </th>
                <th className="py-3 px-4 text-left font-semibold">
                  <span className="flex items-center gap-2">
                    Band 9 <Badge variant="outline" className="badge-band-9">Expert</Badge>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="border-b border-border/50 last:border-0">
                  <td className="py-3 px-4 font-medium">{row.aspect}</td>
                  <td className="py-3 px-4 text-muted-foreground">{row.band7}</td>
                  <td className="py-3 px-4 text-muted-foreground">{row.band8}</td>
                  <td className="py-3 px-4 font-medium">{row.band9}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
