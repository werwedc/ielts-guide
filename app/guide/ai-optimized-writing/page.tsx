import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/site/page-header";
import { ContentSection } from "@/components/site/content-section";
import { Badge } from "@/components/ui/badge";
import { aiOptimizedWriting } from "@/lib/content/ai-optimized-writing";

export default function AiOptimizedWritingPage() {
  return (
    <div className="container max-w-4xl py-8">
      <PageHeader
        title="Writing for AI Graders"
        description="How to craft essays that satisfy both AI algorithms and human examiners"
      />

      <section className="mb-12">
        <p className="text-lg text-muted-foreground mb-6">
          {aiOptimizedWriting.introduction}
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">The 'Sentence Expander' Checklist</h2>
        <p className="text-muted-foreground mb-4">
          Use this checklist to audit your sentences. If you have too many short sentences (S-V-O), apply one of these fixes.
        </p>
        <div className="space-y-8">
          {aiOptimizedWriting.sentenceExpander.map((technique) => (
            <Card key={technique.name}>
              <CardHeader>
                <CardTitle className="text-xl">{technique.name}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {technique.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Checklist Item</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {technique.checkItem}
                  </p>
                  <div className="space-y-4">
                    {technique.swaps.map((swap, index) => (
                      <div key={index} className="space-y-2">
                        <div className="rounded-md bg-muted/50 border border-border p-3">
                          <p className="text-xs font-medium text-muted-foreground mb-1">
                            Instead of:
                          </p>
                          <p className="text-sm italic text-muted-foreground">
                            {swap.instead}
                          </p>
                        </div>
                        <div className="rounded-md bg-primary/5 border border-primary/20 p-3">
                          <p className="text-xs font-medium text-primary mb-1">
                            Use:
                          </p>
                          <p className="text-sm">{swap.use}</p>
                        </div>
                        <div className="rounded-md bg-muted/50 border border-border p-3">
                          <p className="text-sm italic text-muted-foreground">
                            Result: {swap.result}
                          </p>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <span className="text-primary">AI Benefit:</span>
                          <span className="text-muted-foreground">{swap.aiBenefit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">The 'Machine-Targeted' Guide</h2>
        <p className="text-muted-foreground mb-6">
          {aiOptimizedWriting.aiExplanation}
        </p>
        <div className="space-y-8">
          {aiOptimizedWriting.machineTargeted.map((item) => (
            <Card key={item.name}>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Human Reality</h4>
                    <p className="text-sm text-muted-foreground italic">
                      {item.humanReality}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-destructive">AI Bias</h4>
                    <p className="text-sm text-destructive italic">
                      {item.aiBias}
                    </p>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold mb-3">The Hack</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {item.hack.target}
                  </p>
                  <ul className="space-y-2">
                    {item.hack.details.map((detail, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Human vs. AI Optimization</h2>
        <div className="rounded-lg border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-3 font-semibold">Feature</th>
                <th className="text-left p-3 font-semibold">Human-Optimized</th>
                <th className="text-left p-3 font-semibold">AI-Optimized</th>
              </tr>
            </thead>
            <tbody>
              {aiOptimizedWriting.comparisonTable.map((row) => (
                <tr key={row.feature} className="border-t border-border">
                  <td className="p-3 font-medium">{row.feature}</td>
                  <td className="p-3 text-muted-foreground">{row.humanOptimized}</td>
                  <td className="p-3 text-muted-foreground">{row.aiOptimized}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Vocabulary Substitution Tables</h2>
        <ContentSection
          title="Structural Linking Words"
          description="These are crucial for 'Coherence and Cohesion' score. AI algorithms scan for these to determine if your argument flows logically."
        >
          <div className="rounded-lg border border-border overflow-hidden mt-4">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-3 font-semibold">Function</th>
                  <th className="text-left p-3 font-semibold">Basic (Avoid)</th>
                  <th className="text-left p-3 font-semibold">Advanced Substitution (Use)</th>
                  <th className="text-left p-3 font-semibold">Context / Sentence Starter</th>
                </tr>
              </thead>
              <tbody>
                {aiOptimizedWriting.structuralLinkingWords.map((item, index) => (
                  <tr key={index} className="border-t border-border">
                    <td className="p-3 text-muted-foreground">{item.function}</td>
                    <td className="p-3 text-muted-foreground">{item.basic}</td>
                    <td className="p-3 text-muted-foreground">{item.advancedSubstitution}</td>
                    <td className="p-3 text-muted-foreground italic">{item.context}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ContentSection>
      </section>

      <section className="mb-12">
        <ContentSection
          title="Common Nouns"
          description="These words appear in almost every IELTS essay. Do not repeat 'problem' 5 times. Use this hierarchy."
        >
          <div className="grid gap-4 md:grid-cols-2 mt-4">
            {aiOptimizedWriting.commonNouns.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-base">{item.basic}</CardTitle>
                  <p className="text-xs text-muted-foreground">
                    {item.academicSubstitution.map((sub) => sub).join(' / ')}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic mb-2">
                    {item.example}
                  </p>
                  {item.context && (
                    <p className="text-xs text-muted-foreground italic">
                      {item.advancedExample}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </ContentSection>
      </section>

      <section className="mb-12">
        <ContentSection
          title="Common Adjectives"
          description="AI graders penalize 'weak' adjectives. 'Good' is a weak adjective because it is vague. 'Beneficial' is strong because it implies a specific type of goodness."
        >
          <div className="grid gap-4 md:grid-cols-2 mt-4">
            {aiOptimizedWriting.commonAdjectives.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-base">{item.basic}</CardTitle>
                  <p className="text-xs text-muted-foreground">
                    {item.academicSubstitution.map((sub) => sub).join(' / ')}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic mb-2">
                    {item.example}
                  </p>
                  {item.context && (
                    <p className="text-xs text-muted-foreground italic">
                      {item.advancedExample}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </ContentSection>
      </section>

      <section>
        <ContentSection
          title="Common Verbs"
          description="Verbs drive sentence. Weak verbs (get, do, make) lower your score. Strong verbs describe how action happens."
        >
          <div className="grid gap-4 md:grid-cols-2 mt-4">
            {aiOptimizedWriting.commonVerbs.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-base">{item.basic}</CardTitle>
                  <p className="text-xs text-muted-foreground">
                    {item.academicSubstitution.map((sub) => sub).join(' / ')}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic mb-2">
                    {item.example}
                  </p>
                  {item.context && (
                    <p className="text-xs text-muted-foreground italic">
                      {item.advancedExample}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </ContentSection>
      </section>
    </div>
  );
}
