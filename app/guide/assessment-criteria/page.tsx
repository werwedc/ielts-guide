import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/site/page-header";
import { ContentSection } from "@/components/site/content-section";
import { BandBadge } from "@/components/site/band-badge";
import { Prose } from "@/components/site/prose";
import { assessmentCriteria } from "@/lib/content";

export default function AssessmentCriteriaPage() {
  return (
    <div className="container max-w-4xl py-8">
      <PageHeader
        title="Assessment Criteria"
        description="The 4 criteria examiners use to score your essay"
        badge="Band 9"
        badgeVariant="band-9"
      />

      <div className="mb-8">
        <p className="text-muted-foreground">
          Your IELTS Writing Task 2 essay is scored across four criteria, each
          worth 25% of your total score. Understanding these criteria is
          essential to achieving Band 9.0.
        </p>
      </div>

      {assessmentCriteria.map((criterion) => (
        <div key={criterion.id} id={criterion.id} className="scroll-mt-24">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-2xl">{criterion.name}</CardTitle>
                  <CardDescription className="mt-1">
                    {criterion.band9Description}
                  </CardDescription>
                </div>
                <span className="text-sm font-mono text-muted-foreground border border-border rounded px-3 py-1.5 flex-shrink-0">
                  {criterion.shortName}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Key Requirements */}
              <div>
                <h3 className="font-semibold mb-3">Key Requirements for Band 9</h3>
                <ul className="space-y-2">
                  {criterion.keyRequirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Band Comparison */}
              <div>
                <h3 className="font-semibold mb-3">Band Comparison</h3>
                <div className="rounded-lg border border-border/50 overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left p-3 font-medium">Feature</th>
                        <th className="text-left p-3 font-medium">
                          <span className="flex items-center gap-2">
                            Band 7 <BandBadge band={7} />
                          </span>
                        </th>
                        <th className="text-left p-3 font-medium">
                          <span className="flex items-center gap-2">
                            Band 8 <BandBadge band={8} />
                          </span>
                        </th>
                        <th className="text-left p-3 font-medium">
                          <span className="flex items-center gap-2">
                            Band 9 <BandBadge band={9} />
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {criterion.bandComparison.map((row, index) => (
                        <tr key={index} className="border-t border-border/50">
                          <td className="p-3 font-medium">{row.aspect}</td>
                          <td className="p-3 text-muted-foreground text-xs">
                            {row.band7}
                          </td>
                          <td className="p-3 text-muted-foreground text-xs">
                            {row.band8}
                          </td>
                          <td className="p-3 text-xs">{row.band9}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Techniques */}
              <div>
                <h3 className="font-semibold mb-3">Key Techniques</h3>
                <div className="space-y-4">
                  {criterion.techniques.map((technique, index) => (
                    <ContentSection
                      key={index}
                      title={technique.name}
                      description={technique.description}
                      className="border-border/50"
                    >
                      <ul className="space-y-2">
                        {technique.examples.map((example, exIndex) => (
                          <li
                            key={exIndex}
                            className="text-sm text-muted-foreground"
                          >
                            {example}
                          </li>
                        ))}
                      </ul>
                    </ContentSection>
                  ))}
                </div>
              </div>

              {/* Common Pitfalls */}
              <div>
                <h3 className="font-semibold mb-3 text-destructive">
                  Common Pitfalls to Avoid
                </h3>
                <ul className="space-y-2">
                  {criterion.commonPitfalls.map((pitfall, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-destructive mt-0.5">✗</span>
                      <span className="text-muted-foreground">{pitfall}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
