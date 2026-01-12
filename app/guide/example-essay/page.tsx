import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/site/page-header";
import { PeelBreakdown } from "@/components/site/peel-breakdown";
import { BandBadge } from "@/components/site/band-badge";
import { exampleEssay, peelExplanation } from "@/lib/content";

export default function ExampleEssayPage() {
  return (
    <div className="container max-w-4xl py-8">
      <PageHeader
        title="Band 9.0 Example Essay"
        description="Complete essay with P-E-E-L breakdown and analysis"
        badge="9.0"
        badgeVariant="band-9"
      />

      {/* Prompt */}
      <section className="mb-8">
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg">Essay Prompt</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg italic">{exampleEssay.prompt}</p>
          </CardContent>
        </Card>
      </section>

      {/* Full Essay */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Complete Essay</h2>
        <Card>
          <CardContent className="p-6 md:p-8">
            <div className="prose max-w-none">
              {exampleEssay.essay.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-center gap-4 mt-4">
          <BandBadge band={9} />
          <span className="text-sm text-muted-foreground">
            Word Count: {exampleEssay.essay.split(/\s+/).length} words
          </span>
        </div>
      </section>

      {/* P-E-E-L Breakdown */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">P-E-E-L Structure Breakdown</h2>
        <p className="text-muted-foreground mb-6">
          Each paragraph follows the Point-Explanation-Example-Link structure
          for clear, logical argumentation.
        </p>
        <PeelBreakdown
          sections={[
            {
              name: "Introduction",
              text: exampleEssay.breakdown.introduction.text,
              point: exampleEssay.breakdown.introduction.point,
              explanation: exampleEssay.breakdown.introduction.explanation,
            },
            {
              name: "Body Paragraph 1",
              text: exampleEssay.breakdown.bodyParagraph1.text,
              point: exampleEssay.breakdown.bodyParagraph1.point,
              explanation: exampleEssay.breakdown.bodyParagraph1.explanation,
              example: exampleEssay.breakdown.bodyParagraph1.example,
              link: exampleEssay.breakdown.bodyParagraph1.link,
            },
            {
              name: "Body Paragraph 2",
              text: exampleEssay.breakdown.bodyParagraph2.text,
              point: exampleEssay.breakdown.bodyParagraph2.point,
              explanation: exampleEssay.breakdown.bodyParagraph2.explanation,
              example: exampleEssay.breakdown.bodyParagraph2.example,
              link: exampleEssay.breakdown.bodyParagraph2.link,
            },
            {
              name: "Conclusion",
              text: exampleEssay.breakdown.conclusion.text,
              point: exampleEssay.breakdown.conclusion.point,
              explanation: exampleEssay.breakdown.conclusion.explanation,
            },
          ]}
        />
      </section>

      {/* P-E-E-L Explanation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Understanding P-E-E-L</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {Object.values(peelExplanation).map((item) => (
            <Card key={item.name}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">{item.letter}</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">{item.name}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  {item.description}
                </p>
                <ul className="space-y-1">
                  {item.tips.map((tip, index) => (
                    <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Scoring Analysis */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Scoring Analysis</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {Object.entries(exampleEssay.scoringAnalysis).map(([criterion, analysis]) => (
            <Card key={criterion}>
              <CardHeader className="pb-3">
                <CardTitle className="text-base capitalize flex items-center gap-2">
                  {criterion}
                  <BandBadge band={9} />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{analysis}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Key Expressions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Key Expressions Used</h2>
        <Card>
          <CardContent className="p-6">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {exampleEssay.expressions.map((item, index) => (
                <div key={index} className="border-b border-border/50 pb-3 last:border-0">
                  <p className="text-sm font-medium italic mb-1">
                    "{item.expression}"
                  </p>
                  <p className="text-xs text-muted-foreground">{item.translation}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Native Features */}
      <section>
        <h2 className="text-2xl font-bold mb-6">What Makes This "Native-Like"</h2>
        <Card>
          <CardContent className="p-6">
            <ul className="space-y-3">
              {exampleEssay.nativeFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-0.5">✓</span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
