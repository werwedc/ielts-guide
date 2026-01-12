import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/site/page-header";
import { ContentSection } from "@/components/site/content-section";
import { Badge } from "@/components/ui/badge";
import { strategies, timeManagement, commonPitfalls } from "@/lib/content";

export default function StrategiesPage() {
  return (
    <div className="container max-w-4xl py-8">
      <PageHeader
        title="Proven Strategies"
        description="Effective methods for IELTS Writing Task 2 success"
        badge="Strategies"
      />

      {/* Strategies */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Core Strategies</h2>
        <div className="space-y-8">
          {strategies.map((strategy) => (
            <Card key={strategy.id}>
              <CardHeader>
                <CardTitle className="text-xl">{strategy.name}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {strategy.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Steps */}
                <div>
                  <h3 className="font-semibold mb-3">How It Works</h3>
                  <div className="space-y-4">
                    {strategy.steps.map((step, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-xs font-semibold">
                            {index + 1}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{step.title}</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {step.description}
                          </p>
                          {step.questions && (
                            <ul className="mt-2 space-y-1">
                              {step.questions.map((question, qIndex) => (
                                <li
                                  key={qIndex}
                                  className="text-xs text-muted-foreground italic"
                                >
                                  "{question}"
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Examples */}
                {strategy.examples.length > 0 && (
                  <div>
                    <h3 className="font-semibold mb-3">Examples</h3>
                    <div className="space-y-4">
                      {strategy.examples.map((example, index) => (
                        <div key={index} className="space-y-2">
                          <div className="rounded-md bg-muted/50 border border-border p-3">
                            <p className="text-xs font-medium text-muted-foreground mb-1">
                              Original
                            </p>
                            <p className="text-sm italic text-muted-foreground">
                              "{example.original}"
                            </p>
                          </div>
                          <div className="rounded-md bg-primary/5 border border-primary/20 p-3">
                            <p className="text-xs font-medium text-primary mb-1">
                              Transformed
                            </p>
                            <p className="text-sm">"{example.transformed}"</p>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {example.explanation}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Time Management */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">The 40-Minute Protocol</h2>
        <Card>
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-3">
                  <span className="text-2xl font-bold text-primary">
                    {timeManagement.breakdown.planning.minutes}
                  </span>
                </div>
                <h3 className="font-semibold mb-2">Planning</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {timeManagement.breakdown.planning.activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-3">
                  <span className="text-2xl font-bold text-primary">
                    {timeManagement.breakdown.writing.minutes}
                  </span>
                </div>
                <h3 className="font-semibold mb-2">Writing</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {timeManagement.breakdown.writing.activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-3">
                  <span className="text-2xl font-bold text-primary">
                    {timeManagement.breakdown.review.minutes}
                  </span>
                </div>
                <h3 className="font-semibold mb-2">Review</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {timeManagement.breakdown.review.activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border/50 text-center">
              <p className="text-sm text-muted-foreground">
                Target Word Count: <span className="font-medium">{timeManagement.wordCountTarget}</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {timeManagement.wordCountWarning}
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Common Pitfalls */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Common Pitfalls to Avoid</h2>
        <div className="space-y-6">
          {commonPitfalls.map((category) => (
            <Card key={category.category}>
              <CardHeader>
                <CardTitle className="text-lg">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.pitfalls.map((pitfall, index) => (
                    <div key={index} className="border-l-2 border-destructive/50 pl-4">
                      <p className="text-sm font-medium text-destructive mb-1">
                        {pitfall.mistake}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Fix: </span>
                        {pitfall.fix}
                      </p>
                    </div>
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
