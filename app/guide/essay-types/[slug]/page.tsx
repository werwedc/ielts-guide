import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/site/page-header";
import { ContentSection } from "@/components/site/content-section";
import { EssayStructure } from "@/components/site/essay-structure";
import { Separator } from "@/components/ui/separator";
import { getEssayTypeBySlug, essayTypes } from "@/lib/content";

export function generateStaticParams() {
  return essayTypes.map((type) => ({ slug: type.slug }));
}

export default async function EssayTypePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essayType = getEssayTypeBySlug(slug);

  if (!essayType) {
    notFound();
  }

  const currentIndex = essayTypes.findIndex((t) => t.id === essayType.id);
  const prevType = currentIndex > 0 ? essayTypes[currentIndex - 1] : null;
  const nextType = currentIndex < essayTypes.length - 1 ? essayTypes[currentIndex + 1] : null;

  return (
    <div className="container max-w-4xl py-8">
      <PageHeader
        title={essayType.title}
        description={essayType.description}
        badge="Essay Type"
      />

      {/* Question Examples */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Question Examples</h2>
        <div className="space-y-3">
          {essayType.questionExamples.map((example, index) => (
            <Card key={index} className="border-primary/20 bg-primary/5">
              <CardContent className="p-4">
                <p className="text-sm italic">{example}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Structure */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Essay Structure</h2>
        <EssayStructure
          title={`${essayType.title} Structure`}
          sections={[
            {
              name: essayType.structure.introduction.title,
              description: essayType.structure.introduction.elements.join(". "),
              wordCount: essayType.structure.introduction.wordCount,
              points: essayType.structure.introduction.elements,
            },
            {
              name: essayType.structure.bodyParagraph1.title,
              description: essayType.structure.bodyParagraph1.elements.join(". "),
              wordCount: essayType.structure.bodyParagraph1.wordCount,
              points: essayType.structure.bodyParagraph1.elements,
            },
            {
              name: essayType.structure.bodyParagraph2.title,
              description: essayType.structure.bodyParagraph2.elements.join(". "),
              wordCount: essayType.structure.bodyParagraph2.wordCount,
              points: essayType.structure.bodyParagraph2.elements,
            },
            {
              name: essayType.structure.conclusion.title,
              description: essayType.structure.conclusion.elements.join(". "),
              wordCount: essayType.structure.conclusion.wordCount,
              points: essayType.structure.conclusion.elements,
            },
          ]}
        />
        <p className="text-sm text-muted-foreground mt-4 text-center">
          {essayType.structure.wordCountGuidelines}
        </p>
      </section>

      {/* Tips */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Tips for Band 9</h2>
        <ContentSection title="Key Tips" className="mb-4">
          <ul className="space-y-2">
            {essayType.tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <span className="text-primary mt-0.5">✓</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </ContentSection>
      </section>

      {/* Advanced Tips */}
      {essayType.advancedTips.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Advanced Techniques</h2>
          <ContentSection title="Advanced Tips" variant="highlighted">
            <ul className="space-y-2">
              {essayType.advancedTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-0.5">★</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </ContentSection>
        </section>
      )}

      {/* Vocabulary */}
      {essayType.vocabulary.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Useful Vocabulary</h2>
          <div className="space-y-4">
            {essayType.vocabulary.map((vocabGroup, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{vocabGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {vocabGroup.words.map((word, wordIndex) => (
                      <div key={wordIndex} className="text-sm">
                        <span className="font-medium">{word.term}</span>
                        {word.context && (
                          <span className="text-muted-foreground text-xs ml-2">
                            — {word.context}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Common Mistakes */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Common Mistakes to Avoid</h2>
        <ContentSection title="Pitfalls" variant="warning">
          <ul className="space-y-2">
            {essayType.commonMistakes.map((mistake, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <span className="text-destructive mt-0.5">✗</span>
                <span className="text-muted-foreground">{mistake}</span>
              </li>
            ))}
          </ul>
        </ContentSection>
      </section>

      {/* Navigation */}
      <Separator className="my-8" />
      <div className="flex justify-between">
        {prevType ? (
          <Link
            href={`/guide/essay-types/${prevType.slug}`}
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
            Previous: {prevType.title}
          </Link>
        ) : (
          <div />
        )}
        {nextType ? (
          <Link
            href={`/guide/essay-types/${nextType.slug}`}
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
          >
            Next: {nextType.title}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        ) : (
          <Link
            href="/guide/strategies"
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
          >
            Next: Strategies
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
