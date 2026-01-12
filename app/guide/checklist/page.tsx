import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/site/page-header";
import { BandBadge } from "@/components/site/band-badge";
import { assessmentCriteria } from "@/lib/content";

export default function ChecklistPage() {
  return (
    <div className="container max-w-4xl py-8">
      <PageHeader
        title="Band 9.0 Final Checklist"
        description="Verify your essay meets all Band 9 requirements"
        badge="Checklist"
        badgeVariant="band-9"
      />

      <div className="mb-8">
        <p className="text-muted-foreground">
          Use this checklist before submitting your essay to ensure you meet all
          Band 9 requirements. Print this page or save it for quick reference
          during practice.
        </p>
      </div>

      {/* Task Response Checklist */}
      <section className="mb-8">
        <Card>
          <CardHeader className="border-b border-border/50">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Task Response</CardTitle>
              <BandBadge band={9} />
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                <span className="text-sm">
                  I have identified and addressed ALL micro-keywords in the prompt
                  (adjectives, adverbs, plurals)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                <span className="text-sm">
                  My position is clearly stated in the introduction and
                  consistently maintained throughout
                </span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                <span className="text-sm">
                  Each main idea is fully extended using the "Why" chain
                </span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                <span className="text-sm">
                  All arguments are supported with specific, relevant examples
                </span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                <span className="text-sm">
                  I have used dialectical reasoning (acknowledged counter-arguments
                  where appropriate)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                <span className="text-sm">
                  My word count is between 270-290 words (above 250 minimum)
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Coherence & Cohesion Checklist */}
      <section className="mb-8">
        <Card>
          <CardHeader className="border-b border-border/50">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Coherence and Cohesion</CardTitle>
              <BandBadge band={9} />
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                <span className="text-sm">
                  I have avoided overusing mechanical linkers (Firstly, Moreover,
                  etc.)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                <span className="text-sm">
                  I use "This + summary noun" patterns for referencing
                </span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                <span className="text-sm">
                  Each paragraph has ONE clear central idea with a conceptual
                  topic sentence
                </span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                <span className="text-sm">
                  My paragraphs are linked by ideas, not just sequencers
                </span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                <span className="text-sm">
                  I use lexical chaining (synonyms) instead of repeating words
                </span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                <span className="text-sm">
                  My essay has 4 clearly structured paragraphs
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Lexical Resource Checklist */}
      <section className="mb-8">
        <Card>
          <CardHeader className="border-b border-border/50">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Lexical Resource</CardTitle>
              <BandBadge band={9} />
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                <span className="text-sm">
                  I use precise vocabulary appropriate to the specific context
                </span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                <span className="text-sm">
                  I use natural collocations (words that belong together)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                <span className="text-sm">
                  I have used nominalization to increase academic density
                </span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                <span className="text-sm">
                  My register is consistently formal (no slang, contractions, or
                  conversational fillers)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                <span className="text-sm">
                  I include topic-specific vocabulary relevant to the question
                </span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                <span className="text-sm">
                  No "big words" used incorrectly — I prioritize precision over
                  complexity
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Grammar Checklist */}
      <section className="mb-8">
        <Card>
          <CardHeader className="border-b border-border/50">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Grammatical Range and Accuracy</CardTitle>
              <BandBadge band={9} />
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                <span className="text-sm">
                  I have used a variety of complex sentence structures
                </span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                <span className="text-sm">
                  I use passive voice appropriately to shift focus
                </span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                <span className="text-sm">
                  I have included conditional sentences for hypothetical scenarios
                </span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                <span className="text-sm">
                  I use hedging (may, might, could) for nuanced expression
                </span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                <span className="text-sm">
                  My punctuation is correct throughout (semicolons, colons, dashes
                  used appropriately)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
                <span className="text-sm">
                  There are no systematic errors — only rare "slips" allowed
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Final Reminders */}
      <section>
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg">Final Reminders</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">●</span>
                <span>
                  Plan for 5 minutes — this is NOT wasted time, it ensures you
                  answer the task fully
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">●</span>
                <span>
                  Leave 5 minutes at the end to review for errors and check word
                  count
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">●</span>
                <span>
                  The sweet spot is 270-290 words — enough depth without risking
                  errors or irrelevance
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">●</span>
                <span>
                  Use examples strategically — they should support arguments,
                  introduce vocabulary, and create mental anchors
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">●</span>
                <span>
                  Write naturally — memorized templates are obvious to examiners
                  and limit your score
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
