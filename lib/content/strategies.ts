import type { Strategy } from "@/types/content";

export const strategies: Strategy[] = [
  {
    id: "three-questions-per-paragraph",
    name: "The 3 Questions Per Paragraph Method",
    description: "A simple method that turns basic arguments into deep, cohesive analysis by asking yourself three questions for every body paragraph.",
    steps: [
      {
        title: "Question 1: So What?",
        description: "For every main point you write, ask: Why does this matter — to society, individuals, the world?",
      },
      {
        title: "Question 2: Compared to What?",
        description: "Is this better or worse than an alternative? What are you comparing this to?",
      },
      {
        title: "Question 3: What If...?",
        description: "What would happen if this trend continued — or reversed? Explore hypothetical scenarios.",
      },
    ],
    examples: [
      {
        original: "Many people work remotely today.",
        transformed: "The proliferation of remote work has fundamentally transformed the modern employment landscape. This shift matters because it redefines the concept of workplace itself, challenging traditional notions of productivity and professional identity. Unlike office-based employment, remote arrangements offer unparalleled flexibility but can lead to isolation. If this trend accelerates, entire commercial real estate sectors may face obsolescence, while urban planning would need to prioritize community spaces over business districts.",
        explanation: "The transformed paragraph applies all three questions: Why it matters (redefines workplace), Compared to what (vs office-based), What if (real estate impact, urban planning).",
      },
    ],
  },
  {
    id: "one-example-three-purposes",
    name: "1 Example = 3 Purposes Strategy",
    description: "Most candidates throw in examples just to illustrate. A smart example can do three things at once: support your argument, introduce advanced vocabulary, and create a mental anchor.",
    steps: [
      {
        title: "Purpose 1: Support Your Argument",
        description: "The example must directly support and validate your main point.",
      },
      {
        title: "Purpose 2: Introduce Advanced Vocabulary",
        description: "Embed sophisticated, topic-specific vocabulary naturally within the example.",
      },
      {
        title: "Purpose 3: Create a Mental Anchor",
        description: "Make the example specific and memorable so it sticks in the examiner's mind.",
      },
    ],
    examples: [
      {
        original: "Many people now work in the gig economy. This is bad because the jobs are not secure.",
        transformed: "The rise of gig economy platforms such as Uber or Fiverr exemplifies how employment is becoming increasingly precarious and transactional, especially in urban centres. This shift towards freelance work, while offering flexibility, often leaves workers without benefits or job security — factors that can lead to financial instability and reduced quality of life.",
        explanation: "This single example accomplishes: (1) supports the argument about insecure work, (2) introduces 'gig economy', 'precarious', 'transactional', and (3) creates a memorable anchor with specific platform names.",
      },
    ],
  },
  {
    id: "the-friends-technique",
    name: "The Friends Technique",
    description: "Struggling to generate 'academic' ideas? Imagine explaining your answer to a friend in a café, then translate those simple, honest ideas into academic language.",
    steps: [
      {
        title: "Step 1: The Casual Conversation",
        description: "Imagine a friend asks you the question. What would you naturally say? Be honest and simple.",
      },
      {
        title: "Step 2: Identify Key Concepts",
        description: "Extract the core ideas from your casual explanation.",
      },
      {
        title: "Step 3: Academic Translation",
        description: "Transform simple concepts into sophisticated academic language.",
      },
    ],
    examples: [
      {
        original: "Why is traffic so bad? Well, there are too many cars and the buses are terrible.",
        transformed: "Two primary factors contribute to urban traffic congestion: the proliferation of private vehicles and the inadequacy of public transportation infrastructure. The former results from increased car ownership, while the latter stems from underinvestment in reliable, efficient transit systems.",
        explanation: "Simple 'too many cars' becomes 'proliferation of private vehicles'; 'buses are terrible' becomes 'inadequacy of public transportation infrastructure'.",
      },
      {
        original: "Kids these days are always on their phones. It's bad because they don't talk to people.",
        transformed: "Contemporary adolescents spend unprecedented amounts of time engaged with digital devices, a trend that carries significant implications for their social development. Excessive screen time may impede the acquisition of essential interpersonal skills and limit face-to-face social interactions.",
        explanation: "'Kids on phones' becomes 'adolescents engaged with digital devices'; 'don't talk to people' becomes 'impede acquisition of interpersonal skills'.",
      },
    ],
  },
  {
    id: "the-40-minute-protocol",
    name: "The 40-Minute Protocol",
    description: "Effective time management is crucial. This protocol divides your 40 minutes strategically for maximum efficiency.",
    steps: [
      {
        title: "Minutes 0-5: Planning",
        description: "Analyze the prompt, identify micro-keywords, generate ideas, outline structure. This is NOT wasted time.",
        questions: [
          "What are the topic words, micro-keywords, and instruction words?",
          "What essay type is this?",
          "What is my position?",
          "What two main points will I discuss?",
        ],
      },
      {
        title: "Minutes 5-35: Writing",
        description: "Draft the essay focusing on flow and accuracy. Don't stop to perfect every sentence.",
      },
      {
        title: "Minutes 35-40: Review",
        description: "Check for specific errors, verify word count, ensure all task parts are addressed.",
        questions: [
          "Did I answer ALL parts of the task?",
          "Is my position clear throughout?",
          "Are there any grammatical or spelling errors?",
          "Is my word count between 270-290?",
        ],
      },
    ],
    examples: [
      {
        original: "Jumping straight into writing without planning.",
        transformed: "Taking 5 full minutes to analyze the prompt: 'Computers are becoming increasingly essential in primary education.' Micro-keywords identified: 'increasingly' (trajectory), 'primary' (specific level), 'essential' (absolute claim). Essay type: Opinion. Position: Qualified agreement. BP1: Benefits for young learners; BP2: Concerns about screen time and social development.",
        explanation: "This planning ensures the essay stays focused on PRIMARY (not all) education and addresses the 'increasingly' trajectory.",
      },
    ],
  },
  {
    id: "micro-keyword-analysis",
    name: "Micro-Keyword Analysis",
    description: "Prompts often contain limiting adjectives or adverbs that fundamentally alter the scope. Missing these caps your Task Response score.",
    steps: [
      {
        title: "Step 1: Circle All Modifiers",
        description: "Identify adjectives, adverbs, and plurals in the prompt.",
      },
      {
        title: "Step 2: Determine Their Impact",
        description: "What does each modifier do to restrict or shape the topic?",
      },
      {
        title: "Step 3: Address Each One",
        description: "Ensure your response specifically addresses these restrictions.",
      },
    ],
    examples: [
      {
        original: "Prompt: 'Computers are becoming essential in education.' Writing generally about computers in schools and universities.",
        transformed: "Prompt: 'Computers are becoming INCREASINGLY essential in PRIMARY education.' Response focuses specifically on: (1) the TRAJECTORY ('increasingly'), comparing past to present and projecting future trends; (2) PRIMARY level specifically, contrasting with secondary/tertiary where appropriate; (3) what 'essential' means — indispensable tools vs. supplementary aids.",
        explanation: "The Band 9 response addresses all micro-keywords. The Band 7 response writes about education generally, missing the specific restrictions.",
      },
      {
        original: "Prompt: 'Some people think that UNPAID community service should be COMPULSORY in HIGH SCHOOL.'",
        transformed: "Micro-keywords analysis: 'UNPAID' — excluding paid internships or work-study programs; 'COMPULSORY' — mandatory vs. voluntary; 'HIGH SCHOOL' — specifically ages 14-18, not university or elementary. The essay must address whether it should be MANDATORY, not merely beneficial, and must focus on high schoolers specifically.",
        explanation: "A Band 7 essay might discuss community service benefits generally. A Band 9 essay grapples with the compulsory aspect and the specific age group.",
      },
    ],
  },
];

