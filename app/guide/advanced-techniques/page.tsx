import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/site/page-header";
import { ContentSection } from "@/components/site/content-section";
import { Badge } from "@/components/ui/badge";
import { advancedTechniques, collocationCategories, topicVocabulary } from "@/lib/content";

export default function AdvancedTechniquesPage() {
  return (
    <div className="container max-w-4xl py-8">
      <PageHeader
        title="Advanced Techniques"
        description="Sophisticated methods that separate Band 9 from Band 8"
        badge="Band 9"
        badgeVariant="band-9"
      />

      <div className="mb-8">
        <p className="text-muted-foreground">
          These advanced techniques demonstrate the sophisticated control of
          language that characterizes Band 9 essays. Master these to elevate
          your writing from "very good" to "expert."
        </p>
      </div>

      {/* Techniques */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Core Techniques</h2>
        <div className="space-y-6">
          {advancedTechniques.map((technique) => (
            <Card key={technique.id}>
              <CardHeader>
                <CardTitle className="text-xl">{technique.name}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {technique.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <p className="text-sm font-medium text-primary mb-1">
                    Why It Matters
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {technique.whyItMatters}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Examples</p>
                  <div className="space-y-3">
                    {technique.examples.map((example, index) => (
                      <div key={index} className="space-y-2">
                        <div className="rounded-md bg-destructive/5 border border-destructive/20 p-3">
                          <p className="text-xs font-medium text-destructive mb-1">
                            Poor
                          </p>
                          <p className="text-sm italic text-muted-foreground">
                            {example.poor}
                          </p>
                        </div>
                        <div className="rounded-md bg-primary/5 border border-primary/20 p-3">
                          <p className="text-xs font-medium text-primary mb-1">
                            Excellent
                          </p>
                          <p className="text-sm">{example.excellent}</p>
                          <p className="text-xs text-muted-foreground mt-2">
                            {example.explanation}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Common Mistakes</p>
                  <ul className="space-y-1">
                    {technique.commonMistakes.map((mistake, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-destructive mt-0.5">✗</span>
                        <span>{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Collocations */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Collocation Mastery</h2>
        <p className="text-muted-foreground mb-6">
          Collocations are words that naturally belong together. Mastering
          these is a key marker of native-like proficiency.
        </p>
        <div className="space-y-4">
          {collocationCategories.map((category) => (
            <Card key={category.category}>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">{category.category}</CardTitle>
                <p className="text-xs text-muted-foreground">
                  {category.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.collocations.map((collocation, index) => (
                    <Badge key={index} variant="secondary" className="font-normal">
                      {collocation}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Topic Vocabulary */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Topic-Specific Vocabulary</h2>
        <p className="text-muted-foreground mb-6">
          Band 9 essays demonstrate a wide range of vocabulary specific to the
          topic. Here are essential terms for common IELTS topics.
        </p>
        <div className="space-y-6">
          {topicVocabulary.map((topic) => (
            <Card key={topic.topic}>
              <CardHeader>
                <CardTitle className="text-lg">{topic.topic}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs font-medium mb-2">Verbs</p>
                  <div className="flex flex-wrap gap-2">
                    {topic.verbs.map((verb, index) => (
                      <Badge key={index} variant="outline" className="font-normal">
                        {verb}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium mb-2">Nouns</p>
                  <div className="flex flex-wrap gap-2">
                    {topic.nouns.map((noun, index) => (
                      <Badge key={index} variant="outline" className="font-normal">
                        {noun}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium mb-2">Adjectives</p>
                  <div className="flex flex-wrap gap-2">
                    {topic.adjectives.map((adj, index) => (
                      <Badge key={index} variant="outline" className="font-normal">
                        {adj}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
