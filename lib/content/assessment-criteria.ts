import type { AssessmentCriteria } from "@/types/content";

export const assessmentCriteria: AssessmentCriteria[] = [
  {
    id: "task-response",
    name: "Task Response",
    shortName: "TR",
    band9Description: "Fully addresses all parts of the task with a fully developed position. Ideas are fully extended and well supported.",
    keyRequirements: [
      "Address ALL parts of the task, including micro-keywords",
      "Present a clear, consistent position throughout the essay",
      "Extend ideas to their logical conclusions (the 'Why' chain)",
      "Support arguments with specific, relevant examples",
      "Avoid generalization and stay focused on the specific prompt",
      "Use dialectical reasoning (concession + refutation)",
    ],
    bandComparison: [
      {
        aspect: "Position Clarity",
        band7: "Position is clear but may be less consistent",
        band8: "Position is clear throughout",
        band9: "Position is clear, consistent, and fully developed from start to finish",
      },
      {
        aspect: "Idea Development",
        band7: "Main ideas are extended but some may lack support",
        band8: "Ideas are well supported with relevant examples",
        band9: "Ideas are fully extended with comprehensive support and logical implications",
      },
      {
        aspect: "Task Addressing",
        band7: "Addresses all parts of the task but may miss nuances",
        band8: "Addresses all parts of the task sufficiently",
        band9: "Fully addresses ALL parts including micro-keywords and implications",
      },
    ],
    techniques: [
      {
        name: "The 'Why' Chain",
        description: "Keep asking 'why' to extend ideas to their logical conclusion",
        examples: [
          "Technology makes people lonely",
          "→ Why? Because it replaces physical interaction",
          "→ Why does this cause loneliness? Because digital interactions lack non-verbal cues essential for emotional bonding",
        ],
      },
      {
        name: "Micro-Keyword Analysis",
        description: "Identify specific adjectives and adverbs that restrict the topic scope",
        examples: [
          "Prompt: 'computers are becoming increasingly essential in PRIMARY education'",
          "Band 7: Discusses computers in education generally",
          "Band 9: Focuses specifically on primary education and the 'increasing' trajectory",
        ],
      },
      {
        name: "Qualified Agreement",
        description: "Instead of binary agree/disagree, define the extent of your agreement",
        examples: [
          "While I broadly concur that international tourism brings economic prosperity, I contend that this benefit is often offset by environmental degradation unless stringent regulatory frameworks are enforced.",
        ],
      },
    ],
    commonPitfalls: [
      "Addressing the general topic instead of the specific prompt",
      "Failing to develop ideas beyond surface-level statements",
      "Inconsistent or unclear position throughout the essay",
      "Using vague examples ('in my country') instead of specific evidence",
      "Missing micro-keywords that restrict the scope",
      "Writing under 250 words (incurs penalty)",
    ],
  },
  {
    id: "cohesion",
    name: "Coherence and Cohesion",
    shortName: "CC",
    band9Description: "Cohesion attracts no attention. The skillful use of referencing, substitution, and lexical chaining creates seamless flow.",
    keyRequirements: [
      "Use 'invisible' cohesion - referencing instead of mechanical linkers",
      "Maintain paragraph unity with clear central topic sentences",
      "Use thematic progression (Rheme of sentence A becomes Theme of sentence B)",
      "Employ lexical chaining with synonyms rather than repetition",
      "Avoid overuse of 'Firstly, Moreover, In conclusion'",
      "Link paragraphs with idea connections, not just sequencers",
    ],
    bandComparison: [
      {
        aspect: "Cohesive Devices",
        band7: "Uses a variety of linkers but may be mechanical",
        band8: "Uses cohesive devices well with some flexibility",
        band9: "Uses cohesive devices skillfully; they attract no attention",
      },
      {
        aspect: "Referencing",
        band7: "Basic pronoun use (it, they)",
        band8: "Good use of pronouns and some substitution",
        band9: "Advanced referencing with 'This + summary noun' patterns",
      },
      {
        aspect: "Paragraphing",
        band7: "Paragraphs are generally logical",
        band8: "Paragraphs are well-organized",
        band9: "Paragraphing is skillfully managed with conceptual unity",
      },
    ],
    techniques: [
      {
        name: "This + Summary Noun",
        description: "Refer back to ideas using demonstrative pronouns with summary nouns",
        examples: [
          "Poor: Pollution is a problem. Pollution affects health.",
          "Better: Pollution is a problem. It affects health.",
          "Band 9: Pollution is a problem. This environmental degradation poses severe health risks.",
        ],
      },
      {
        name: "Thematic Progression",
        description: "Create flow by making the Rheme (new info) of one sentence the Theme (topic) of the next",
        examples: [
          "The government has introduced a new tax. This fiscal measure aims to reduce consumption.",
          "First sentence: Rheme = 'new tax'",
          "Second sentence: Theme = 'This fiscal measure'",
        ],
      },
      {
        name: "Lexical Chaining",
        description: "Use synonyms and related concepts to bind text together semantically",
        examples: [
          "Problem → issue → challenge → dilemma",
          "Important → crucial → vital → essential",
          "Show → demonstrate → illustrate → exemplify",
        ],
      },
    ],
    commonPitfalls: [
      "Over-reliance on mechanical linkers (Firstly, Secondly, In conclusion)",
      "Starting every sentence with a linker",
      "Repeating the same words instead of using synonyms",
      "Lack of clear paragraph topics (paragraphs contain multiple ideas)",
      "No connection between paragraphs (abrupt transitions)",
    ],
  },
  {
    id: "lexical",
    name: "Lexical Resource",
    shortName: "LR",
    band9Description: "Wide range of vocabulary used very naturally and sophisticatedly. Precision over complexity. Strong collocation awareness.",
    keyRequirements: [
      "Use precise vocabulary appropriate to the specific context",
      "Employ natural collocations (words that belong together)",
      "Maintain consistent formal academic register",
      "Use nominalization to increase academic density",
      "Include topic-specific vocabulary fields",
      "Avoid slang, contractions, and conversational fillers",
    ],
    bandComparison: [
      {
        aspect: "Precision",
        band7: "Generally uses correct vocabulary but some imprecision",
        band8: "Uses a good range of vocabulary with some precision",
        band9: "Uses precise vocabulary with sophisticated control",
      },
      {
        aspect: "Collocation",
        band7: "Some awareness of collocation",
        band8: "Good use of common collocations",
        band9: "Sophisticated use of collocation; sounds natural",
      },
      {
        aspect: "Register",
        band7: "Generally formal but occasional lapses",
        band8: "Consistently formal register",
        band9: "Consistently formal academic register with no exceptions",
      },
    ],
    techniques: [
      {
        name: "Nominalization",
        description: "Turn verbs and adjectives into nouns for academic density",
        examples: [
          "Verbal: Because cities are growing quickly, we are seeing more pollution.",
          "Nominalized: Rapid urbanization has precipitated a marked increase in pollution levels.",
        ],
      },
      {
        name: "Collocation Precision",
        description: "Use words that naturally belong together in native speech",
        examples: [
          "Poor: do a crime, make a law, strong rain, big problem",
          "Band 9: commit an offense, enact legislation, heavy rain, pressing issue",
        ],
      },
      {
        name: "Register Maintenance",
        description: "Replace informal elements with formal academic equivalents",
        examples: [
          "Informal: put up with, kids, sort of, to be honest",
          "Formal: tolerate, adolescents, somewhat, arguably",
        ],
      },
    ],
    commonPitfalls: [
      "Using obscure words thinking they equal higher scores",
      "Using words incorrectly in context (e.g., 'ameliorate' when 'improve' is natural)",
      "Collocation errors (e.g., 'do a crime' instead of 'commit a crime')",
      "Informal phrasal verbs (put up with, figure out)",
      "Contractions (don't, can't, won't)",
      "Conversational fillers (actually, literally, sort of)",
    ],
  },
  {
    id: "grammar",
    name: "Grammatical Range and Accuracy",
    shortName: "GRA",
    band9Description: "Wide range of structures used with full flexibility and accuracy. Only rare 'slips' allowed. Syntactic variety with purpose.",
    keyRequirements: [
      "Use a variety of complex sentence structures purposefully",
      "Employ emphatic structures (cleft sentences, inversion) for emphasis",
      "Use hedging and modality for nuanced expression",
      "Demonstrate control of passive voice for shifting focus",
      "Include conditionals for hypothetical scenarios",
      "Maintain error-free writing (only occasional 'slips' allowed)",
    ],
    bandComparison: [
      {
        aspect: "Range",
        band7: "Uses variety of complex structures",
        band8: "Uses wide range of structures flexibly",
        band9: "Uses wide range with full flexibility and purpose",
      },
      {
        aspect: "Accuracy",
        band7: "Frequent error-free sentences with some grammatical errors",
        band8: "Mostly error-free with occasional unsystematic inaccuracies",
        band9: "Near-perfect; only rare 'slips' that natives might make",
      },
      {
        aspect: "Variety",
        band7: "Standard complex sentences",
        band8: "Good range including some advanced structures",
        band9: "Full range including inversion, clefts, reduced relatives",
      },
    ],
    techniques: [
      {
        name: "Inversion for Emphasis",
        description: "Place verb before subject after negative or restrictive adverbials",
        examples: [
          "Standard: This policy affects not only the economy but also social cohesion.",
          "Inverted: Not only does this policy affect the economy, but it also impacts social cohesion.",
        ],
      },
      {
        name: "Cleft Sentences",
        description: "Split sentences to stress particular elements",
        examples: [
          "Standard: The lack of funding hinders progress.",
          "It-Cleft: It is the lack of funding, rather than a lack of interest, that hinders progress.",
          "Wh-Cleft: What is required is a fundamental paradigm shift.",
        ],
      },
      {
        name: "Hedging for Nuance",
        description: "Use modals and adverbs to express precise degrees of certainty",
        examples: [
          "Absolute: Video games cause violence.",
          "Hedged: Excessive exposure to violent video games may be a contributing factor to aggressive behavior in some adolescents.",
        ],
      },
    ],
    commonPitfalls: [
      "Using complex structures incorrectly",
      "Overusing certain structures (e.g., starting every sentence with 'It is...')",
      "Systematic grammatical errors (not just slips)",
      "Lack of variety - all sentences follow SVO pattern",
      "Misusing conditionals or tenses",
    ],
  },
];

export const getCriteriaById = (id: string) => {
  return assessmentCriteria.find((c) => c.id === id);
};
