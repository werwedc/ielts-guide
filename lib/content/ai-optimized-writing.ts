export const aiOptimizedWriting = {
  introduction: "Here is a structured checklist and guide to 'Syntactic Maturity.' This approach satisfies to AI (which wants statistical 'depth' and branching trees) and to Human (who wants flow and academic tone).",

  sentenceExpander: [
    {
      name: "The 'Subordinator' Frame (Creating Depth)",
      description: "Instead of listing facts side-by-side, force one idea to depend on the other.",
      checkItem: "Does the sentence start with or contain a subordinator?",
      swaps: [
        {
          instead: '"Pollution is rising. The government must act." (Two simple sentences)',
          use: "Given that / Since / While / Although",
          result: '"Given that pollution levels are rising at an alarming rate, it is imperative that the government acts immediately."',
          aiBenefit: "Creates a 'dependent clause,' increasing sentence tree depth.",
        },
      ],
    },
    {
      name: "The 'Relative Clause' Insert (Adding Precision)",
      description: "Pack more definition into your nouns without starting a new sentence.",
      checkItem: 'Did I use which, who, that, or where to define a noun?',
      swaps: [
        {
          instead: '"Students use computers. Computers help them learn faster."',
          use: ", which / , who",
          result: '"Students utilize computers**, which** allow them to process information significantly faster."',
          aiBenefit: "Increases 'noun phrase complexity.'",
        },
      ],
    },
    {
      name: "Nominalization (The 'Noun Transformation')",
      description: "Turn actions (verbs) into concepts (nouns). This is the hallmark of high-level academic writing.",
      checkItem: "Can I turn the main verb into the subject of the sentence?",
      swaps: [
        {
          instead: '"The economy grew quickly, so people were happy."',
          use: "Growth (noun) instead of Grew (verb)",
          result: '"The rapid growth of the economy resulted in widespread public satisfaction."',
          aiBenefit: "Increases 'lexical density' (more content words, fewer function words).",
        },
      ],
    },
    {
      name: "The 'Participle' Link (The -ing/-ed Bridge)",
      description: "Connect cause and effect seamlessly.",
      checkItem: "Can I combine a result using an '-ing' phrase?",
      swaps: [
        {
          instead: '"Companies cut costs. This reduced quality of products."',
          use: ", thereby + -ing verb",
          result: '"Companies implemented cost-cutting measures**, thereby reducing** overall quality of their products."',
          aiBenefit: "Shows complex 'cause-effect' logic recognition.",
        },
      ],
    },
  ],

  vocabularySubstitutions: [
    { simple: "But", complex: "However / Conversely / Nevertheless", context: "Start of a contrasting sentence" },
    { simple: "So", complex: "Consequently / Therefore / Hence", context: "Showing result" },
    { simple: "Also", complex: "Furthermore / Moreover / Additionally", context: "Adding a point" },
    { simple: "Get / Receive", complex: "Acquire / Obtain / Derive", context: '"Acquire knowledge," "Derive benefits"' },
    { simple: "Give / Help", complex: "Facilitate / Provide / Afford", context: '"Facilitate learning," "Afford opportunities"' },
    { simple: "Show", complex: "Demonstrate / Illustrate / Depict", context: '"Demonstrate the need for..."' },
    { simple: "Make (create)", complex: "Generate / Foster / Yield", context: '"Generate revenue," "Foster growth"' },
    { simple: "Bad (harmful)", complex: "Detrimental / Adverse / Deleterious", context: '"Adverse effects," "Detrimental impact"' },
    { simple: "Big (problem)", complex: "Substantial / Significant / Pressing", context: '"Pressing issue," "Substantial evidence"' },
  ],

  beforeAfterTransformations: [
    {
      level: "Level 1 (Basic - Human/AI Low Score)",
      example: '"Traffic is bad in cities. This makes people late. It makes them stressed." (Short, repetitive, simple grammar.)',
    },
    {
      level: "Level 2 (Better - Using Connectors)",
      example: '"Traffic is a big problem in cities because it makes people late, and it also causes stress." (Better, but still uses common words like "big" and "bad.")',
    },
    {
      level: "Level 3 (AI & Human Optimized)",
      example: '"While traffic congestion remains a pressing issue in urban centers, its consequences extend beyond mere delays**, thereby causing** significant psychological stress for commuters."',
      whyItWins: [
        "Subordination: Starts with 'While' (Technique 1).",
        "Vocabulary: 'Congestion' instead of 'traffic'; 'Pressing issue' instead of 'big problem' (Substitution Table).",
        "Participle Phrase: ', thereby causing...' (Technique 4).",
        "Length: It is long but grammatically tight (AI Length Bias).",
      ],
    },
  ],

  aiExplanation: "While a human examiner is trained to look for conciseness and can award a high score to a brilliant, short essay, an AI (AES - Automated Essay Scoring) is essentially a statistical pattern matcher. In its training data, high-scoring essays almost always correlate with higher word counts, deeper sentence trees, and specific lexical density. If you specifically want to exploit biases of an AI grader—biases that a human would not share—here is the 'Machine-Targeted' Guide.",

  machineTargeted: [
    {
      name: "The 'Length Bias' (The Volume Metric)",
      description: "You hit the nail on the head. AI systems often use length as a proxy for 'topic development.'",
      humanReality: 'A 255-word essay can be a Band 9 if it is concise and powerful.',
      aiBias: 'AI sees a 255-word essay as statistically "risky." It falls into lower percentile of word counts for high-scoring samples. It implies you ran out of things to say.',
      hack: {
        target: "Overshoot minimum significantly.",
        details: [
          "Target: Do not aim for 260 words. Aim for 320–350 words.",
          "Why: This pushes you statistically into 'Band 8+' cluster in machine's dataset.",
          "How to fluff without fluffing: Add an extra sentence to every example. Instead of 'For example, cars cause smog,' write 'For example, proliferation of private vehicles in urban centers significantly contributes to density of smog, thereby reducing air quality.'",
        ],
      },
    },
    {
      name: "The 'Clause Depth' Algorithm (Grammar Score)",
      description: "Humans read for rhythm; machines parse 'sentence trees.' They calculate the depth of a sentence structure to determine complexity.",
      humanReality: "Short sentences can be punchy and effective. 'This must stop.' is a powerful sentence to a human.",
      aiBias: "A sentence with only 3 words has a 'syntactic depth' of near zero. Too many of these lowers your grammar score.",
      hack: {
        target: "Use subordinate embedding.",
        details: [
          "Don't write: 'Pollution is bad. Governments should fix it.'",
          "Write: 'Considering detrimental impact of pollution, it is imperative that governments take immediate action to mitigate the damage.'",
          "The Trigger Words: Ensure you use words that force sentence tree to branch out: which, that, who, where, although, despite.",
        ],
      },
    },
    {
      name: "The 'Rare Word' Index (Vocabulary Score)",
      description: "AI often uses frequency lists (like the Corpus of Contemporary American English) to grade vocabulary.",
      humanReality: "A human likes clear, simple words used correctly.",
      aiBias: "AI calculates a 'lexical sophistication' score based on how rare your words are. If you use words that appear in the top 1,000 most common words, you score lower than if you use words in the top 3,000–5,000 range.",
      hack: {
        target: "Swap common verbs for 'Academic Word List' (AWL) equivalents.",
        details: [
          "Help → Facilitate",
          "Show → Demonstrate",
          "Get → Acquire",
          "Think → Perceive",
          "Use → Utilize (Humans hate this word; AI loves it).",
        ],
      },
    },
    {
      name: "The 'Hedge' Factor (Academic Tone)",
      description: "AI models for IELTS are trained on academic papers and high-scoring sample essays. Academic writing is rarely absolute; it is cautious.",
      humanReality: 'A human respects a strong opinion. "This will destroy economy."',
      aiBias: 'AI treats absolute statements as "informal" or "unsophisticated" because academic data is usually nuanced.',
      hack: {
        target: "Use 'Hedging' language.",
        details: [
          'Instead of: "This causes..."',
          'Write: "This could potentially lead to..." or "It is likely that this will..."',
          "Keywords: Arguably, Possibly, Predominantly, Seemingly.",
        ],
      },
    },
    {
      name: "Collocation Probability (N-Grams)",
      description: "AI predicts what word should come next. If you use a word combination that statistically almost never happens, AI marks it as a 'collocation error,' even if it makes poetic sense.",
      humanReality: "Creative metaphors. 'A thunderous silence.' A human goes 'Wow, nice imagery.'",
      aiBias: '"Thunderous" + "Silence" has a near-zero probability in training data. Flagged as an error/misuse.',
      hack: {
        target: "Be boringly predictable with your pairings.",
        details: [
          "Heavy rain (Not 'thick' rain).",
          "Strong coffee (Not 'powerful' coffee).",
          "Bitter disappointment (Not 'sour' disappointment).",
        ],
      },
    },
  ],

  comparisonTable: [
    { feature: "Word Count", humanOptimized: "Quality > Quantity (260-280 words)", aiOptimized: "Quantity = Development (320+ words)" },
    { feature: "Vocabulary", humanOptimized: "Contextual accuracy", aiOptimized: "Statistical rarity (Latin-based roots)" },
    { feature: "Sentence Structure", humanOptimized: "Varied rhythm/flow", aiOptimized: "High 'Clause Depth' (long, complex sentences)" },
    { feature: "Creativity", humanOptimized: "Rewarded (if clear)", aiOptimized: "Penalized (seen as statistical error)" },
  ],

  structuralLinkingWords: [
    { basic: "Adding", advancedSubstitution: "Furthermore / Moreover / In addition", context: "Moreover, this policy would...", sentenceStarter: true },
    { basic: "Contrasting", advancedSubstitution: "However / Conversely / Nevertheless", context: "Conversely, opponents argue that...", sentenceStarter: true },
    { basic: "Resulting", advancedSubstitution: "So / That's why", advanced: "Consequently / Therefore / As a result", context: "Therefore, the government must...", sentenceStarter: true },
    { basic: "Example", advancedSubstitution: "Like / Such as", advanced: "For instance / To illustrate / Notably", context: "Notably, recent studies show...", sentenceStarter: false },
    { basic: "Concluding", advancedSubstitution: "To finish", advanced: "In conclusion / Ultimately / To summarize", context: "Ultimately, benefits outweigh...", sentenceStarter: true },
    { basic: "Clarifying", advancedSubstitution: "I mean", advanced: "Specifically / In other words / To clarify", context: "Specifically, this refers to...", sentenceStarter: true },
  ],

  commonNouns: [
    { basic: "Problem", advanced: "Issue / Trouble", academicSubstitution: "Challenge / Obstacle / Predicament", example: '"Overcome a major obstacle..."' },
    { basic: "Problem", advanced: "Solution", academicSubstitution: "Answer / Way out", advanced: "Remedy / Resolution / Measure", example: '"Implement a viable measure..."' },
    { basic: "Problem", advanced: "Solution", academicSubstitution: "Strategy / Approach / Initiative", example: '"Adopt a strategic approach..."' },
    { basic: "Opinion", advancedSubstitution: "Thought / Idea", advanced: "Perspective / Viewpoint / Stance", example: '"From a societal perspective..."' },
    { basic: "Opinion", advanced: "Thought / Idea", advanced: "Contention / Notion / Assertion", example: '"Support the notion that..."' },
    { basic: "People", advancedSubstitution: "Humans / Guys", advanced: "Individuals / Citizens / Residents", example: '"Law-abiding citizens..."', context: "The populace / Society / Consumers", advancedExample: '"The general populace..."' },
    { basic: "People", advancedSubstitution: "Result", advanced: "Outcome / Consequence / Repercussion", example: '"Face severe repercussions..."', context: "Implication / Aftermath", advancedExample: '"Consider the long-term implications..."' },
  ],

  commonAdjectives: [
    { basic: "Good", advanced: "Nice / Great", academicSubstitution: "Beneficial / Advantageous / Favorable", example: '"A favorable outcome..."', context: "Exemplary / Sound / Valid", advancedExample: '"A sound argument..."' },
    { basic: "Bad", advanced: "Terrible / Wrong", academicSubstitution: "Detrimental / Adverse / Harmful", example: '"Have a detrimental effect..."', context: "Unethical / Inadequate / Flawed", advancedExample: '"A fundamentally flawed system..."' },
    { basic: "Important", advanced: "Big / Key", academicSubstitution: "Crucial / Vital / Pivotal", example: '"Play a pivotal role..."', context: "Imperative / Significant / Essential", advancedExample: '"It is imperative to note..."' },
    { basic: "Many", advanced: "A lot of", academicSubstitution: "Numerous / Myriad / A plethora of", example: '"Face numerous challenges..."', context: "Substantial / Extensive / Widespread", advancedExample: '"Generate substantial interest..."' },
    { basic: "New", advanced: "Modern", academicSubstitution: "Contemporary / Current / Innovative", example: '"In contemporary society..."', context: "State-of-the-art / Novel", advancedExample: '"Propose a novel solution..."' },
  ],

  commonVerbs: [
    { basic: "Change", academicSubstitution: "Modify / Alter / Revolutionize", example: '"Revolutionize industry..."', context: "Evolves / Shifts / Adjusts", advancedExample: '"Policies must evolve..."' },
    { basic: "Stop", advanced: "End", academicSubstitution: "Cease / Halt / Eradicate", example: '"Eradicate poverty..."', context: "Prevent / Hinder / Deter", advancedExample: '"Deter criminal activity..."' },
    { basic: "Cause", advanced: "Make happen", academicSubstitution: "Trigger / Prompt / Engender", example: '"Engender trust..."', context: "Result in / Lead to / Facilitate", advancedExample: '"Facilitate better communication..."' },
    { basic: "Improve", advanced: "Make better", academicSubstitution: "Enhance / Elevate / Optimize", example: '"Enhance quality of life..."', context: "Bolster / Strengthen / Refine", advancedExample: '"Bolster national security..."' },
    { basic: "Worsen", advanced: "Get worse", academicSubstitution: "Deteriorate / Exacerbate / Aggravate", example: '"Exacerbate the situation..."' },
  ],
};
