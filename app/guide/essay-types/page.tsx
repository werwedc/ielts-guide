import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/site/page-header";
import { essayTypes } from "@/lib/content";

export default function EssayTypesPage() {
  return (
    <div className="container max-w-4xl py-8">
      <PageHeader
        title="IELTS Essay Types"
        description="Master the 6 different essay types in Writing Task 2"
        badge="6 Types"
      />

      <div className="mb-8">
        <p className="text-muted-foreground">
          IELTS Writing Task 2 includes several different essay types, each
          requiring a specific approach. Understanding these types and their
          structures is crucial for achieving a high score.
        </p>
      </div>

      <div className="space-y-4">
        {essayTypes.map((type) => (
          <Link key={type.id} href={`/guide/essay-types/${type.slug}`}>
            <Card className="group hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="group-hover:text-primary transition-colors text-xl">
                      {type.title}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {type.description}
                    </CardDescription>
                    <div className="mt-4">
                      <p className="text-xs font-medium text-muted-foreground mb-2">
                        Common question patterns:
                      </p>
                      <ul className="space-y-1">
                        {type.questionPatterns.slice(0, 2).map((pattern, index) => (
                          <li
                            key={index}
                            className="text-xs text-muted-foreground italic"
                          >
                            "{pattern}"
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <ArrowRightIcon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-2" />
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
