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

export const vocabularyTopics: VocabularyTopic[] = [
  {
    id: "technology",
    theme: "Is technology improving our lives or damaging them?",
    categories: [
      {
        name: "Progress",
        basicTerm: "Improvements",
        advancedNouns: ["Breakthrough", "Innovation", "Paradigm shift", "Automation"],
        advancedVerbs: ["Revolutionize", "Accelerate", "Facilitate", "Disrupt"],
        advancedAdjectives: ["Cutting-edge", "State-of-the-art", "Unprecedented", "Rapid"],
      },
      {
        name: "The Internet",
        basicTerm: "The Web, Virtual reality (VR) Artificial Intelligence (AI) Cybersecurity Digital footprint",
        advancedNouns: ["Artificial Intelligence (AI)", "Cybersecurity", "Digital footprint"],
        advancedVerbs: ["Navigate", "Connect", "Filter", "Process"],
        advancedAdjectives: ["Ubiquitous (everywhere)", "Interconnected", "Virtual", "Indispensable"],
      },
      {
        name: "Negatives",
        basicTerm: "Bad things",
        advancedNouns: ["Privacy breach", "Cybercrime", "Reliance", "Information overload"],
        advancedVerbs: ["Hack", "Compromise", "Isolate", "Distract"],
        advancedAdjectives: ["Intrusive", "Addictive", "Obsolete (outdated)", "Vulnerable"],
      },
    ],
  },
  {
    id: "environment",
    theme: "Who is responsible? Governments or individuals?",
    categories: [
      {
        name: "Damage",
        basicTerm: "Harm / Dirt",
        advancedNouns: ["Degradation", "Deforestation", "Pollutant", "Carbon footprint"],
        advancedVerbs: ["Contaminate", "Deplete", "Devastate", "Emit"],
        advancedAdjectives: ["Irreversible", "Catastrophic", "Hazardous", "Uninhabitable"],
      },
      {
        name: "Protection",
        basicTerm: "Saving nature",
        advancedNouns: ["Conservation", "Sustainability", "Renewable energy", "Biodiversity"],
        advancedVerbs: ["Preserve", "Mitigate (reduce harm)", "Rehabilitate", "Conserve"],
        advancedAdjectives: ["Eco-friendly", "Sustainable", "Biodegradable", "Viable"],
      },
      {
        name: "Causes",
        basicTerm: "Reasons",
        advancedNouns: ["Industrialization", "Urbanization", "Fossil fuels", "Consumerism"],
        advancedVerbs: ["Exacerbate (make worse)", "Trigger", "Stem from", "Accumulate"],
        advancedAdjectives: ["Anthropogenic (human-caused)", "Rampant", "Excessive"],
      },
    ],
  },
  {
    id: "education",
    theme: "Traditional schooling vs. practical skills vs. online learning.",
    categories: [
      {
        name: "Learning",
        basicTerm: "Studying",
        advancedNouns: ["Acquisition (of knowledge)", "Curriculum", "Pedagogy (teaching style)", "Literacy"],
        advancedVerbs: ["Instill", "Cultivate", "Nurture", "Equip"],
        advancedAdjectives: ["Holistic", "Rigorous", "Vocational", "Extracurricular"],
      },
      {
        name: "School",
        basicTerm: "Class",
        advancedNouns: ["Institution", "Tertiary education (Uni)", "Distance learning", "Discipline"],
        advancedVerbs: ["Enroll", "Assess", "Standardize", "Mentor"],
        advancedAdjectives: ["Compulsory", "Academic", "Interactive", "Theoretical"],
      },
      {
        name: "Students",
        basicTerm: "Kids",
        advancedNouns: ["Learner", "Adolescent", "Peer group", "Prodigy"],
        advancedVerbs: ["Excel", "Struggle", "Collaborate", "Drop out"],
        advancedAdjectives: ["Gifted", "Inquisitive", "Studious", "Motivated"],
      },
    ],
  },
  {
    id: "health",
    theme: "Public health funding, obesity, and mental health.",
    categories: [
      {
        name: "Sickness",
        basicTerm: "Illness",
        advancedNouns: ["Epidemic", "Obesity", "Chronic disease", "Mental health"],
        advancedVerbs: ["Diagnose", "Contract (catch)", "Deteriorate", "Afflict"],
        advancedAdjectives: ["Contagious", "Preventable", "Sedentary (inactive)", "Debilitating"],
      },
      {
        name: "Health",
        basicTerm: "Being fit",
        advancedNouns: ["Well-being", "Longevity", "Nutrition", "Immunity"],
        advancedVerbs: ["Promote", "Maintain", "Boost", "Exercise"],
        advancedAdjectives: ["Vigorous", "Nutritious", "Balanced", "Therapeutic"],
      },
      {
        name: "Medicine",
        basicTerm: "Doctors/Pills",
        advancedNouns: ["Healthcare system", "Pharmaceuticals", "Intervention", "Treatment"],
        advancedVerbs: ["Administer", "Prescribe", "Alleviate (ease)", "Cure"],
        advancedAdjectives: ["Innovative", "Accessible", "Preventative", "Clinical"],
      },
    ],
  },
  {
    id: "society",
    theme: "Punishment vs. Rehabilitation; Youth crime",
    categories: [
      {
        name: "Crime",
        basicTerm: "Bad acts",
        advancedNouns: ["Delinquency (youth crime)", "Offense", "Recidivism (re-offending)", "Deterrent"],
        advancedVerbs: ["Commit", "Violate", "Prosecute", "Offend"],
        advancedAdjectives: ["Heinous", "Illegal", "Petty (minor)", "Punitive"],
      },
      {
        name: "Punishment",
        basicTerm: "Jail",
        advancedNouns: ["Incarceration", "Rehabilitation", "Capital punishment", "Community service"],
        advancedVerbs: ["Imprison", "Reintegrate", "Sentence", "Penalize"],
        advancedAdjectives: ["Lenient", "Harsh", "Just", "Mandatory"],
      },
      {
        name: "Society",
        basicTerm: "People",
        advancedNouns: ["Demographics", "Infrastructure", "Inequality", "Globalization"],
        advancedVerbs: ["Segregate", "Assimilate", "Marginalize", "Thrive"],
        advancedAdjectives: ["Multicultural", "Affluent (rich)", "Deprived (poor)", "Egalitarian"],
      },
    ],
  },
  {
    id: "business",
    theme: "Work-life balance, remote work, globalization.",
    categories: [
      {
        name: "Jobs",
        basicTerm: "Work",
        advancedNouns: ["Employment", "Occupation", "Career path", "Prospects"],
        advancedVerbs: ["Pursue", "Undertake", "Specialize", "Resign"],
        advancedAdjectives: ["Lucrative (high paying)", "Monotonous", "Demanding", "Fulfilling"],
      },
      {
        name: "Business",
        basicTerm: "Companies",
        advancedNouns: ["Enterprise", "Entrepreneurship", "Globalization", "Revenue"],
        advancedVerbs: ["Operate", "Expand", "Monopolize", "Compete"],
        advancedAdjectives: ["Corporate", "Competitive", "Efficient", "Profitable"],
      },
      {
        name: "Workers",
        basicTerm: "Staff",
        advancedNouns: ["Workforce", "Personnel", "Colleague", "Productivity"],
        advancedVerbs: ["Collaborate", "Supervise", "Motivate", "Delegate"],
        advancedAdjectives: ["Skilled", "Diligent", "Competent", "Professional"],
      },
    ],
  },
];
