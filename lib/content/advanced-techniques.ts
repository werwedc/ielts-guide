import type { AdvancedTechnique, CollocationCategory, TopicVocabulary } from "@/types/content";

export const advancedTechniques: AdvancedTechnique[] = [
  {
    id: "dialectical-reasoning",
    name: "Dialectical Reasoning",
    description: "The Thesis-Antithesis-Synthesis approach to argumentation that moves beyond linear cause-effect to sophisticated, nuanced reasoning.",
    whyItMatters: "Band 9 requires 'fully extended' ideas. Dialectical reasoning demonstrates the ability to consider multiple perspectives and synthesize them into a coherent argument - a hallmark of advanced academic thinking.",
    examples: [
      {
        poor: "Remote work is good because it's flexible. Some people say it's lonely, but I disagree.",
        excellent: "While remote work undoubtedly offers flexibility, it also presents challenges regarding team cohesion and employee isolation. However, these drawbacks can be mitigated through intentional virtual team-building activities and periodic in-person meetings, making remote work a net positive.",
        explanation: "The excellent version acknowledges the counter-argument (antithesis) before refuting it with a solution (synthesis).",
      },
    ],
    commonMistakes: [
      "Presenting only one side without acknowledging counter-arguments",
      "Acknowledging opposing views but failing to refute them",
      "Using weak concession ('Some people disagree, but they are wrong')",
      "Forgetting to return to your original position after presenting counter-arguments",
    ],
  },
  {
    id: "invisible-cohesion",
    name: "Invisible Cohesion",
    description: "Cohesion that attracts no attention - using referencing, substitution, and lexical chains instead of mechanical linkers.",
    whyItMatters: "Band 9 descriptors explicitly state cohesion should attract no attention. Over-reliance on 'Firstly, Moreover, In conclusion' creates a mechanical, staccato rhythm that signals lower proficiency.",
    examples: [
      {
        poor: "First, pollution is a problem. Moreover, it affects health. Additionally, it causes economic issues.",
        excellent: "Pollution poses significant challenges to modern society. This environmental degradation not only affects public health but also imposes substantial economic burdens through healthcare costs and lost productivity.",
        explanation: "The excellent version uses 'This environmental degradation' to reference back to 'pollution' without using a mechanical linker.",
      },
    ],
  },
  {
    id: "nominalization",
    name: "Nominalization",
    description: "Converting verbs and adjectives into nouns to increase academic density and formality.",
    whyItMatters: "Academic writing is characterized by high lexical density - a high ratio of content words to grammatical words. Nominalization allows discussion of abstract concepts and facilitates Theme/Rheme flow.",
    examples: [
      {
        poor: "Because cities are growing quickly, we are seeing more pollution.",
        excellent: "Rapid urbanization has precipitated a marked increase in pollution levels.",
        explanation: "'cities are growing quickly' becomes 'Rapid urbanization' (verb → noun), 'we are seeing' becomes 'precipitated' (event → abstract noun).",
      },
    ],
    commonMistakes: [
      "Overusing nominalization to the point of obscurity",
      "Creating strings of nouns that are hard to parse",
      "Using nominalized forms that sound unnatural",
    ],
  },
  {
    id: "thematic-progression",
    name: "Thematic Progression (Theme/Rheme)",
    description: "Creating flow by making the Rheme (new information) of one sentence as Theme (topic) of the next.",
    whyItMatters: "This creates a 'zigzag' pattern that guides readers effortlessly through text, reducing cognitive load. Band 9 essays are characterized by this effortless flow.",
    examples: [
      {
        poor: "The government introduced a new tax. It is controversial. People are angry about it.",
        excellent: "The government has introduced a new fiscal policy. This measure has sparked considerable debate. The controversy stems from concerns about its impact on low-income households.",
        explanation: "new fiscal policy → This measure → The controversy. Each sentence takes a new info from the previous as its starting point.",
      },
    ],
  },
  {
    id: "hedging-modality",
    name: "Hedging and Modality",
    description: "Using modal verbs, adverbs, and cautious verbs to express precise degrees of certainty.",
    whyItMatters: "Academic writing requires precision. Absolute statements are often seen as unsophisticated or inaccurate. Band 9 writers use modality to nuance their claims.",
    examples: [
      {
        poor: "Video games cause violence. This is a fact.",
        excellent: "Excessive exposure to violent video games may be a contributing factor to aggressive behavior in some adolescents.",
        explanation: "Uses 'may be' and 'some' instead of absolute 'is' and 'all'. Shows precise degree of certainty.",
      },
    ],
    commonMistakes: [
      "Making absolute claims without evidence",
      "Overusing hedging to the point of sounding uncertain",
      "Not understanding that hedging is a sign of academic sophistication, not weakness",
    ],
  },
  {
    id: "cohesion-devices",
    name: "Cohesion Devices",
    description: "Tools for creating connections between ideas without relying on mechanical linkers.",
    whyItMatters: "Band 9 writers use a variety of devices - lexical chains, substitution, referencing, and thematic progression - to create seamless flow.",
    examples: [
      {
        poor: "First, pollution is a problem. Moreover, it affects health. Additionally, it causes economic issues.",
        excellent: "Pollution poses significant challenges to modern society. This environmental degradation not only affects public health but also imposes substantial economic burdens through healthcare costs and lost productivity.",
      },
    ],
  },
  {
    id: "collocation-categories",
    name: "Functional Collocations",
    description: "Adjective + Noun combinations that signal academic sophistication.",
  },
  {
    id: "verb-noun-collocations",
    name: "Verb + Noun Collocations",
    description: "Academic verb combinations with precise meanings.",
  },
  {
    id: "verb-adjective-collocations",
    name: "Verb + Adjective Collocations",
    description: "Describing actions or qualities with nuanced vocabulary.",
  },
];

