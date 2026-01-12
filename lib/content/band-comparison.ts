import type { BandComparison } from "@/types/content";

export const bandComparisons: BandComparison[] = [
  // Task Response Comparisons
  {
    criterion: "Task Response",
    feature: "Position Development",
    band7: "Position is clear but may lack full consistency throughout",
    band8: "Position is clear and consistently maintained",
    band9: "Position is fully developed, clear throughout, and extends to implications",
  },
  {
    criterion: "Task Response",
    feature: "Idea Extension",
    band7: "Main ideas are extended but some may lack sufficient support",
    band8: "Ideas are well extended and supported with relevant examples",
    band9: "Ideas are fully extended with comprehensive support and logical implications explored",
  },
  {
    criterion: "Task Response",
    feature: "Task Addressing",
    band7: "Addresses all parts but may miss some nuances or micro-keywords",
    band8: "Addresses all parts of the task sufficiently well",
    band9: "Fully addresses ALL parts including micro-keywords and their implications",
  },
  {
    criterion: "Task Response",
    feature: "Argumentation Style",
    band7: "Presents main ideas but may lack dialectical reasoning",
    band8: "Acknowledges different perspectives but may not fully integrate them",
    band9: "Multi-perspectival; weighs individual, societal, and economic impacts; uses concession + refutation",
  },
  // Coherence & Cohesion Comparisons
  {
    criterion: "Coherence & Cohesion",
    feature: "Cohesive Devices",
    band7: "Uses variety of cohesive devices but may be somewhat mechanical",
    band8: "Uses cohesive devices skillfully with some flexibility",
    band9: "Uses cohesive devices so skillfully they attract no attention; invisible cohesion",
  },
  {
    criterion: "Coherence & Cohesion",
    feature: "Referencing",
    band7: "Basic pronoun use (it, they, this)",
    band8: "Good pronoun use with some substitution",
    band9: "Advanced 'This + summary noun' patterns; sophisticated referencing chains",
  },
  {
    criterion: "Coherence & Cohesion",
    feature: "Paragraphing",
    band7: "Paragraphs are generally logical and organized",
    band8: "Paragraphs are well-organized with clear topics",
    band9: "Paragraphing is skillfully managed; each paragraph has conceptual unity and clear topic sentences",
  },
  {
    criterion: "Coherence & Cohesion",
    feature: "Flow Between Sentences",
    band7: "Sentences are generally connected but may rely on mechanical linkers",
    band8: "Good flow with a mix of linkers and referencing",
    band9: "Thematic progression; Rheme of sentence A becomes Theme of sentence B",
  },
  // Lexical Resource Comparisons
  {
    criterion: "Lexical Resource",
    feature: "Precision",
    band7: "Generally appropriate vocabulary but some imprecision",
    band8: "Skillfully uses appropriate vocabulary with good precision",
    band9: "Precise vocabulary choice for specific contexts; sophisticated control",
  },
  {
    criterion: "Lexical Resource",
    feature: "Collocation",
    band7: "Some awareness of collocation with occasional errors",
    band8: "Good use of collocation; generally natural word combinations",
    band9: "Sophisticated collocation use; word combinations sound natural and native-like",
  },
  {
    criterion: "Lexical Resource",
    feature: "Register",
    band7: "Generally formal but may have occasional lapses",
    band8: "Consistently formal register maintained",
    band9: "Consistently formal academic register with no exceptions; no conversational fillers",
  },
  {
    criterion: "Lexical Resource",
    feature: "Vocabulary Range",
    band7: "Sufficient range to allow flexibility and precision",
    band8: "Wide range of vocabulary used flexibly",
    band9: "Wide range used very naturally and sophisticatedly; includes topic-specific vocabulary",
  },
  // Grammatical Range & Accuracy Comparisons
  {
    criterion: "Grammar",
    feature: "Structural Range",
    band7: "Uses variety of complex structures",
    band8: "Uses wide range of structures flexibly",
    band9: "Uses wide range with full flexibility and purpose; structures serve rhetorical goals",
  },
  {
    criterion: "Grammar",
    feature: "Accuracy",
    band7: "Frequent error-free sentences with some grammatical errors",
    band8: "Mostly error-free with occasional unsystematic inaccuracies",
    band9: "Near-perfect; only rare 'slips' that a native speaker might make",
  },
  {
    criterion: "Grammar",
    feature: "Advanced Structures",
    band7: "Some use of subordinate clauses and conditionals",
    band8: "Good range including complex sentences and some inversion",
    band9: "Full range including inversion, cleft sentences, reduced relatives, emphatic structures",
  },
  {
    criterion: "Grammar",
    feature: "Syntactic Variety",
    band7: "Some variation in sentence length and structure",
    band8: "Good variation with some complex sentences",
    band9: "Purposeful variation creating natural rhythm; short impactful sentences mixed with complex multi-clause structures",
  },
];

export const bandDifferenceSummary = {
  taskResponse: {
    from7to8: "From 7 to 8: Ideas become more consistently extended and supported. Position becomes more consistent throughout.",
    from8to9: "From 8 to 9: Ideas are FULLY extended to logical conclusions. Position is maintained with dialectical reasoning. ALL micro-keywords addressed.",
  },
  cohesion: {
    from7to8: "From 7 to 8: Mechanical linkers reduced; more referencing used. Paragraph topics clearer.",
    from8to9: "From 8 to 9: Cohesion becomes 'invisible' - no attention drawn to it. Advanced thematic progression. Conceptual paragraph unity.",
  },
  lexical: {
    from7to8: "From 7 to 8: Fewer imprecise word choices. Better collocation awareness. Consistent formality.",
    from8to9: "From 8 to 9: Precision becomes sophisticated. Collocations are natural and native-like. No register lapses. Topic-specific vocabulary used effectively.",
  },
  grammar: {
    from7to8: "From 7 to 8: Fewer errors. More structural variety including some advanced forms.",
    from8to9: "From 8 to 9: Structures used with purpose, not just variety. Only rare 'slips' allowed. Full range including emphatic structures.",
  },
};

export const bandDescriptions = {
  7: {
    name: "Band 7 - Good User",
    description: "Has operational command of the language, though with occasional inaccuracies, inappropriateness and misunderstandings in some situations. Generally handles complex language well and understands detailed reasoning.",
    characteristics: [
      "Addresses all parts of the task",
      "Presents a clear position throughout the response",
      "Uses a variety of complex structures",
      "Produces frequent error-free sentences",
      "Has good control of grammar and vocabulary",
      "May have some mechanical cohesion",
    ],
  },
  8: {
    name: "Band 8 - Very Good User",
    description: "Has fully operational command of the language with only occasional unsystematic inaccuracies and inappropriacies. Handles complex detailed argumentation well.",
    characteristics: [
      "Sufficiently addresses all parts of the task",
      "Presents a well-developed response to the question with relevant, extended and supported ideas",
      "Uses a wide range of structures flexibly",
      "Produces majority error-free sentences",
      "Uses cohesive devices well",
      "Skillfully uses uncommon lexical items",
    ],
  },
  9: {
    name: "Band 9 - Expert User",
    description: "Has fully operational command of the language: appropriate, accurate and fluent with complete understanding. Only rare 'slips' that even native speakers might make.",
    characteristics: [
      "Fully addresses ALL parts of the task including micro-keywords",
      "Presents a fully developed position with extended, well-supported ideas",
      "Uses cohesion skillfully - it attracts no attention",
      "Uses a wide range of vocabulary very naturally and sophisticatedly",
      "Uses a wide range of structures with full flexibility and accuracy",
      "Maintains consistent formal academic register",
    ],
  },
};
