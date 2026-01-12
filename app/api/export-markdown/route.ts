import { NextRequest, NextResponse } from 'next/server';
import {
  assessmentCriteria,
  essayTypes,
  grammarStructures,
  punctuationRules,
  hedgingExpressions,
  advancedTechniques,
  strategies,
  timeManagement,
  commonPitfalls,
  bandComparisons,
  bandDifferenceSummary,
  bandDescriptions,
  exampleEssay,
  peelExplanation,
  aiOptimizedWriting,
  vocabularyTopics,
} from '@/lib/content';

export async function GET(req: NextRequest) {
  try {
    const markdown = generateMarkdown();
    
    return new NextResponse(markdown, {
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Content-Disposition': 'attachment; filename="IELTS-Band9-Guide.md"',
      },
    });
  } catch (error) {
    console.error('Markdown generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate markdown', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

function generateMarkdown(): string {
  let markdown = '';

  // Title
  markdown += '# IELTS Band 9.0 Writing Guide\n\n';
  markdown += '> The Ultimate Guide to Achieving Band 9 in IELTS Academic Writing Task 2\n\n';

  // Table of Contents
  markdown += '## Table of Contents\n\n';
  markdown += '| Section | Page |\n';
  markdown += '| --- | --- |\n';
  markdown += '| [Assessment Criteria](#assessment-criteria) | 3 |\n';
  markdown += '| [Essay Types](#essay-types) | 5 |\n';
  markdown += '| [Grammar](#grammar) | 19 |\n';
  markdown += '| [Advanced Techniques](#advanced-techniques) | 27 |\n';
  markdown += '| [Writing for AI Graders](#writing-for-ai-graders) | 35 |\n';
  markdown += '| [Topic-Based Vocabulary](#topic-based-vocabulary) | 42 |\n';
  markdown += '| [Band Comparison](#band-comparison) | 54 |\n';
  markdown += '| [Strategies](#strategies) | 58 |\n';
  markdown += '| [Example Essay](#example-essay) | 65 |\n';
  markdown += '| [Band 9.0 Checklist](#checklist) | 75 |\n\n';

  markdown += '---\n\n';

  // Introduction
  markdown += '## Introduction\n\n';
  markdown += 'This comprehensive guide covers everything you need to achieve Band 9.0 in IELTS Academic Writing Task 2.\n\n';
  markdown += 'From understanding assessment criteria to mastering advanced techniques and vocabulary, each section provides detailed explanations and examples.\n\n';
  markdown += 'Navigate through each topic to develop your writing skills systematically. The guide includes practical strategies, Band 9 examples, and comprehensive checklists.\n\n';
  markdown += '---\n\n';

  // Assessment Criteria
  markdown += generateAssessmentCriteriaMarkdown();
  markdown += '---\n\n';

  // Essay Types
  markdown += generateEssayTypesMarkdown();
  markdown += '---\n\n';

  // Grammar
  markdown += generateGrammarMarkdown();
  markdown += '---\n\n';

  // Advanced Techniques
  markdown += generateAdvancedTechniquesMarkdown();
  markdown += '---\n\n';

  // Writing for AI Graders
  markdown += generateAIWritingMarkdown();
  markdown += '---\n\n';

  // Topic-Based Vocabulary
  markdown += generateVocabularyTopicsMarkdown();
  markdown += '---\n\n';

  // Band Comparison
  markdown += generateBandComparisonMarkdown();
  markdown += '---\n\n';

  // Strategies
  markdown += generateStrategiesMarkdown();
  markdown += '---\n\n';

  // Example Essay
  markdown += generateExampleEssayMarkdown();
  markdown += '---\n\n';

  // Checklist
  markdown += generateChecklistMarkdown();

  return markdown;
}

function generateAssessmentCriteriaMarkdown(): string {
  let md = '## Assessment Criteria\n\n';
  md += 'Examiners score your essay based on four criteria, each worth 25% of your total score.\n\n';
  md += '### The 4 Assessment Criteria\n\n';
  md += '**1. Task Response (TR)** — How fully you answer to the task\n\n';
  md += '**2. Coherence & Cohesion (CC)** — How well your ideas flow\n\n';
  md += '**3. Lexical Resource (LR)** — Your vocabulary range and accuracy\n\n';
  md += '**4. Grammar (GRA)** — Your grammatical range and accuracy\n\n';
  
  assessmentCriteria.forEach((criterion) => {
    md += `### ${criterion.name}\n\n`;
    md += `${criterion.band9Description}\n\n`;
    
    md += '#### Key Requirements for Band 9\n\n';
    criterion.keyRequirements.forEach((req) => {
      md += `- ${req}\n`;
    });
    
    md += '#### Band Comparison\n\n';
    criterion.bandComparison.forEach((row) => {
      md += `| **${row.aspect}** | **Band 7** | **Band 8** | **Band 9** |\n`;
      md += `| ${row.band7} | ${row.band8} | ${row.band9} |\n`;
    });
    
    md += '#### Key Techniques\n\n';
    criterion.techniques.forEach((technique) => {
      md += `**${technique.name}**\n\n`;
      md += `${technique.description}\n\n`;
      technique.examples.forEach((example) => {
        md += `- ${example}\n`;
      });
    });
    
    md += '#### Common Pitfalls to Avoid\n\n';
    criterion.commonPitfalls.forEach((pitfall) => {
      md += `- ✗ ${pitfall}\n`;
    });
    
    md += '---\n\n';
  });
  
  return md;
}

function generateEssayTypesMarkdown(): string {
  let md = '## Essay Types\n\n';
  md += 'Master the 6 different IELTS essay types. Each requires a specific approach and structure.\n\n';
  md += '### The 6 Essay Types\n\n';

  essayTypes.forEach((type) => {
    md += `### ${type.title}\n\n`;
    md += `${type.description}\n\n`;

    if (type.structure) {
      md += '#### Essay Structure\n\n';

      // Structure is an object with introduction, bodyParagraph1, bodyParagraph2, conclusion
      const sections = ['introduction', 'bodyParagraph1', 'bodyParagraph2', 'conclusion'];
      sections.forEach((sectionKey) => {
        const section = type.structure[sectionKey];
        if (section) {
          md += `**${section.title}** (${section.wordCount})\n\n`;
          if (section.elements && section.elements.length > 0) {
            section.elements.forEach((element) => {
              md += `- ${element}\n`;
            });
            md += '\n';
          }
          if (section.example) {
            md += `*Example: ${section.example}*\n\n`;
          }
        }
      });

      if (type.structure.wordCountGuidelines) {
        md += `**Word Count Guidelines:** ${type.structure.wordCountGuidelines}\n\n`;
      }
    }

    if (type.questionExamples && type.questionExamples.length > 0) {
      md += '#### Question Examples\n\n';
      type.questionExamples.forEach((example) => {
        md += `- ${example}\n`;
      });
      md += '\n';
    }

    if (type.tips && type.tips.length > 0) {
      md += '#### Band 9 Tips\n\n';
      type.tips.forEach((tip) => {
        md += `- ${tip}\n`;
      });
      md += '\n';
    }

    if (type.advancedTips && type.advancedTips.length > 0) {
      md += '#### Advanced Tips\n\n';
      type.advancedTips.forEach((tip) => {
        md += `- ${tip}\n`;
      });
      md += '\n';
    }

    if (type.commonMistakes && type.commonMistakes.length > 0) {
      md += '#### Common Mistakes to Avoid\n\n';
      type.commonMistakes.forEach((mistake) => {
        md += `- ✗ ${mistake}\n`;
      });
      md += '\n';
    }

    if (type.vocabulary && type.vocabulary.length > 0) {
      md += '#### Useful Vocabulary\n\n';
      type.vocabulary.forEach((vocabCategory) => {
        md += `**${vocabCategory.category}:**\n\n`;
        vocabCategory.words.forEach((word) => {
          md += `- **${word.term}** — ${word.context}\n`;
        });
        md += '\n';
      });
    }

    md += '---\n\n';
  });

  return md;
}

function generateGrammarMarkdown(): string {
  let md = '## Grammar\n\n';
  md += 'Advanced grammatical structures are essential for achieving Band 9. Use complex sentences strategically while maintaining accuracy.\n\n';
  md += '### Key Grammar Structures\n\n';
  
  grammarStructures.forEach((structure) => {
    md += `#### ${structure.name}\n\n`;
    md += `${structure.description}\n\n`;
    md += `**Function:** ${structure.function}\n\n`;
    
    if (structure.examples && structure.examples.length > 0) {
      md += '**Examples:**\n\n';
      structure.examples.forEach((example) => {
        md += `- **Standard:** ${example.standard}\n`;
        md += `  **Advanced:** ${example.advanced}\n`;
        md += `  **Technique:** ${example.technique}\n\n`;
      });
    }
    
    md += '---\n\n';
  });
  
  // Punctuation Rules
  md += '### Punctuation Rules\n\n';
  Object.entries(punctuationRules).forEach(([key, rule]) => {
    md += `#### ${key.charAt(0).toUpperCase() + key.slice(1)}\n\n`;
    md += `${rule.description}\n\n`;
    md += '**Examples:**\n\n';
    rule.examples.forEach((example) => {
      md += `- ${example}\n`;
    });
    md += '---\n\n';
  });
  
  // Hedging Expressions
  md += '### Hedging Expressions\n\n';
  Object.entries(hedgingExpressions).forEach(([key, category]) => {
    md += `#### ${key.charAt(0).toUpperCase() + key.slice(1)}\n\n`;
    md += `${category.description}\n\n`;
    md += '**Examples:**\n\n';
    category.examples.forEach((example) => {
      md += `- ${example}\n`;
    });
    md += '---\n\n';
  });
  
  return md;
}

function generateAdvancedTechniquesMarkdown(): string {
  let md = '## Advanced Techniques\n\n';
  md += 'Move beyond basic writing with sophisticated techniques that distinguish Band 9 writing.\n\n';

  advancedTechniques.forEach((technique) => {
    md += `### ${technique.name}\n\n`;
    md += `${technique.description}\n\n`;

    if (technique.whyItMatters) {
      md += '**Why It Matters:**\n\n';
      md += `${technique.whyItMatters}\n\n`;
    }

    if (technique.examples && technique.examples.length > 0) {
      md += '**Examples:**\n\n';
      technique.examples.forEach((example) => {
        md += `**Poor:** ${example.poor}\n\n`;
        md += `**Excellent:** ${example.excellent}\n\n`;
        if (example.explanation) {
          md += `*${example.explanation}*\n\n`;
        }
      });
    }

    if (technique.commonMistakes && technique.commonMistakes.length > 0) {
      md += '**Common Mistakes:**\n\n';
      technique.commonMistakes.forEach((mistake) => {
        md += `- ✗ ${mistake}\n`;
      });
      md += '\n';
    }

    md += '---\n\n';
  });

  return md;
}

function generateAIWritingMarkdown(): string {
  let md = '## Writing for AI Graders\n\n';
  md += 'Optimize your essays for automated scoring while maintaining human readability.\n\n';
  md += aiOptimizedWriting.introduction;
  md += '\n\n---\n\n';
  
  // Sentence Expander
  md += '### The "Sentence Expander" Checklist\n\n';
  md += 'Use this checklist to audit your sentences. If you have too many short sentences (S-V-O), apply one of these fixes.\n\n';
  
  aiOptimizedWriting.sentenceExpander.forEach((technique) => {
    md += `#### ${technique.name}\n\n`;
    md += `${technique.description}\n\n`;
    md += `**Checklist Item:** ${technique.checkItem}\n\n`;
    
    if (technique.swaps && technique.swaps.length > 0) {
      md += '**Examples:**\n\n';
      technique.swaps.forEach((swap) => {
        md += `- **Instead of:** ${swap.instead}\n`;
        md += `  **Use:** ${swap.use}\n`;
        md += `  **Result:** ${swap.result}\n`;
        md += `  **AI Benefit:** ${swap.aiBenefit}\n\n`;
      });
    }
    
    md += '---\n\n';
  });
  
  // Machine-Targeted
  md += '### The "Machine-Targeted" Guide\n\n';
  md += `${aiOptimizedWriting.aiExplanation}\n\n`;
  md += '---\n\n';
  
  aiOptimizedWriting.machineTargeted.forEach((item) => {
    md += `#### ${item.name}\n\n`;
    md += `${item.description}\n\n`;
    md += `**Human Reality:** ${item.humanReality}\n\n`;
    md += `**AI Bias:** ${item.aiBias}\n\n`;
    md += `**The Hack:** ${item.hack.target}\n\n`;
    item.hack.details.forEach((detail) => {
      md += `- ${detail}\n`;
    });
    md += '---\n\n';
  });
  
  // Comparison Table
  md += '### Human vs. AI Optimization\n\n';
  md += '| Feature | Human-Optimized | AI-Optimized |\n';
  aiOptimizedWriting.comparisonTable.forEach((row) => {
    md += `| ${row.feature} | ${row.humanOptimized} | ${row.aiOptimized} |\n`;
  });
  md += '\n\n';
  
  // Vocabulary Substitution Tables
  md += '### Vocabulary Substitution Tables\n\n';
  md += 'To score high, you need words that are "low frequency" (rare) but "high utility" (academic).\n\n';
  
  // Structural Linking Words
  md += '#### Structural Linking Words\n\n';
  md += '| Function | Advanced Substitution (Use) | Context |\n';
  aiOptimizedWriting.structuralLinkingWords.forEach((item) => {
    md += `| ${item.basic} | ${item.advancedSubstitution} | ${item.context} |\n`;
  });
  md += '\n\n';

  // Common Nouns
  md += '#### Common Nouns\n\n';
  md += '| Basic Word | Academic Substitution | Example |\n';
  aiOptimizedWriting.commonNouns.forEach((noun) => {
    md += `| ${noun.basic} | ${noun.academicSubstitution} | ${noun.example} |\n`;
    if (noun.context && noun.advancedExample) {
      md += `| ${noun.context} | ${noun.advanced} | ${noun.advancedExample} |\n`;
    }
  });
  md += '\n\n';

  // Common Adjectives
  md += '#### Common Adjectives\n\n';
  md += '| Basic Word | Academic Substitution | Example |\n';
  aiOptimizedWriting.commonAdjectives.forEach((adj) => {
    md += `| ${adj.basic} | ${adj.academicSubstitution} | ${adj.example} |\n`;
    if (adj.context && adj.advancedExample) {
      md += `| ${adj.context} | ${adj.advanced} | ${adj.advancedExample} |\n`;
    }
  });
  md += '\n\n';

  // Common Verbs
  md += '#### Common Verbs\n\n';
  md += '| Basic Word | Academic Substitution | Example |\n';
  aiOptimizedWriting.commonVerbs.forEach((verb) => {
    md += `| ${verb.basic} | ${verb.academicSubstitution} | ${verb.example} |\n`;
    if (verb.context && verb.advancedExample) {
      md += `| ${verb.context} | ${verb.advanced} | ${verb.advancedExample} |\n`;
    }
  });
  md += '\n\n';

  return md;
}

function generateVocabularyTopicsMarkdown(): string {
  let md = '## Topic-Based Vocabulary\n\n';
  md += 'Advanced vocabulary organized by IELTS essay topics to elevate your writing.\n\n';
  
  vocabularyTopics.forEach((topic) => {
    md += `### ${topic.id.charAt(0).toUpperCase() + topic.id.slice(1)}: ${topic.theme}\n\n`;
    md += '---\n\n';
    
    topic.categories.forEach((category) => {
      md += `#### ${category.name}\n\n`;
      md += `**Basic Term (Avoid):** ${category.basicTerm}\n\n`;
      
      if (category.advancedNouns && category.advancedNouns.length > 0) {
        md += '**Advanced Nouns:**\n\n';
        const nouns = category.advancedNouns.map((n) => `[${n}]`).join(', ');
        md += `${nouns}\n\n`;
      }
      
      if (category.advancedVerbs && category.advancedVerbs.length > 0) {
        md += '**Advanced Verbs:**\n\n';
        const verbs = category.advancedVerbs.map((v) => `[${v}]`).join(', ');
        md += `${verbs}\n\n`;
      }
      
      if (category.advancedAdjectives && category.advancedAdjectives.length > 0) {
        md += '**Advanced Adjectives:**\n\n';
        const adjs = category.advancedAdjectives.map((a) => `[${a}]`).join(', ');
        md += `${adjs}\n\n`;
      }
      
      md += '---\n\n';
    });
    
    md += '---\n\n';
  });
  
  return md;
}

function generateBandComparisonMarkdown(): string {
  let md = '## Band Comparison\n\n';
  md += 'Understanding the differences between Band 7, 8, and 9 helps you target the right level.\n\n';
  
  // Main Comparison Table
  md += '### Feature Comparison\n\n';
  md += '| Feature | Band 7 | Band 8 | Band 9 |\n';
  bandComparisons.forEach((comp) => {
    md += `| ${comp.criterion}: ${comp.feature} | ${comp.band7} | ${comp.band8} | ${comp.band9} |\n`;
  });
  md += '\n\n';
  
  // Band Descriptions
  md += '### Band Descriptions\n\n';
  Object.entries(bandDescriptions).forEach(([band, desc]) => {
    md += `#### ${desc.name}\n\n`;
    md += `${desc.description}\n\n`;
    md += '**Characteristics:**\n\n';
    desc.characteristics.forEach((char) => {
      md += `- ${char}\n`;
    });
    md += '---\n\n';
  });
  
  // Difference Summary
  md += '### Key Differences Between Bands\n\n';
  Object.entries(bandDifferenceSummary).forEach(([key, summary]) => {
    if (typeof summary === 'object' && summary !== null) {
      Object.entries(summary).forEach(([band, diff]) => {
        md += `#### From ${parseInt(key) + 1} to ${parseInt(key) + 2}: ${diff}\n\n`;
      });
    }
  });
  
  return md;
}

function generateStrategiesMarkdown(): string {
  let md = '## Proven Strategies\n\n';
  md += 'Effective methods for IELTS Writing Task 2 success.\n\n';
  
  strategies.forEach((strategy) => {
    md += `### ${strategy.name}\n\n`;
    md += `${strategy.description}\n\n`;
    
    md += '#### How It Works\n\n';
    strategy.steps.forEach((step, index) => {
      md += `${index + 1}. **${step.title}**\n`;
      md += `${step.description}\n\n`;
      
      if (step.questions && step.questions.length > 0) {
        md += 'Questions to ask:\n';
        step.questions.forEach((question) => {
          md += `- "${question}"\n`;
        });
      }
      
      md += '\n';
    });
    
    if (strategy.examples && strategy.examples.length > 0) {
      md += '#### Examples\n\n';
      strategy.examples.forEach((example) => {
        md += `**Original:** ${example.original}\n\n`;
        md += `**Transformed:** ${example.transformed}\n\n`;
        md += `**Explanation:** ${example.explanation}\n\n`;
      });
    }
    
    md += '---\n\n';
  });
  
  // Time Management
  md += '### The 40-Minute Protocol\n\n';
  md += `**Total Time:** ${timeManagement.total} minutes\n\n`;
  md += '#### Time Breakdown\n\n';
  
  Object.entries(timeManagement.breakdown).forEach(([phase, data]) => {
    md += `**${phase.charAt(0).toUpperCase() + phase.slice(1)}** (${data.minutes} min)\n\n`;
    md += 'Activities:\n';
    data.activities.forEach((activity) => {
      md += `- ${activity}\n`;
    });
    md += '\n';
  });
  
  md += `**Target Word Count:** ${timeManagement.wordCountTarget}\n\n`;
  md += `**Word Count Minimum:** ${timeManagement.wordCountMinimum}\n\n`;
  md += `**Warning:** ${timeManagement.wordCountWarning}\n\n`;
  md += '\n\n---\n\n';
  
  // Common Pitfalls
  md += '### Common Pitfalls to Avoid\n\n';
  commonPitfalls.forEach((category) => {
    md += `#### ${category.category}\n\n`;
    category.pitfalls.forEach((pitfall) => {
      md += `**Mistake:** ${pitfall.mistake}\n`;
      md += `**Fix:** ${pitfall.fix}\n`;
    });
  });
  
  return md;
}

function generateExampleEssayMarkdown(): string {
  let md = '## Band 9.0 Example Essay\n\n';
  md += 'Study a complete Band 9 essay with P-E-E-L breakdown, scoring analysis, and annotations.\n\n';
  
  // Prompt
  md += '### Essay Prompt\n\n';
  md += `> ${exampleEssay.prompt}\n\n`;
  
  // Essay
  md += '### Complete Essay\n\n';
  exampleEssay.essay.split('\n\n').forEach((paragraph) => {
    md += `${paragraph}\n\n`;
  });
  
  // P-E-E-L Breakdown
  md += '### P-E-E-L Structure Breakdown\n\n';
  md += 'Each paragraph follows Point-Explanation-Example-Link structure for clear, logical argumentation.\n\n';

  const sectionNames = ['Introduction', 'Body Paragraph 1', 'Body Paragraph 2', 'Conclusion'];
  const sections = [
    exampleEssay.breakdown.introduction,
    exampleEssay.breakdown.bodyParagraph1,
    exampleEssay.breakdown.bodyParagraph2,
    exampleEssay.breakdown.conclusion,
  ];

  sections.forEach((section, index) => {
    md += `#### ${sectionNames[index]}\n\n`;
    md += `${section.text}\n\n`;
    if (section.point) md += `**Point:** ${section.point}\n\n`;
    if (section.explanation) md += `**Explanation:** ${section.explanation}\n\n`;
    if (section.example) md += `**Example:** ${section.example}\n\n`;
    if (section.link) md += `**Link:** ${section.link}\n\n`;
    md += '---\n\n';
  });
  
  // P-E-E-L Explanation
  md += '### Understanding P-E-E-L\n\n';
  Object.values(peelExplanation).forEach((peel) => {
    md += `#### ${peel.letter}: ${peel.name}\n\n`;
    md += `${peel.description}\n\n`;
    md += '**Tips:**\n\n';
    peel.tips.forEach((tip) => {
      md += `- ${tip}\n`;
    });
    md += '---\n\n';
  });
  
  // Scoring Analysis
  md += '### Scoring Analysis\n\n';
  Object.entries(exampleEssay.scoringAnalysis).forEach(([criterion, analysis]) => {
    md += `#### ${criterion.charAt(0).toUpperCase() + criterion.slice(1)}\n\n`;
    md += `${analysis}\n\n`;
  });
  
  // Key Expressions
  md += '### Key Expressions Used\n\n';
  md += '| Expression | Translation |\n';
  exampleEssay.expressions.forEach((item) => {
    md += `| "${item.expression}" | ${item.translation} |\n`;
  });
  md += '\n\n';
  
  // Native Features
  md += '### What Makes This "Native-Like"\n\n';
  exampleEssay.nativeFeatures.forEach((feature) => {
    md += `- ${feature}\n`;
  });
  
  md += '\n\n---\n\n';
  
  return md;
}

function generateChecklistMarkdown(): string {
  let md = '## Band 9.0 Final Checklist\n\n';
  md += 'Use this checklist before submitting your essay to ensure you meet all Band 9 requirements.\n\n';
  
  // Note: In actual checklist page, there are multiple categories
  // Task Response, Coherence & Cohesion, Lexical Resource, Grammar
  // Plus Final Reminders section
  
  md += '### Task Response Checklist\n\n';
  md += '- [ ] I have identified and addressed ALL micro-keywords in the prompt (adjectives, adverbs, plurals)\n';
  md += '- [ ] My position is clearly stated in the introduction and consistently maintained throughout\n';
  md += '- [ ] Each main idea is fully extended using the "Why" chain\n';
  md += '- [ ] All arguments are supported with specific, relevant examples\n';
  md += '- [ ] I have used dialectical reasoning (acknowledged counter-arguments where appropriate)\n';
  md += '- [ ] My word count is between 270-290 words (above 250 minimum)\n';
  md += '\n\n';
  
  md += '### Coherence & Cohesion Checklist\n\n';
  md += '- [ ] I have avoided overusing mechanical linkers (Firstly, Moreover, etc.)\n';
  md += '- [ ] I use "This + summary noun" patterns for referencing\n';
  md += '- [ ] Each paragraph has ONE clear central idea with a conceptual topic sentence\n';
  md += '- [ ] My paragraphs are linked by ideas, not just sequencers\n';
  md += '- [ ] I use lexical chaining (synonyms) instead of repeating words\n';
  md += '- [ ] My essay has 4 clearly structured paragraphs\n';
  md += '\n\n';
  
  md += '### Lexical Resource Checklist\n\n';
  md += '- [ ] I use precise vocabulary appropriate to specific context\n';
  md += '- [ ] I use natural collocations (words that belong together)\n';
  md += '- [ ] I have used nominalization to increase academic density\n';
  md += '- [ ] My register is consistently formal (no slang, contractions, or conversational fillers)\n';
  md += '- [ ] I include topic-specific vocabulary relevant to the question\n';
  md += '- [ ] No "big words" used incorrectly — I prioritize precision over complexity\n';
  md += '\n\n';
  
  md += '### Grammatical Range and Accuracy Checklist\n\n';
  md += '- [ ] I have used a variety of complex sentence structures\n';
  md += '- [ ] I use passive voice appropriately to shift focus\n';
  md += '- [ ] I have included conditional sentences for hypothetical scenarios\n';
  md += '- [ ] I use hedging (may, might, could) for nuanced expression\n';
  md += '- [ ] My punctuation is correct throughout (semicolons, colons, dashes used appropriately)\n';
  md += '- [ ] There are no systematic errors — only rare "slips" allowed\n';
  md += '\n\n';
  
  md += '### Final Reminders\n\n';
  md += '### Planning (5 minutes)\n';
  md += '- Plan for 5 minutes — this is NOT wasted time, it ensures you answer the task fully\n';
  md += '### Writing (30 minutes)\n';
  md += '- Write your essay focusing on flow and accuracy. Don\'t stop to perfect every sentence.\n';
  md += '### Review (5 minutes)\n';
  md += '- Leave 5 minutes at the end to review for errors and check word count\n';
  md += '- The sweet spot is 270-290 words — enough depth without risking errors or irrelevance\n';
  md += '- Use examples strategically — they should support arguments, introduce vocabulary, and create mental anchors\n';
  md += '- Write naturally — memorized templates are obvious to examiners and limit your score\n';
  
  return md;
}
