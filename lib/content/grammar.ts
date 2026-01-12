import type { GrammarStructure } from "@/types/content";

export const grammarStructures: GrammarStructure[] = [
  {
    name: "Complex Sentences",
    description: "Combining independent and dependent clauses to show relationships between ideas",
    function: "Linking causes and effects, showing contrast, adding conditions",
    examples: [
      {
        standard: "Although the initial cost of renewable energy is high, the long-term benefits are undeniable.",
        advanced: "Notwithstanding the substantial upfront investment required for renewable energy infrastructure, the long-term environmental and economic dividends render such expenditure both justifiable and necessary.",
        technique: "Subordination with concessive clause",
      },
      {
        standard: "Because many people work remotely, traffic has decreased.",
        advanced: "The widespread adoption of remote work arrangements has precipitated a discernible reduction in vehicular congestion, as fewer commuters necessitate daily travel to centralized office locations.",
        technique: "Cause-effect structure with nominalization",
      },
    ],
  },
  {
    name: "Passive Voice",
    description: "Shifting focus from the agent to the action or receiver",
    function: "Changing focus, maintaining objective tone, when agent is unknown",
    examples: [
      {
        standard: "The government should implement strict measures to curb this trend.",
        advanced: "Strict measures must be implemented by the authorities to curb this concerning trend.",
        technique: "Passive for formal tone",
      },
      {
        standard: "People widely criticize this policy.",
        advanced: "This policy has been widely criticized.",
        technique: "Passive to shift focus from agent to action",
      },
    ],
  },
  {
    name: "Inversion",
    description: "Placing the verb before the subject for emphasis",
    function: "Adding emphasis, creating formal tone, variety in sentence structure",
    examples: [
      {
        standard: "This policy affects not only the economy but also social cohesion.",
        advanced: "Not only does this policy affect the economy, but it also impacts social cohesion.",
        technique: "Negative adverbial inversion",
      },
      {
        standard: "Society has rarely faced such a difficult challenge.",
        advanced: "Rarely has society faced such a formidable challenge.",
        technique: "Negative adverbial at sentence start",
      },
      {
        standard: "If the government had acted sooner, the crisis could have been prevented.",
        advanced: "Had the government acted sooner, the crisis could have been averted.",
        technique: "Conditional inversion (3rd conditional)",
      },
      {
        standard: "We will only succeed through cooperation.",
        advanced: "Only through cooperation will we succeed.",
        technique: "Restrictive 'Only' inversion",
      },
    ],
  },
  {
    name: "Cleft Sentences",
    description: "Splitting sentences to stress particular elements",
    function: "Emphasis, highlighting specific information, adding variety",
    examples: [
      {
        standard: "The lack of funding hinders progress.",
        advanced: "It is the lack of funding, rather than a lack of interest, that hinders progress.",
        technique: "It-cleft for contrastive emphasis",
      },
      {
        standard: "We need a fundamental paradigm shift.",
        advanced: "What is required is a fundamental paradigm shift.",
        technique: "Wh-cleft for noun phrase emphasis",
      },
      {
        standard: "Inefficient management caused the problem.",
        advanced: "The problem was caused by inefficient management.",
        technique: "Passive cleft (focus on cause)",
      },
    ],
  },
  {
    name: "Relative Clauses",
    description: "Adding detailed information concisely",
    function: "Adding detail, defining terms, combining sentences",
    examples: [
      {
        standard: "Students who engage in extracurricular activities often develop superior social skills.",
        advanced: "Students engaging in extracurricular activities frequently demonstrate enhanced interpersonal competencies.",
        technique: "Reduced relative clause (participle phrase)",
      },
      {
        standard: "The problems that face the government are complex.",
        advanced: "The problems facing the government are multifaceted and require comprehensive solutions.",
        technique: "Reduced relative clause with present participle",
      },
      {
        standard: "The research which was conducted last year showed significant results.",
        advanced: "The research conducted last year yielded significant findings.",
        technique: "Reduced relative clause with past participle",
      },
    ],
  },
  {
    name: "Conditionals",
    description: "Expressing hypothetical situations and their consequences",
    function: "Speculating, making predictions, proposing solutions",
    examples: [
      {
        standard: "If we don't act now, the problem will get worse.",
        advanced: "Were we to fail to act promptly, the situation would deteriorate significantly.",
        technique: "Inverted conditional (2nd conditional)",
      },
      {
        standard: "If the government had invested more, we would have better infrastructure.",
        advanced: "Had the government invested more heavily in infrastructure, the current deficiencies would not exist.",
        technique: "Inverted conditional (3rd conditional)",
      },
      {
        standard: "If this trend continues, it will have serious consequences.",
        advanced: "Should this trend persist, the ramifications would be far-reaching and potentially irreversible.",
        technique: "Inverted conditional with 'should'",
      },
    ],
  },
  {
    name: "Participle Clauses",
    description: "Using present or past participles to show simultaneous or sequential actions",
    function: "Showing cause and result, combining ideas, improving flow",
    examples: [
      {
        standard: "Because the government raised taxes, people had less money to spend.",
        advanced: "Having raised taxes, the government left citizens with diminished disposable income.",
        technique: "Perfect participle showing cause",
      },
      {
        standard: "The economy grew and living standards improved.",
        advanced: "The economy experienced robust growth, with living standards improving correspondingly.",
        technique: "With + participle structure",
      },
      {
        standard: "Acknowledging the concerns, the committee rejected the proposal.",
        advanced: "Acknowledging the validity of the concerns raised, the committee nevertheless proceeded to reject the proposal.",
        technique: "Participle clause showing concession",
      },
    ],
  },
  {
    name: "Nominalization",
    description: "Converting verbs and adjectives into nouns",
    function: "Increasing academic density, enabling Theme/Rheme flow",
    examples: [
      {
        standard: "Because people live longer, healthcare costs are rising.",
        advanced: "The increasing longevity of the population has precipitated a rise in healthcare expenditure.",
        technique: "Verb → noun transformation",
      },
      {
        standard: "Because the technology improved, communication became easier.",
        advanced: "Technological advancements have facilitated more efficient communication.",
        technique: "Adjective → noun transformation",
      },
      {
        standard: "Because the government decided to reduce taxes, the economy grew.",
        advanced: "The decision to implement tax reductions stimulated economic growth.",
        technique: "Clause → noun phrase transformation",
      },
    ],
  },
];