export const collocationCategories: CollocationCategory[] = [
  {
    category: "Functional Collocations",
    description: "Adjective + Noun combinations that signal academic sophistication.",
    collocations: [
      {
        basic: "empirical evidence",
        advanced: "integral part",
        context: "used in research and academic writing",
      },
      {
        basic: "diametrically opposed",
        advanced: "contrasting perspectives",
        context: "showing multiple viewpoints in argument",
      },
      {
        basic: "vested interest",
        advanced: "conflicting priorities",
        context: "used in ethical and philosophical discussions",
      },
      {
        basic: "mitigating factors",
        advanced: "ameliorating conditions",
        context: "used in policy and problem-solution essays",
      },
      {
        basic: "insatiable appetite",
        advanced: "curbing appetite",
        context: "used in health and policy discussions",
      },
      {
        basic: "pressing issue",
        advanced: "urgent issue",
        context: "used in environmental and social issues",
      },
      {
        basic: "formidable challenge",
        advanced: "insurmountable obstacle",
        context: "used in business and economic contexts",
      },
      {
        basic: "adverse consequence",
        advanced: "deleterious effect",
        context: "used in risk assessment discussions",
      },
      {
        basic: "multifaceted issue",
        advanced: "complex problem",
        context: "used in sociological and psychological analyses",
      },
      {
        basic: "nuanced perspective",
        advanced: "subtle viewpoint",
        context: "used in cultural and academic analyses",
      },
      {
        basic: "inextricably linked",
        advanced: "interconnected relationship",
        context: "used in systems thinking discussions",
      },
      {
        basic: "arguably erroneous",
        advanced: "well-founded position",
        context: "used in philosophical and ethical debates",
      },
      {
        basic: "arguably beneficial",
        advanced: "widely accepted",
        context: "used in policy and value analyses",
      },
      {
        basic: "seemingly plausible",
        advanced: "reasonable claim",
        context: "used in logical and rhetorical analyses",
      },
      {
        basic: "potentially devastating",
        advanced: "undeniably significant",
        context: "used in impact assessments",
      },
      {
        basic: "extremely unlikely",
        advanced: "highly probable",
        context: "used in probability and statistics discussions",
      },
    ],
  },
];

export const topicVocabulary: TopicVocabulary[] = [
  {
    topic: "Environment",
    verbs: ["degrade", "deplete", "contaminate", "devastate", "emit", "preserve", "mitigate", "rehabilitate", "conserve"],
    nouns: ["degradation", "deforestation", "pollutant", "carbon footprint", "biodiversity", "sustainability", "renewable energy", "habitat degradation", "climate change", "ecological balance", "environmental impact", "finite resources"],
    adjectives: ["irreversible", "catastrophic", "hazardous", "uninhabitable", "eco-friendly", "sustainable", "renewable", "depleted", "contaminated", "fragile", "pristine", "windling"],
  },
  {
    topic: "Education",
    verbs: ["instill", "cultivate", "nurture", "equip", "master", "facilitate", "enhance", "acquire", "foster", "comprehend", "retain", "specialize"],
    nouns: ["acquisition", "curriculum", "pedagogy", "literacy", "knowledge", "critical thinking", "cognitive development", "educational attainment", "learning outcomes", "instructional methods"],
    adjectives: ["academic", "vocational", "extracurricular", "holistic", "interdisciplinary", "instructional", "theoretical", "practical", "foundational"],
  },
  {
    topic: "Technology",
    verbs: ["innovate", "automate", "digitize", "facilitate", "disrupt", "accelerate", "transform", "enable", "empower", "streamline"],
    nouns: ["innovation", "automation", "digital transformation", "artificial intelligence", "technological advancement", "cybersecurity", "digital literacy", "virtual environment", "connectivity", "technological infrastructure", "digital footprint"],
    adjectives: ["cutting-edge", "state-of-the-art", "revolutionary", "innovative", "digital", "virtual", "automated", "groundbreaking", "unprecedented"],
  },
];
