import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/site/page-header";
import { ContentSection } from "@/components/site/content-section";
import { Badge } from "@/components/ui/badge";
import { grammarStructures, punctuationRules, hedgingExpressions } from "@/lib/content";

export default function GrammarPage() {
  return (
    <div className="container max-w-4xl py-8">
      <PageHeader
        title="Advanced Grammar"
        description="Grammatical structures that demonstrate Band 9 proficiency"
        badge="Band 9"
        badgeVariant="band-9"
      />

      <div className="mb-8">
        <p className="text-muted-foreground">
          Band 9 requires a wide range of structures used with full flexibility
          and accuracy. The key is using structures purposefully to achieve
          specific rhetorical effects, not just showing variety.
        </p>
      </div>

      {/* Grammar Structures */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Essential Structures</h2>
        <div className="space-y-6">
          {grammarStructures.map((structure) => (
            <Card key={structure.name}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl">{structure.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {structure.description}
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <Badge variant="secondary" className="text-xs">
                    {structure.function}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {structure.examples.map((example, index) => (
                    <div key={index} className="space-y-2">
                      <div className="rounded-md bg-muted/50 border border-border p-3">
                        <p className="text-xs font-medium text-muted-foreground mb-1">
                          Standard
                        </p>
                        <p className="text-sm">{example.standard}</p>
                      </div>
                      <div className="rounded-md bg-primary/5 border border-primary/20 p-3">
                        <p className="text-xs font-medium text-primary mb-1">
                          Advanced ({example.technique})
                        </p>
                        <p className="text-sm">{example.advanced}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Punctuation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Punctuation for Emphasis</h2>
        <p className="text-muted-foreground mb-6">
          Advanced punctuation marks help control rhythm and emphasis in your
          writing.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(punctuationRules).map(([key, value]) => (
            <Card key={key}>
              <CardHeader className="pb-3">
                <CardTitle className="text-base capitalize">{key}</CardTitle>
                <p className="text-xs text-muted-foreground">
                  {value.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {value.examples.map((example, index) => (
                    <li
                      key={index}
                      className="text-sm italic text-muted-foreground"
                    >
                      "{example}"
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Hedging */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Hedging and Modality</h2>
        <p className="text-muted-foreground mb-6">
          Academic writing requires precise expression of certainty. Absolute
          statements often sound unsophisticated.
        </p>
        <div className="space-y-4">
          {Object.entries(hedgingExpressions).map(([key, value]) => (
            <Card key={key}>
              <CardHeader className="pb-3">
                <CardTitle className="text-base capitalize">{key}</CardTitle>
                <p className="text-xs text-muted-foreground">
                  {value.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {value.examples.map((example, index) => (
                    <Badge key={index} variant="outline" className="font-normal text-xs">
                      {example}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
