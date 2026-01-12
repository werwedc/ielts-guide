import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-4 py-8 md:flex-row md:justify-between md:py-12">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold">9.0 IELTS</p>
          <p className="text-sm text-muted-foreground">
            The Ultimate Writing Task 2 Guide
          </p>
        </div>
        <nav className="flex flex-col gap-4 md:flex-row md:gap-6">
          <Link
            href="/guide"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Guide
          </Link>
          <Link
            href="/guide/assessment-criteria"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Assessment Criteria
          </Link>
          <Link
            href="/guide/essay-types"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Essay Types
          </Link>
          <Link
            href="/guide/checklist"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Band 9 Checklist
          </Link>
        </nav>
        <p className="text-sm text-muted-foreground">
          Comprehensive IELTS Writing Task 2 preparation guide.
        </p>
      </div>
    </footer>
  );
}
