// Content type definitions for IELTS 9.0 website

export interface EssayType {
  id: string;
  title: string;
  slug: string;
  description: string;
  questionExamples: string[];
  questionPatterns: string[];
  structure: EssayStructure;
  tips: string[];
  advancedTips: string[];
  commonMistakes: string[];
  vocabulary: VocabularyGroup[];
}

export interface EssayStructure {
  introduction: StructureSection;
  bodyParagraph1: StructureSection;
  bodyParagraph2: StructureSection;
  conclusion: StructureSection;
  wordCountGuidelines: string;
}

export interface StructureSection {
  title: string;
  elements: string[];
  wordCount: string;
  example?: string;
}

export interface VocabularyGroup {
  category: string;
  words: VocabularyItem[];
}

export interface VocabularyItem {
  term: string;
  alternative?: string;
  context: string;
  example?: string;
}

export interface AssessmentCriteria {
  id: string;
  name: string;
  shortName: string;
  band9Description: string;
  keyRequirements: string[];
  bandComparison: BandComparisonRow[];
  techniques: Technique[];
  commonPitfalls: string[];
}

export interface BandComparisonRow {
  aspect: string;
  band7: string;
  band8: string;
  band9: string;
}

export interface Technique {
  name: string;
  description: string;
  examples: string[];
}

export interface BandComparison {
  criterion: string;
  feature: string;
  band7: string;
  band8: string;
  band9: string;
}

export interface VocabularyTopic {
  id: string;
  theme: string;
  categories: {
    name: string;
    basicTerm: string;
    advancedNouns: string[];
    advancedVerbs: string[];
    advancedAdjectives: string[];
  }[];
}

export interface GrammarStructure {
  name: string;
  description: string;
  function: string;
  examples: GrammarExample[];
}

export interface GrammarExample {
  standard: string;
  advanced: string;
  technique: string;
}

export interface Strategy {
  id: string;
  name: string;
  description: string;
  steps: StrategyStep[];
  examples: StrategyExample[];
}

export interface StrategyStep {
  title: string;
  description: string;
  questions?: string[];
}

export interface StrategyExample {
  original: string;
  transformed: string;
  explanation: string;
}

export interface ExampleEssay {
  title: string;
  prompt: string;
  essay: string;
  breakdown: PeelBreakdown;
  scoringAnalysis: ScoringAnalysis;
  expressions: ExpressionTranslation[];
  nativeFeatures: string[];
}

export interface PeelBreakdown {
  introduction: PeelSection;
  bodyParagraph1: PeelSection;
  bodyParagraph2: PeelSection;
  conclusion: PeelSection;
}

export interface PeelSection {
  point?: string;
  explanation?: string;
  example?: string;
  link?: string;
  text: string;
  analysis?: string;
}

export interface ScoringAnalysis {
  taskResponse: string;
  cohesion: string;
  lexical: string;
  grammar: string;
}

export interface ExpressionTranslation {
  expression: string;
  translation: string;
}

export interface AdvancedTechnique {
  id: string;
  name: string;
  description: string;
  whyItMatters: string;
  examples: TechniqueExample[];
  commonMistakes: string[];
}

export interface TechniqueExample {
  poor: string;
  excellent: string;
  explanation: string;
}

export interface NavigationItem {
  title: string;
  href: string;
  description?: string;
  children?: NavigationItem[];
}

export interface CollocationCategory {
  category: string;
  description: string;
  collocations: string[];
}

export interface TopicVocabulary {
  topic: string;
  verbs: string[];
  nouns: string[];
  adjectives: string[];
}