export const timeManagement = {
  total: 40,
  breakdown: {
    planning: {
      minutes: 5,
      activities: [
        "Read prompt carefully",
        "Identify micro-keywords",
        "Determine essay type",
        "Generate ideas",
        "Plan structure",
      ],
    },
    writing: {
      minutes: 30,
      activities: [
        "Write introduction (5 min)",
        "Write body paragraph 1 (10 min)",
        "Write body paragraph 2 (10 min)",
        "Write conclusion (5 min)",
      ],
    },
    review: {
      minutes: 5,
      activities: [
        "Check all parts addressed",
        "Verify position is clear",
        "Check for errors",
        "Verify word count",
      ],
    },
  },
  wordCountTarget: "270-290 words",
  wordCountMinimum: "250 words (penalty below this)",
  wordCountWarning: "Over 300 words may introduce errors and waste time",
};

export const commonPitfalls = [
  {
    category: "Task Response",
    pitfalls: [
      {
        mistake: "Memorized templates",
        fix: "Use natural academic introductions. Avoid 'Since the dawn of time', 'Every coin has two sides', 'This is a hot topic'.",
      },
      {
        mistake: "Missing micro-keywords",
        fix: "Circle all adjectives, adverbs, and plurals. Ensure your response addresses these specific restrictions.",
      },
      {
        mistake: "No clear position",
        fix: "State your position clearly in the introduction and maintain it throughout.",
      },
      {
        mistake: "Under-developed ideas",
        fix: "Use the 'Why' chain. Keep asking 'why' to extend ideas to their logical conclusion.",
      },
    ],
  },
  {
    category: "Coherence & Cohesion",
    pitfalls: [
      {
        mistake: "Mechanical linking words",
        fix: "Reduce 'Firstly, Moreover, In conclusion'. Use referencing and thematic progression instead.",
      },
      {
        mistake: "No paragraph unity",
        fix: "Each paragraph should have ONE central idea with a conceptual topic sentence.",
      },
      {
        mistake: "Abrupt paragraph transitions",
        fix: "Use idea linking. Reference BP1 content in BP2 (e.g., 'In addition to...').",
      },
    ],
  },
  {
    category: "Lexical Resource",
    pitfalls: [
      {
        mistake: "Using 'big words' incorrectly",
        fix: "Prioritize precision over complexity. Use the word that best fits the context.",
      },
      {
        mistake: "Collocation errors",
        fix: "Learn word combinations that belong together. 'Commit a crime', not 'do a crime'.",
      },
      {
        mistake: "Informal register",
        fix: "Eliminate contractions, slang, and conversational fillers (actually, literally, sort of).",
      },
    ],
  },
  {
    category: "Grammar",
    pitfalls: [
      {
        mistake: "Using complex structures incorrectly",
        fix: "Only use structures you can control. Simple and correct is better than complex and wrong.",
      },
      {
        mistake: "Subject-verb agreement errors",
        fix: "Always check that your subject and verb agree.",
      },
      {
        mistake: "Article errors (a/an/the)",
        fix: "Review definite vs. indefinite article rules. Countable vs. uncountable nouns.",
      },
    ],
  },
];
