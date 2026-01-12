import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/site/page-header";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { vocabularyTopics } from "@/lib/content/vocabulary-topic-based";
import { ChevronRightIcon } from "@radix-ui/react-icons";

const topicIcons: Record<string, string> = {
  technology: "🔌",
  environment: "🌍",
  education: "📚",
  health: "💊",
  society: "⚖️",
  business: "💼",
};

export default function TopicBasedVocabularyPage() {
  return (
    <div className="container max-w-6xl py-8">
      <PageHeader
        title="Topic-Based Vocabulary"
        description="Advanced vocabulary organized by IELTS essay topics"
      />

      <section className="mb-8">
        <p className="text-lg text-muted-foreground">
          Use this vocabulary bank to write sophisticated essays on common IELTS topics.
          Each topic includes advanced nouns, verbs, and adjectives to elevate your writing.
        </p>
      </section>

      <Tabs defaultValue="technology" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 h-auto">
          {vocabularyTopics.map((topic) => (
            <TabsTrigger key={topic.id} value={topic.id} className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm">
              <span className="mr-1">{topicIcons[topic.id]}</span>
              <span className="hidden md:inline">{topic.id.charAt(0).toUpperCase() + topic.id.slice(1)}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {vocabularyTopics.map((topic) => (
          <TabsContent key={topic.id} value={topic.id} className="space-y-6 mt-6">
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{topicIcons[topic.id]}</span>
                  <div className="flex-1">
                    <CardTitle className="text-2xl capitalize mb-2">{topic.id}</CardTitle>
                    <Badge variant="outline" className="mb-3">
                      Theme
                    </Badge>
                    <p className="text-muted-foreground text-lg italic">
                      {topic.theme}
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {topic.categories.map((category, categoryIndex) => (
                <Card key={categoryIndex}>
                  <CardHeader>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    {category.basicTerm && (
                      <p className="text-sm text-muted-foreground mt-2">
                        <span className="font-semibold">Avoid:</span> {category.basicTerm}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.advancedNouns && category.advancedNouns.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-primary">Advanced Nouns</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.advancedNouns.map((noun, nounIndex) => (
                            <Badge key={nounIndex} variant="secondary" className="text-xs">
                              {noun}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {category.advancedVerbs && category.advancedVerbs.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-primary">Advanced Verbs</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.advancedVerbs.map((verb, verbIndex) => (
                            <Badge key={verbIndex} variant="secondary" className="text-xs">
                              {verb}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {category.advancedAdjectives && category.advancedAdjectives.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-primary">Advanced Adjectives</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.advancedAdjectives.map((adjective, adjIndex) => (
                            <Badge key={adjIndex} variant="secondary" className="text-xs">
                              {adjective}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
