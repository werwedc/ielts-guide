import type { EssayType } from "@/types/content";

export const essayTypes: EssayType[] = [
  {
    id: "opinion",
    title: "Opinion Essay",
    slug: "opinion",
    description: "Also known as Agree/Disagree essay. You must take a clear position and support it with well-developed arguments.",
    questionExamples: [
      "Do you agree or disagree?",
      "To what extent do you agree or disagree?",
      "Do you think this is a positive or negative development?",
      "Is this a good thing or a bad thing?",
    ],
    questionPatterns: [
      "Some people think that [opinion A]. Others believe [opinion B]. Do you agree or disagree?",
      "[Statement]. To what extent do you agree or disagree?",
    ],
    structure: {
      introduction: {
        title: "Introduction (40-60 words)",
        wordCount: "40-60 words",
        elements: [
          "Paraphrase the prompt using synonyms and grammatical transformation",
          "Thesis Statement: Clearly state your opinion (e.g., 'This essay completely agrees...')",
          "Outline Statement: Briefly mention the two main reasons you will discuss",
        ],
        example:
          "It is argued that earning a high salary is more significant than job satisfaction. While financial security is important, this essay completely disagrees with the statement because job satisfaction leads to better mental health and long-term career stability.",
      },
      bodyParagraph1: {
        title: "Body Paragraph 1 (Reason 1)",
        wordCount: "80-100 words",
        elements: [
          "Topic Sentence: Introduce your first main reason",
          "Explanation: Elaborate using a causal chain",
          "Example: Provide specific, relevant evidence",
          "Concluding Thought: Link back to your thesis",
        ],
      },
      bodyParagraph2: {
        title: "Body Paragraph 2 (Reason 2)",
        wordCount: "80-100 words",
        elements: [
          "Topic Sentence: Introduce your second reason",
          "Idea Linking: Connect to BP1 content (e.g., 'In addition to...')",
          "Explanation: Explain the mechanism",
          "Example: Provide supporting evidence",
        ],
      },
      conclusion: {
        title: "Conclusion (30-40 words)",
        wordCount: "30-40 words",
        elements: [
          "Summary: Restate your opinion using different vocabulary",
          "Final Thought: Offer a prediction or recommendation",
        ],
      },
      wordCountGuidelines: "Total: 270-290 words (sweet spot for Band 9)",
    },
    tips: [
      "Take a clear position from the introduction - no wavering",
      "You can partially agree, but this requires higher-level cohesion skills",
      "Use idea linking instead of mechanical sequencers (instead of 'Secondly', use 'In addition to mental health benefits, job satisfaction also...')",
      "Use strong modality for your opinion ('It is undeniable that', 'I firmly believe')",
      "Use distancing modality for opposing views ('Some might argue', 'It is often claimed')",
    ],
    advancedTips: [
      "The 'To what extent' phrasing allows for qualified agreement - you can agree with conditions",
      "Dialectical reasoning strengthens your argument: acknowledge counter-arguments, then refute them",
      "The 'Why' chain: keep asking why to extend ideas to their logical conclusion",
      "Use examples strategically - they should support arguments, introduce vocabulary, and create memorable anchors",
    ],
    commonMistakes: [
      "Taking a middle position without clearly defining your stance",
      "Failing to link body paragraphs conceptually",
      "Listing ideas instead of developing them deeply",
      "Using vague examples ('In my country...') instead of specific evidence",
      "Forgetting to restate opinion in the conclusion",
    ],
    vocabulary: [
      {
        category: "Position Stating",
        words: [
          { term: "I firmly believe", context: "Strong position statement" },
          { term: "I concur with the view that", context: "Formal agreement" },
          { term: "I contend that", context: "Presenting an argument" },
          { term: "It is my conviction that", context: "Strong personal belief" },
        ],
      },
      {
        category: "Attribution (Opposing Views)",
        words: [
          { term: "Some might argue", context: "Presenting counter-argument" },
          { term: "It is often claimed that", context: "Attributing general opinion" },
          { term: "Proponents of this view suggest", context: "Attributing to supporters" },
          { term: "A common argument is that", context: "Presenting widespread view" },
        ],
      },
      {
        category: "Qualified Agreement",
        words: [
          { term: "While I broadly concur", context: "Partial agreement" },
          { term: "I agree with the proviso that", context: "Conditional agreement" },
          { term: "This position is valid provided that", context: "Conditional validity" },
        ],
      },
    ],
  },
  {
    id: "discussion",
    title: "Discussion Essay",
    slug: "discussion",
    description: "Also known as 'Both Views + Opinion'. You must discuss two opposing perspectives equally before giving your own opinion.",
    questionExamples: [
      "Discuss both views and give your opinion",
      "Discuss the advantages and disadvantages and give your opinion",
      "Discuss both sides and state your own view",
    ],
    questionPatterns: [
      "Some people believe [A]. Others believe [B]. Discuss both views and give your opinion.",
    ],
    structure: {
      introduction: {
        title: "Introduction (40-50 words)",
        wordCount: "40-50 words",
        elements: [
          "Paraphrase: Present the two opposing views",
          "Thesis/Outline: State your opinion and signal both sides will be analyzed",
        ],
        example:
          "While some argue that governments should prioritize faster public transport, others believe cost and environmental sustainability are more important. This essay will discuss both perspectives and argue that affordability and sustainability should take precedence.",
      },
      bodyParagraph1: {
        title: "Body Paragraph 1 (The View You Disagree With)",
        wordCount: "90-100 words",
        elements: [
          "Topic Sentence: Introduce the view using attribution verbs",
          "Explanation: Explain the reasoning objectively (avoid 'I think')",
          "Example: Provide an example that supports THIS view",
          "Optional Refutation: Briefly highlight a flaw",
        ],
      },
      bodyParagraph2: {
        title: "Body Paragraph 2 (The View You Agree With)",
        wordCount: "90-100 words",
        elements: [
          "Topic Sentence: Contrastive linker + your preferred view",
          "Explanation: Explain why this view is valid or superior",
          "Example: Provide supporting evidence",
          "Opinion Signal: 'I firmly believe this is the more pragmatic approach because...'",
        ],
      },
      conclusion: {
        title: "Conclusion (30-40 words)",
        wordCount: "30-40 words",
        elements: [
          "Summary: Summarize both View A and View B",
          "Final Opinion: Clearly restate which side is stronger and why",
        ],
      },
      wordCountGuidelines: "Total: 270-290 words",
    },
    tips: [
      "Act as an adjudicator - be objective while discussing both sides",
      "Give equal or nearly equal attention to both views",
      "Don't explain the side you disagree with poorly - examiners will notice",
      "Use attribution verbs to distinguish between general opinion and your own",
      "Signal your opinion clearly in BP2 and the conclusion",
    ],
    advancedTips: [
      "The Pivot Sentence: In transitions, signal the shift from opposing to preferred view",
      "Use the 'Despite the validity of...' pattern to acknowledge the opposing view before presenting yours",
      "Your opinion can be that one side is stronger, or that elements of both sides have merit",
      "The discussion itself demonstrates critical thinking - don't rush to your opinion",
    ],
    commonMistakes: [
      "Failing to discuss the side you disagree with adequately",
      "Using 'I think' in BP1 when discussing the opposing view",
      "Giving unequal attention to the two views",
      "Not clearly stating your own opinion",
      "Summarizing both views in conclusion but forgetting to state which is stronger",
    ],
    vocabulary: [
      {
        category: "Attribution Verbs (View A)",
        words: [
          { term: "Proponents of... argue that", context: "Supporters of a position" },
          { term: "Advocates of... claim that", context: "Those who advocate for something" },
          { term: "It is often suggested that", context: "General suggestion" },
          { term: "Supporters maintain that", context: "Those who maintain a position" },
        ],
      },
      {
        category: "Attribution Verbs (View B + Your Opinion)",
        words: [
          { term: "Critics argue that", context: "Those who criticize" },
          { term: "Opponents counter that", context: "Those who oppose" },
          { term: "I concur with the view that", context: "Your agreement" },
          { term: "I align myself with", context: "Your position alignment" },
        ],
      },
      {
        category: "Contrastive Transitions",
        words: [
          { term: "On the other hand", context: "Introducing opposing view" },
          { term: "In contrast", context: "Showing difference" },
          { term: "Conversely", context: "Opposite perspective" },
          { term: "Nevertheless", context: "Despite previous argument" },
        ],
      },
    ],
  },
  {
    id: "problem-solution",
    title: "Problem-Solution Essay",
    slug: "problem-solution",
    description: "Identify problems or causes and propose specific, feasible solutions. The key is linkage - solutions must directly address the problems identified.",
    questionExamples: [
      "What are the problems and how can they be solved?",
      "What problems are associated with this and what are some possible solutions?",
      "What issues does this cause and how can they be addressed?",
      "What are the causes of this problem and what can be done to tackle it?",
    ],
    questionPatterns: [
      "[Issue] is becoming [adjective]. What are the problems/causes and what solutions can you suggest?",
    ],
    structure: {
      introduction: {
        title: "Introduction (35-45 words)",
        wordCount: "35-45 words",
        elements: [
          "Paraphrase: Restate the issue",
          "Outline: State the specific cause/problem and proposed solution",
        ],
        example:
          "Many cities are suffering from severe traffic congestion. This essay will identify inadequate infrastructure as the primary cause and propose investment in public transit as a viable solution.",
      },
      bodyParagraph1: {
        title: "Body Paragraph 1 (Problems/Causes)",
        wordCount: "90-100 words",
        elements: [
          "Topic Sentence: Identify the main cause(s)",
          "Explanation: Explain the mechanism (How does X lead to Y?)",
          "Example: Provide statistics or evidence",
          "Implication: Why this matters",
        ],
      },
      bodyParagraph2: {
        title: "Body Paragraph 2 (Solutions)",
        wordCount: "90-100 words",
        elements: [
          "Topic Sentence: Propose a solution that directly solves BP1 problems",
          "Explanation: Explain how the solution works",
          "Agent Identification: Who is responsible? (government, individuals, schools)",
          "Example: Real-world successful implementation",
        ],
      },
      conclusion: {
        title: "Conclusion (25-35 words)",
        wordCount: "25-35 words",
        elements: [
          "Summary: Summarize the main cause/problem and solution",
          "Prediction: Comment on future implications if not addressed",
        ],
      },
      wordCountGuidelines: "Total: 270-290 words",
    },
    tips: [
      "CRITICAL: Solutions in BP2 MUST directly address problems in BP1",
      "Be specific - 'government should solve this' is weak",
      "Identify the agent: Who will implement the solution?",
      "Ensure solutions are feasible, not hypothetical",
      "Link problems and solutions explicitly ('To mitigate this...', 'This can be addressed by...')",
    ],
    advancedTips: [
      "Use problem-solution linkage language: 'To alleviate this issue...', 'This concern can be remedied by...'",
      "Propose multi-stakeholder solutions: government, individuals, and organizations",
      "Address feasibility - explain why your solution will work",
      "Consider both immediate and long-term solutions",
      "Use cause-effect language: 'precipitated by', 'stem from', 'exacerbated by'",
    ],
    commonMistakes: [
      "Solutions in BP2 don't address the specific problems in BP1",
      "Vague solutions ('people should be more responsible')",
      "Forgetting to identify who should implement the solution",
      "Listing multiple problems without depth",
      "Proposing unrealistic or impossible solutions",
    ],
    vocabulary: [
      {
        category: "Problem Language",
        words: [
          { term: "precipitated by", context: "Caused by" },
          { term: "stems from", context: "Originates from" },
          { term: "exacerbated by", context: "Made worse by" },
          { term: "gives rise to", context: "Causes/leads to" },
          { term: "poses a significant challenge", context: "Presents a problem" },
        ],
      },
      {
        category: "Solution Language",
        words: [
          { term: "alleviate", context: "Make problems less severe" },
          { term: "mitigate", context: "Reduce severity of" },
          { term: "remedy", context: "Cure or solve" },
          { term: "curb", context: "Control/limit" },
          { term: "address", context: "Deal with/tackle" },
        ],
      },
      {
        category: "Agent Identification",
        words: [
          { term: "It is imperative that", context: "Strong necessity" },
          { term: "requires intervention from", context: "Who should act" },
          { term: "lies in the hands of", context: "Responsibility" },
          { term: "must collaborate to", context: "Multiple actors working together" },
        ],
      },
    ],
  },
  {
    id: "advantages-disadvantages",
    title: "Advantages-Disadvantages Essay",
    slug: "advantages-disadvantages",
    description: "Evaluate the pros and cons of a topic. Type 2 requires an evaluation - which side outweighs the other?",
    questionExamples: [
      "What are the advantages and disadvantages?",
      "Do the advantages outweigh the disadvantages?",
      "Is this a positive or negative development?",
    ],
    questionPatterns: [
      "What are the advantages and disadvantages of [topic]?",
      "[Topic] is becoming [adjective]. Do the advantages outweigh the disadvantages?",
    ],
    structure: {
      introduction: {
        title: "Introduction (35-45 words)",
        wordCount: "35-45 words",
        elements: [
          "Paraphrase: Introduce the trend/topic",
          "Thesis (Type 2): State clearly that advantages outweigh disadvantages",
        ],
        example:
          "Remote work has become increasingly common. While there are minor drawbacks regarding team cohesion, I believe the flexibility and productivity benefits far outweigh these concerns.",
      },
      bodyParagraph1: {
        title: "Body Paragraph 1 (The Weaker Side)",
        wordCount: "80-90 words",
        elements: [
          "Topic Sentence: Discuss the disadvantages",
          "Explanation: Explain why these are negative",
          "Concession: Acknowledge validity but minimize impact",
        ],
      },
      bodyParagraph2: {
        title: "Body Paragraph 2 (The Stronger Side)",
        wordCount: "90-100 words",
        elements: [
          "Topic Sentence: Discuss the advantages",
          "Explanation: Explain the benefits",
          "Evaluation: Explicitly compare - 'The benefits of X are more significant than...'",
        ],
      },
      conclusion: {
        title: "Conclusion (25-35 words)",
        wordCount: "25-35 words",
        elements: [
          "Summary: Reiterate that while there are downsides, upsides are superior",
          "Final Statement: 'Therefore, the advantages clearly outweigh the disadvantages.'",
        ],
      },
      wordCountGuidelines: "Total: 270-290 words",
    },
    tips: [
      "Identify the type: Type 1 (list both) vs Type 2 (evaluate which outweighs)",
      "For Type 2: You MUST evaluate - stating 'there are pros and cons' is insufficient",
      "Use comparative language to show weight",
      "The side you support should get slightly more development",
      "Your conclusion must clearly state which side outweighs the other",
    ],
    advancedTips: [
      "Use concessive structures: 'While X is a valid concern, the benefits of Y are...'",
      "Comparative vocabulary: 'pale in comparison to', 'are manifold', 'are marginal'",
      "The evaluation should be explicit, not implied",
      "Use scaling language: 'more significant', 'far outweigh', 'negligible when weighed against'",
    ],
    commonMistakes: [
      "For Type 2: failing to explicitly evaluate which side is stronger",
      "Giving equal treatment without evaluation",
      "Simply listing advantages and disadvantages without analysis",
      "Forgetting to state which outweighs which in the conclusion",
      "Using vague comparison ('both are important')",
    ],
    vocabulary: [
      {
        category: "Advantage Language",
        words: [
          { term: "merits", context: "Advantages/benefits" },
          { term: "assets", context: "Positive qualities" },
          { term: "boons", context: "Benefits/blessings" },
          { term: "upsides", context: "Positive aspects" },
          { term: "favorable aspects", context: "Positive features" },
        ],
      },
      {
        category: "Disadvantage Language",
        words: [
          { term: "drawbacks", context: "Disadvantages" },
          { term: "pitfalls", context: "Hidden problems" },
          { term: "detriments", context: "Harms/disadvantages" },
          { term: "downsides", context: "Negative aspects" },
          { term: "adverse consequences", context: "Negative results" },
        ],
      },
      {
        category: "Evaluation/Comparison",
        words: [
          { term: "outweigh", context: "Are more important than" },
          { term: "pale in comparison to", context: "Are insignificant compared to" },
          { term: "are manifold", context: "Are numerous/various" },
          { term: "are marginal", context: "Are minor/insignificant" },
          { term: "negligible when weighed against", context: "Unimportant compared to" },
        ],
      },
    ],
  },
  {
    id: "double-question",
    title: "Double Question Essay",
    slug: "double-question",
    description: "Also called Direct Questions Essay. Two distinct questions must both be answered fully. Neglecting one leads to maximum Band 5-6.",
    questionExamples: [
      "Why is this happening? Do you think this is a good or bad thing?",
      "What are the causes of this and what can be done?",
      "What are the reasons for this and is it a positive development?",
      "Why do people do this and what are the benefits/drawbacks?",
    ],
    questionPatterns: [
      "[Trend] is increasing. Why is this happening? Is it positive or negative?",
      "[Statement]. What are the causes and what solutions exist?",
    ],
    structure: {
      introduction: {
        title: "Introduction (30-40 words)",
        wordCount: "30-40 words",
        elements: [
          "Paraphrase: Restate the situation",
          "Outline/Thesis: Briefly answer BOTH questions",
        ],
        example:
          "More people are working freelance instead of full-time jobs. This essay will identify economic instability as a primary cause and argue that this trend has mixed effects on worker well-being.",
      },
      bodyParagraph1: {
        title: "Body Paragraph 1 (Answer Question 1)",
        wordCount: "100-110 words",
        elements: [
          "Topic Sentence: Direct answer to Question 1",
          "Explanation: Elaborate on your answer",
          "Example: Provide supporting evidence",
          "Extension: Related factors",
        ],
      },
      bodyParagraph2: {
        title: "Body Paragraph 2 (Answer Question 2)",
        wordCount: "90-100 words",
        elements: [
          "Topic Sentence: Direct answer to Question 2",
          "Thematic Link: Reference BP1 content if relevant",
          "Explanation: Explain your position",
          "Example: Supporting evidence",
        ],
      },
      conclusion: {
        title: "Conclusion (25-35 words)",
        wordCount: "25-35 words",
        elements: [
          "Summary: Summarize the answers to BOTH questions",
          "Final thought on the relationship between answers",
        ],
      },
      wordCountGuidelines: "Total: 270-290 words",
    },
    tips: [
      "CRITICAL: Answer BOTH questions fully - neglecting one caps your score at Band 5-6",
      "Keep answers distinct - don't mix Q1 and Q2 content",
      "Create thematic links between Q1 and Q2 when possible",
      "Use topic sentences to directly answer each question",
      "In conclusion, summarize answers to BOTH questions",
    ],
    advancedTips: [
      "Thematic linking: 'The economic pressure described above inevitably leads to...'",
      "If questions are related, the answer to Q2 can reference Q1's content",
      "Maintain parallel structure - give roughly equal weight to both answers",
      "Use linking phrases that reference previous discussion: 'Building on the causes identified...'",
    ],
    commonMistakes: [
      "Failing to answer one of the two questions",
      "Combining answers instead of treating them distinctly",
      "Giving much more attention to one question than the other",
      "Forgetting to summarize both answers in the conclusion",
      "Treating the questions as unrelated when they have thematic connections",
    ],
    vocabulary: [
      {
        category: "Cause Language (Q1)",
        words: [
          { term: "The primary driver of", context: "Main cause" },
          { term: "stems from", context: "Comes from" },
          { term: "can be attributed to", context: "Is caused by" },
          { term: "The root cause of", context: "Fundamental reason" },
          { term: "gives rise to", context: "Leads to/causes" },
        ],
      },
      {
        category: "Evaluation Language (Q2)",
        words: [
          { term: "is predominantly", context: "Is mainly" },
          { term: "has mixed implications", context: "Has both positive and negative effects" },
          { term: "is largely beneficial", context: "Is mostly good" },
          { term: "presents significant challenges", context: "Creates problems" },
        ],
      },
      {
        category: "Thematic Linking",
        words: [
          { term: "The factors mentioned above", context: "Referencing previous points" },
          { term: "Building on these causes", context: "Connecting to previous paragraph" },
          { term: "As a consequence of", context: "Because of" },
          { term: "This trend inevitably leads to", context: "Result of the trend" },
        ],
      },
    ],
  },
  {
    id: "positive-negative",
    title: "Positive-Negative Development Essay",
    slug: "positive-negative",
    description: "A variation of the opinion essay. Decide if a development is positive, negative, or mostly one with minor concessions.",
    questionExamples: [
      "Is this a positive or negative development?",
      "Do you think this is a positive or negative trend?",
    ],
    questionPatterns: [
      "[Trend] is becoming [adjective]. Is this a positive or negative development?",
    ],
    structure: {
      introduction: {
        title: "Introduction (35-45 words)",
        wordCount: "35-45 words",
        elements: [
          "Paraphrase: State the trend",
          "Thesis: 'In my opinion, this is a largely positive development, despite some drawbacks'",
        ],
        example:
          "Online shopping is becoming increasingly popular worldwide. In my opinion, this is a largely positive development, despite some negative impacts on traditional retail.",
      },
      bodyParagraph1: {
        title: "Body Paragraph 1 (Main Reason for Stance)",
        wordCount: "100-110 words",
        elements: [
          "Topic Sentence: Primary reason why it's positive (or negative)",
          "Explanation: Elaborate on the benefits",
          "Example: Specific evidence",
          "Extension: Broader implications",
        ],
      },
      bodyParagraph2: {
        title: "Body Paragraph 2 (Secondary Reason + Concession)",
        wordCount: "90-100 words",
        elements: [
          "Topic Sentence: Second benefit OR acknowledge a negative",
          "Concession: 'While some worry about X, the benefits of Y are more impactful'",
          "Explanation: Why your stance is still valid despite concerns",
        ],
      },
      conclusion: {
        title: "Conclusion (25-35 words)",
        wordCount: "25-35 words",
        elements: [
          "Reiterate your stance (positive/negative)",
          "Acknowledge the other side is not significant enough to change overall assessment",
        ],
      },
      wordCountGuidelines: "Total: 270-290 words",
    },
    tips: [
      "You can argue wholly positive, wholly negative, or mostly one with minor concession",
      "'Mostly positive' allows for sophistication without losing clarity",
      "Use concession techniques: 'While X is a concern, Y is far more significant'",
      "Be consistent - don't contradict your own stance",
      "Your conclusion should match your introduction",
    ],
    advancedTips: [
      "Dialectical approach: Present the opposing view, then refute it",
      "Nuanced position: 'This development is positive provided that safeguards are implemented'",
      "Use scaling: 'The benefits are substantial, while the drawbacks are manageable'",
      "Conditional acceptance: 'This is positive if certain conditions are met'",
    ],
    commonMistakes: [
      "Contradicting your stance in the body paragraphs",
      "Failing to clearly state if it's positive or negative",
      "Giving equal weight to both sides (this becomes a Discussion essay)",
      "Using weak language ('it has both good and bad points')",
      "Not taking a clear position",
    ],
    vocabulary: [
      {
        category: "Positive Development",
        words: [
          { term: "beneficial", context: "Having good effects" },
          { term: "advantageous", context: "Favorable/beneficial" },
          { term: "laudable", context: "Praiseworthy" },
          { term: "desirable", context: "Wanted/worth having" },
          { term: "welcome", context: "Received positively" },
        ],
      },
      {
        category: "Negative Development",
        words: [
          { term: "detrimental", context: "Harmful" },
          { term: "adverse", context: "Negative/harmful" },
          { term: "undesirable", context: "Not wanted" },
          { term: "problematic", context: "Causing problems" },
          { term: "concerning", context: "Worrying" },
        ],
      },
      {
        category: "Concession Language",
        words: [
          { term: "While it is true that", context: "Acknowledging opposing point" },
          { term: "Admittedly", context: "Conceding a point" },
          { term: "Despite the concerns regarding", context: "Acknowledging worries" },
          { term: "notwithstanding", context: "In spite of" },
          { term: "is outweighed by", context: "One side is more important" },
        ],
      },
    ],
  },
];

export const getEssayTypeBySlug = (slug: string) => {
  return essayTypes.find((t) => t.slug === slug);
};

export const getEssayTypeById = (id: string) => {
  return essayTypes.find((t) => t.id === id);
};
