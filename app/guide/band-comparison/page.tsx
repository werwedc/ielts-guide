import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/site/page-header";
import { ComparisonTable } from "@/components/site/comparison-table";
import { BandBadge } from "@/components/site/band-badge";
import { bandComparisons, bandDifferenceSummary, bandDescriptions } from "@/lib/content";

export default function BandComparisonPage() {
  const criteria = ["Task Response", "Coherence & Cohesion", "Lexical Resource", "Grammar"] as const;

  return (
    <div className="container max-w-4xl py-8">
      <PageHeader
        title="Band Comparison"
        description="What separates Band 7, 8, and 9"
        badge="7 vs 8 vs 9"
      />

      <div className="mb-8">
        <p className="text-muted-foreground">
          Understanding the differences between Band 7, 8, and 9 is crucial for
          targeting your desired score. The leap from Band 8 to Band 9 requires
          fundamental shifts in approach, not just incremental improvements.
        </p>
      </div>

      {/* Band Descriptions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Band Descriptions</h2>
        <div className="space-y-4">
          {[
            { band: 7 as const, variant: "band-7" as const },
            { band: 8 as const, variant: "band-8" as const },
            { band: 9 as const, variant: "band-9" as const },
          ].map((item) => (
            <Card key={item.band}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BandBadge band={item.band} />
                  <CardTitle className="text-lg">{bandDescriptions[item.band].name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {bandDescriptions[item.band].description}
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-medium">Key Characteristics:</p>
                  <ul className="space-y-1">
                    {bandDescriptions[item.band].characteristics.slice(0, 4).map((char, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Comparison by Criterion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Comparison by Assessment Criterion</h2>
        <div className="space-y-8">
          {criteria.map((criterion) => {
            const comparisons = bandComparisons.filter((c) => c.criterion === criterion);
            return (
              <ComparisonTable
                key={criterion}
                criterion={criterion}
                rows={comparisons.map((c) => ({
                  aspect: c.feature,
                  band7: c.band7,
                  band8: c.band8,
                  band9: c.band9,
                }))}
              />
            );
          })}
        </div>
      </section>

      {/* What Changes Between Bands */}
      <section>
        <h2 className="text-2xl font-bold mb-6">What Changes Between Bands?</h2>
        <div className="space-y-6">
          {Object.entries(bandDifferenceSummary).map(([criterion, value]) => (
            <Card key={criterion}>
              <CardHeader>
                <CardTitle className="text-lg capitalize">{criterion}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-blue-500/5 border border-blue-500/20 p-4">
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                    From Band 7 to Band 8
                  </p>
                  <p className="text-sm text-muted-foreground">{(value as any).from7to8}</p>
                </div>
                <div className="rounded-lg bg-purple-500/5 border border-purple-500/20 p-4">
                  <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-1">
                    From Band 8 to Band 9
                  </p>
                  <p className="text-sm text-muted-foreground">{(value as any).from8to9}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
