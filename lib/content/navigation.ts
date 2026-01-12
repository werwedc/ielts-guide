import type { NavigationItem } from "@/types/content";

export const navigation: NavigationItem[] = [
  {
    title: "Guide",
    href: "/guide",
    description: "Start your journey to Band 9",
  },
  {
    title: "Assessment Criteria",
    href: "/guide/assessment-criteria",
    description: "The 4 criteria examiners use",
    children: [
      { title: "Task Response", href: "/guide/assessment-criteria#task-response" },
      { title: "Coherence & Cohesion", href: "/guide/assessment-criteria#cohesion" },
      { title: "Lexical Resource", href: "/guide/assessment-criteria#lexical" },
      { title: "Grammar", href: "/guide/assessment-criteria#grammar" },
    ],
  },
  {
    title: "Essay Types",
    href: "/guide/essay-types",
    description: "Master all 6 essay types",
    children: [
      { title: "Opinion Essay", href: "/guide/essay-types/opinion" },
      { title: "Discussion Essay", href: "/guide/essay-types/discussion" },
      { title: "Problem-Solution", href: "/guide/essay-types/problem-solution" },
      {
        title: "Advantages-Disadvantages",
        href: "/guide/essay-types/advantages-disadvantages",
      },
      { title: "Double Question", href: "/guide/essay-types/double-question" },
      {
        title: "Positive-Negative",
        href: "/guide/essay-types/positive-negative",
      },
    ],
  },
  {
    title: "Advanced Techniques",
    href: "/guide/advanced-techniques",
    description: "Cohesion, collocation, and more",
  },
  {
    title: "Grammar",
    href: "/guide/grammar",
    description: "Advanced structures for Band 9",
  },
  {
    title: "Band Comparison",
    href: "/guide/band-comparison",
    description: "What separates Band 7, 8, and 9",
  },
  {
    title: "Strategies",
    href: "/guide/strategies",
    description: "Proven methods for success",
  },
  {
    title: "Example Essay",
    href: "/guide/example-essay",
    description: "Band 9 essay with P-E-E-L breakdown",
  },
  {
    title: "Checklist",
    href: "/guide/checklist",
    description: "Your final Band 9 checklist",
  },
  {
    title: "Writing for AI Graders",
    href: "/guide/ai-optimized-writing",
    description: "Optimize for automated essay scoring",
  },
  {
    title: "Topic-Based Vocabulary",
    href: "/guide/vocabulary-topic-based",
    description: "Advanced vocabulary by essay topic",
  },
];
