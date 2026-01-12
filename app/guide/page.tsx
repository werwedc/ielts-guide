import { PageHeader } from "@/components/site/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { assessmentCriteria, essayTypes, bandDescriptions } from "@/lib/content";
import { BandBadge } from "@/components/site/band-badge";

export default function GuidePage() {
  return (
    <div className="container max-w-4xl py-8">
      <PageHeader
        title="IELTS Writing Task 2 Guide"
        description="Comprehensive documentation for achieving Band 9.0"
      />

      <section className="mb-12">
        <p className="text-lg text-muted-foreground mb-6">
          This guide provides comprehensive documentation on achieving Band 9.0 in IELTS
          Academic Writing Task 2. Navigate through the sidebar to explore each topic in detail.
        </p>
        <div className="bg-muted/50 border border-border rounded-lg p-6">
          <h3 className="font-semibold mb-2">What is Band 9.0?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            {bandDescriptions[9].description}
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {bandDescriptions[9].characteristics.slice(0, 4).map((characteristic, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-primary text-xs">●</span>
                <p className="text-sm">{characteristic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Criteria */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Assessment Criteria</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {assessmentCriteria.map((criterion) => (
            <a key={criterion.id} href={`/guide/assessment-criteria#${criterion.id}`} className="group hover:border-primary/50 transition-colors">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {criterion.name}
                    </CardTitle>
                    <span className="text-xs font-mono text-muted-foreground border border-border rounded px-2 py-0.5">
                      {criterion.shortName}
                    </span>
                  </div>
                  <CardDescription className="text-xs">
                    {criterion.band9Description.slice(0, 80)}...
                  </CardDescription>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* Essay Types */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Essay Types</h2>
        <div className="grid gap-3">
          {essayTypes.map((type) => (
            <a key={type.id} href={`/guide/essay-types/${type.slug}`} className="group hover:border-primary/50 transition-colors">
              <Card>
                <CardHeader className="py-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-base group-hover:text-primary transition-colors">
                        {type.title}
                      </CardTitle>
                      <CardDescription className="text-xs mt-1">
                        {type.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Writing Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <a href="/guide/grammar" className="group hover:border-primary/50 transition-colors">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">Grammar</CardTitle>
                <CardDescription className="text-xs mt-2">
                  Advanced grammatical structures for Band 9
                </CardDescription>
              </CardHeader>
            </Card>
          </a>
          <a href="/guide/advanced-techniques" className="group hover:border-primary/50 transition-colors">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">Advanced Techniques</CardTitle>
                <CardDescription className="text-xs mt-2">
                  Cohesion, collocation, and more
                </CardDescription>
              </CardHeader>
            </Card>
          </a>
          <a href="/guide/vocabulary-topic-based" className="group hover:border-primary/50 transition-colors">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">Topic-Based Vocabulary</CardTitle>
                <CardDescription className="text-xs mt-2">
                  Advanced vocabulary by essay topic
                </CardDescription>
              </CardHeader>
            </Card>
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Reference</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <a href="/guide/band-comparison" className="group hover:border-primary/50 transition-colors">
            <Card>
              <CardHeader>
                <CardTitle className="text-base group-hover:text-primary transition-colors">Band Comparison</CardTitle>
                <CardDescription className="text-xs mt-2">
                  What separates Band 7, 8, and 9
                </CardDescription>
              </CardHeader>
            </Card>
          </a>
          <a href="/guide/strategies" className="group hover:border-primary/50 transition-colors">
            <Card>
              <CardHeader>
                <CardTitle className="text-base group-hover:text-primary transition-colors">Strategies</CardTitle>
                <CardDescription className="text-xs mt-2">
                  Proven methods for success
                </CardDescription>
              </CardHeader>
            </Card>
          </a>
          <a href="/guide/checklist" className="group hover:border-primary/50 transition-colors">
            <Card>
              <CardHeader>
                <CardTitle className="text-base group-hover:text-primary transition-colors">Checklist</CardTitle>
                <CardDescription className="text-xs mt-2">
                  Your final Band 9 checklist
                </CardDescription>
              </CardHeader>
            </Card>
          </a>
          <a href="/guide/ai-optimized-writing" className="group hover:border-primary/50 transition-colors">
            <Card>
              <CardHeader>
                <CardTitle className="text-base group-hover:text-primary transition-colors">Writing for AI Graders</CardTitle>
                <CardDescription className="text-xs mt-2">
                  Optimize for automated scoring
                </CardDescription>
              </CardHeader>
            </Card>
          </a>
          <a href="/guide/vocabulary-topic-based" className="group hover:border-primary/50 transition-colors">
            <Card>
              <CardHeader>
                <CardTitle className="text-base group-hover:text-primary transition-colors">Topic-Based Vocabulary</CardTitle>
                <CardDescription className="text-xs mt-2">
                  Advanced vocabulary by topic
                </CardDescription>
              </CardHeader>
            </Card>
          </a>
        </div>
      </section>
    </div>
  );
}