export const punctuationRules = {
  semicolon: {
    description: "Links two independent clauses that are closely related",
    examples: [
      "Legislation is one part of the solution; education is the other.",
      "The policy was well-intentioned; its implementation, however, was flawed.",
    ],
  },
  colon: {
    description: "Introduces an explanation, list, or quote",
    examples: [
      "The problem is two-fold: economic stagnation and social unrest.",
      "There were three primary causes: inadequate funding, poor planning, and external pressures.",
    ],
  },
  dash: {
    description: "Used for emphatic parenthetical information",
    examples: [
      "The government's response — if it can be called that — was inadequate.",
      "The results were clear: the policy had failed — catastrophically.",
    ],
  },
  comma: {
    description: "Separates clauses, items in lists, and parenthetical elements",
    examples: [
      "When the policy was implemented, it faced immediate resistance.",
      "The study, which was conducted over five years, revealed surprising results.",
    ],
  },
};

export const hedgingExpressions = {
  modals: {
    description: "Modal verbs to express varying degrees of certainty",
    examples: [
      "may indicate (possibility)",
      "might suggest (tentative possibility)",
      "could contribute to (potential cause)",
      "would appear to (seems but not certain)",
      "should be considered (recommendation)",
    ],
  },
  adverbs: {
    description: "Adverbs that modify the strength of claims",
    examples: [
      "potentially serious",
      "arguably flawed",
      "possibly the most significant",
      "seemingly plausible",
      "apparently contradictory",
    ],
  },
  verbs: {
    description: "Cautious verbs for making claims",
    examples: [
      "suggests that",
      "indicates that",
      "appears to",
      "seems to",
      "tends to",
      "may prove to be",
      "could be considered",
      "might be interpreted as",
    ],
  },
  phrases: {
    description: "Hedging phrases for cautious claims",
    examples: [
      "It would seem that...",
      "There is evidence to suggest that...",
      "This appears to indicate that...",
      "It is arguable that...",
      "To some extent...",
    ],
  },
};
