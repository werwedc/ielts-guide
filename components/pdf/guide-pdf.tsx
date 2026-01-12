import { Document, Page, View, Text, Font } from '@react-pdf/renderer';
import { styles, PDF_COLORS, PDF_SPACING } from '../../lib/pdf-generator/styles';

// Register standard font
Font.register({
  family: 'Helvetica',
});

export function PDFDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>IELTS Band 9.0 Writing Guide</Text>
            <Text style={{ fontSize: 14, color: PDF_COLORS.primary, marginTop: 5 }}>
              The Ultimate Guide to Achieving Band 9
            </Text>
          </View>
          <View>
            <Text style={styles.badge}>Band 9.0</Text>
          </View>
        </View>

        {/* Table of Contents */}
        <View style={{ marginTop: 40 }}>
          <Text style={styles.tocHeader}>Table of Contents</Text>
          <View style={styles.separator} />
          <View style={{ marginTop: 15 }}>
            <View style={styles.tocEntry}>
              <Text style={styles.tocTitle}>Assessment Criteria</Text>
              <Text style={styles.tocPageNumber}>3</Text>
            </View>
            <View style={styles.tocEntry}>
              <Text style={styles.tocTitle}>Essay Types</Text>
              <Text style={styles.tocPageNumber}>5</Text>
            </View>
            <View style={styles.tocEntry}>
              <Text style={styles.tocTitle}>Grammar</Text>
              <Text style={styles.tocPageNumber}>19</Text>
            </View>
            <View style={styles.tocEntry}>
              <Text style={styles.tocTitle}>Advanced Techniques</Text>
              <Text style={styles.tocPageNumber}>27</Text>
            </View>
            <View style={styles.tocEntry}>
              <Text style={styles.tocTitle}>Writing for AI Graders</Text>
              <Text style={styles.tocPageNumber}>35</Text>
            </View>
            <View style={styles.tocEntry}>
              <Text style={styles.tocTitle}>Topic-Based Vocabulary</Text>
              <Text style={styles.tocPageNumber}>42</Text>
            </View>
            <View style={styles.tocEntry}>
              <Text style={styles.tocTitle}>Band Comparison</Text>
              <Text style={styles.tocPageNumber}>54</Text>
            </View>
            <View style={styles.tocEntry}>
              <Text style={styles.tocTitle}>Strategies</Text>
              <Text style={styles.tocPageNumber}>58</Text>
            </View>
            <View style={styles.tocEntry}>
              <Text style={styles.tocTitle}>Example Essay</Text>
              <Text style={styles.tocPageNumber}>65</Text>
            </View>
            <View style={styles.tocEntry}>
              <Text style={styles.tocTitle}>Band 9.0 Checklist</Text>
              <Text style={styles.tocPageNumber}>75</Text>
            </View>
          </View>
          <View style={styles.separator} />
        </View>

        {/* Introduction */}
        <View style={{ marginTop: PDF_SPACING.sectionMarginTop }}>
          <Text style={styles.sectionTitle}>Introduction</Text>
          <Text style={styles.paragraph}>
            This comprehensive guide covers everything you need to achieve Band 9.0 in IELTS Academic Writing Task 2. 
            From understanding assessment criteria to mastering advanced techniques and vocabulary, each section provides detailed explanations and examples.
          </Text>
          <Text style={styles.paragraph}>
            Navigate through each topic to develop your writing skills systematically. The guide includes practical strategies, 
            Band 9 examples, and comprehensive checklists to ensure you meet all requirements.
          </Text>
        </View>

        {/* Assessment Criteria Section */}
        <View style={{ marginTop: PDF_SPACING.sectionMarginTop }}>
          <Text style={styles.sectionTitle}>Assessment Criteria</Text>
          <Text style={styles.paragraph}>
            Examiners score your essay based on four criteria, each worth 25% of your total score.
          </Text>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.subsectionTitle}>The 4 Assessment Criteria</Text>
            <View style={{ marginTop: 15, marginBottom: 10 }}>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                <Text style={styles.emphasizedText}>1. Task Response (TR)</Text> — How fully you answer the task
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                <Text style={styles.emphasizedText}>2. Coherence & Cohesion (CC)</Text> — How well your ideas flow
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                <Text style={styles.emphasizedText}>3. Lexical Resource (LR)</Text> — Your vocabulary range and accuracy
              </Text>
              <Text style={{ ...styles.paragraph }}>
                <Text style={styles.emphasizedText}>4. Grammar (GRA)</Text> — Your grammatical range and accuracy
              </Text>
            </View>
          </View>
          <Text style={{ ...styles.italicText, marginTop: 15 }}>
            For detailed breakdowns of each criterion including Band 7/8/9 comparisons, key techniques, and common pitfalls, 
            refer to the complete Assessment Criteria section in the online guide.
          </Text>
        </View>

        {/* Essay Types Section */}
        <View style={{ marginTop: PDF_SPACING.sectionMarginTop }}>
          <Text style={styles.sectionTitle}>Essay Types</Text>
          <Text style={styles.paragraph}>
            Master the 6 different IELTS essay types. Each requires a specific approach and structure.
          </Text>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.subsectionTitle}>The 6 Essay Types</Text>
            <View style={{ marginTop: 15, marginBottom: 10 }}>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                <Text style={styles.emphasizedText}>1. Opinion Essays</Text> — Single-sided argument
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                <Text style={styles.emphasizedText}>2. Discussion Essays</Text> — Two-sided argument
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                <Text style={styles.emphasizedText}>3. Problem-Solution Essays</Text> — Problem and causes + solutions
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                <Text style={styles.emphasizedText}>4. Advantage-Disadvantage Essays</Text> — Pros and cons
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                <Text style={styles.emphasizedText}>5. Two-Question Essays</Text> — Answer two related questions
              </Text>
              <Text style={{ ...styles.paragraph }}>
                <Text style={styles.emphasizedText}>6. Mixed Type Essays</Text> — Opinion + Discussion
              </Text>
            </View>
          </View>
          <Text style={{ ...styles.italicText, marginTop: 15 }}>
            Each essay type includes structure templates, Band 9 tips, and example paragraphs. 
            Refer to the full Essay Types section for detailed guidance.
          </Text>
        </View>

        {/* Grammar Section */}
        <View style={{ marginTop: PDF_SPACING.sectionMarginTop }}>
          <Text style={styles.sectionTitle}>Grammar</Text>
          <Text style={styles.paragraph}>
            Advanced grammatical structures are essential for achieving Band 9. Use complex sentences strategically while maintaining accuracy.
          </Text>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.subsectionTitle}>Key Grammar Structures</Text>
            <View style={{ marginTop: 15, marginBottom: 10 }}>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                • <Text style={styles.emphasizedText}>Complex Sentences</Text> — Combining independent and dependent clauses
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                • <Text style={styles.emphasizedText}>Passive Voice</Text> — Shifting focus from agent to action
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                • <Text style={styles.emphasizedText}>Inversion</Text> — Placing verb before subject for emphasis
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                • <Text style={styles.emphasizedText}>Cleft Sentences</Text> — Splitting sentences to stress elements
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                • <Text style={styles.emphasizedText}>Relative Clauses</Text> — Adding detailed information concisely
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                • <Text style={styles.emphasizedText}>Conditionals</Text> — Hypothetical situations
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                • <Text style={styles.emphasizedText}>Participle Clauses</Text> — -ing/-ed phrase bridges
              </Text>
              <Text style={{ ...styles.paragraph }}>
                • <Text style={styles.emphasizedText}>Nominalization</Text> — Converting verbs/adjectives to nouns
              </Text>
            </View>
          </View>
          <Text style={{ ...styles.italicText, marginTop: 15 }}>
            Each structure includes examples showing how to transform simple sentences into complex, Band 9-level writing.
          </Text>
        </View>

        {/* Advanced Techniques Section */}
        <View style={{ marginTop: PDF_SPACING.sectionMarginTop }}>
          <Text style={styles.sectionTitle}>Advanced Techniques</Text>
          <Text style={styles.paragraph}>
            Move beyond basic writing with cohesion, collocation, and register awareness.
          </Text>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.subsectionTitle}>Cohesion & Collocation</Text>
            <View style={{ marginTop: 15, marginBottom: 10 }}>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                Use <Text style={styles.emphasizedText}>lexical chaining</Text> — synonyms instead of repetition
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                Use <Text style={styles.emphasizedText}>collocations</Text> — natural word combinations
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                Maintain <Text style={styles.emphasizedText}>formal register</Text> — consistently academic tone
              </Text>
            </View>
          </View>
          <Text style={{ ...styles.italicText, marginTop: 15 }}>
            Advanced techniques transform your writing from competent to sophisticated.
          </Text>
        </View>

        {/* Writing for AI Graders Section */}
        <View style={{ marginTop: PDF_SPACING.sectionMarginTop }}>
          <Text style={styles.sectionTitle}>Writing for AI Graders</Text>
          <Text style={styles.paragraph}>
            Optimize your essays for automated scoring while maintaining human readability.
          </Text>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.subsectionTitle}>Syntactic Maturity</Text>
            <View style={{ marginTop: 15, marginBottom: 10 }}>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                • <Text style={styles.emphasizedText}>Subordinator Frames</Text> — Creating depth with although/while/because
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                • <Text style={styles.emphasizedText}>Relative Clauses</Text> — Pack more definition into nouns
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                • <Text style={styles.emphasizedText}>Nominalization</Text> — Turn actions into concepts
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                • <Text style={styles.emphasizedText}>Participle Links</Text> — Connect cause and effect
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.subsectionTitle}>Vocabulary Substitution</Text>
            <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
              Avoid: but, so, also, get, give, show, make, bad, big
            </Text>
            <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
              Use: however/consequently, acquire/facilitate, demonstrate, generate/foster, detrimental/substantial
            </Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.subsectionTitle}>Machine-Targeted Strategies</Text>
            <View style={{ marginTop: 15, marginBottom: 10 }}>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                <Text style={styles.emphasizedText}>Length Bias:</Text> Target 320-350 words (not 260-280)
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                <Text style={styles.emphasizedText}>Clause Depth:</Text> Use subordinate embedding (which, that, although)
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                <Text style={styles.emphasizedText}>Rare Word Index:</Text> Use Academic Word List equivalents
              </Text>
              <Text style={{ ...styles.paragraph }}>
                <Text style={styles.emphasizedText}>Hedge Factor:</Text> Use cautious language (may, might, could)
              </Text>
            </View>
        </View>

        {/* Topic-Based Vocabulary Section */}
        <View style={{ marginTop: PDF_SPACING.sectionMarginTop }}>
          <Text style={styles.sectionTitle}>Topic-Based Vocabulary</Text>
          <Text style={styles.paragraph}>
            Advanced vocabulary organized by IELTS essay topics to elevate your writing.
          </Text>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.subsectionTitle}>Six Major Topics</Text>
            <View style={{ marginTop: 15, marginBottom: 10 }}>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                <Text style={styles.emphasizedText}>1. Technology & The Future</Text> — Progress, Internet, Negatives
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                <Text style={styles.emphasizedText}>2. Environment & Climate Change</Text> — Damage, Protection, Causes
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                <Text style={styles.emphasizedText}>3. Education & Learning</Text> — Learning, School, Students
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                <Text style={styles.emphasizedText}>4. Health & Lifestyle</Text> — Sickness, Health, Medicine
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                <Text style={styles.emphasizedText}>5. Society & Crime</Text> — Crime, Punishment, Society
              </Text>
              <Text style={{ ...styles.paragraph }}>
                <Text style={styles.emphasizedText}>6. Work & Business</Text> — Jobs, Business, Workers
              </Text>
            </View>
          </View>
          <Text style={{ ...styles.italicText, marginTop: 15 }}>
            Each topic includes advanced nouns, verbs, and adjectives organized by category.
          </Text>
        </View>

        {/* Band Comparison Section */}
        <View style={{ marginTop: PDF_SPACING.sectionMarginTop }}>
          <Text style={styles.sectionTitle}>Band Comparison</Text>
          <Text style={styles.paragraph}>
            Understanding the differences between Band 7, 8, and 9 helps you target the right level.
          </Text>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.subsectionTitle}>Key Differences</Text>
            <View style={{ marginTop: 15, marginBottom: 10 }}>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                <Text style={styles.emphasizedText}>Word Count:</Text> Band 7/8: 260-280, Band 9: 270-290
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                <Text style={styles.emphasizedText}>Vocabulary:</Text> Band 7/8: Appropriate, Band 9: Sophisticated & natural
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                <Text style={styles.emphasizedText}>Grammar:</Text> Band 7/8: Varied, Band 9: Complex & purposeful
              </Text>
              <Text style={{ ...styles.paragraph }}>
                <Text style={styles.emphasizedText}>Cohesion:</Text> Band 7/8: Good flow, Band 9: Invisible
              </Text>
            </View>
          </View>
        </View>

        {/* Strategies Section */}
        <View style={{ marginTop: PDF_SPACING.sectionMarginTop }}>
          <Text style={styles.sectionTitle}>Proven Strategies</Text>
          <Text style={styles.paragraph}>
            Effective methods for IELTS Writing Task 2 success.
          </Text>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.subsectionTitle}>Core Strategies</Text>
            <View style={{ marginTop: 15, marginBottom: 10 }}>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                • <Text style={styles.emphasizedText}>3 Questions Per Paragraph</Text> — Ask "So what?", "Compared to what?", "What if?"
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                • <Text style={styles.emphasizedText}>1 Example = 3 Purposes</Text> — Support, vocabulary, mental anchor
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                • <Text style={styles.emphasizedText}>The Friends Technique</Text> — Explain naturally, then translate
              </Text>
              <Text style={{ ...styles.paragraph }}>
                • <Text style={styles.emphasizedText}>40-Minute Protocol</Text> — 5 min plan, 30 min write, 5 min review
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.subsectionTitle}>Time Management</Text>
            <Text style={{ ...styles.paragraph, marginTop: 15 }}>
              Planning (5 min) → Writing (30 min) → Review (5 min)
            </Text>
            <Text style={{ ...styles.paragraph, marginTop: 10 }}>
              Target: 270-290 words. Avoid over 300 words.
            </Text>
          </View>
        </View>

        {/* Example Essay Section */}
        <View style={{ marginTop: PDF_SPACING.sectionMarginTop }}>
          <Text style={styles.sectionTitle}>Band 9.0 Example Essay</Text>
          <Text style={styles.paragraph}>
            Study a complete Band 9 essay with P-E-E-L breakdown, scoring analysis, and annotations.
          </Text>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.subsectionTitle}>Essay Structure</Text>
            <View style={{ marginTop: 15, marginBottom: 10 }}>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                <Text style={styles.emphasizedText}>Introduction</Text> — Present views + state position
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                <Text style={styles.emphasizedText}>Body Paragraph 1</Text> — First supporting argument
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 8 }}>
                <Text style={styles.emphasizedText}>Body Paragraph 2</Text> — Second supporting argument
              </Text>
              <Text style={{ ...styles.paragraph }}>
                <Text style={styles.emphasizedText}>Conclusion</Text> — Summarize + restate position
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.subsectionTitle}>P-E-E-L Structure</Text>
            <Text style={{ ...styles.paragraph, marginTop: 15 }}>
              <Text style={styles.emphasizedText}>P - Point:</Text> Main idea or topic sentence
            </Text>
            <Text style={{ ...styles.paragraph, marginTop: 8 }}>
              <Text style={styles.emphasizedText}>E - Explanation:</Text> Why your point is true (causal chain)
            </Text>
            <Text style={{ ...styles.paragraph, marginTop: 8 }}>
              <Text style={styles.emphasizedText}>E - Example:</Text> Specific, relevant example anchoring explanation
            </Text>
            <Text style={{ ...styles.paragraph, marginTop: 8 }}>
              <Text style={styles.emphasizedText}>L - Link:</Text> Connect back to thesis or next paragraph
            </Text>
          </View>
        </View>

        {/* Checklist Section */}
        <View style={{ marginTop: PDF_SPACING.sectionMarginTop }}>
          <Text style={styles.sectionTitle}>Band 9.0 Final Checklist</Text>
          <Text style={styles.paragraph}>
            Use this checklist before submitting your essay to ensure you meet all Band 9 requirements.
          </Text>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.subsectionTitle}>Task Response Checklist</Text>
            <View style={{ marginTop: 15, marginBottom: 10 }}>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                [ ] I have identified and addressed ALL micro-keywords in the prompt
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                [ ] My position is clearly stated in the introduction and consistently maintained
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                [ ] Each main idea is fully extended using the "Why" chain
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                [ ] All arguments are supported with specific, relevant examples
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                [ ] I have used dialectical reasoning (acknowledge counter-arguments where appropriate)
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                [ ] My word count is between 270-290 words (above 250 minimum)
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.subsectionTitle}>Coherence & Cohesion Checklist</Text>
            <View style={{ marginTop: 15, marginBottom: 10 }}>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                [ ] I have avoided overusing mechanical linkers (Firstly, Moreover, etc.)
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                [ ] I use "This + summary noun" patterns for referencing
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                [ ] Each paragraph has ONE clear central idea with a conceptual topic sentence
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                [ ] My paragraphs are linked by ideas, not just sequencers
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                [ ] I use lexical chaining (synonyms) instead of repeating words
              </Text>
              <Text style={{ ...styles.paragraph }}>
                [ ] My essay has 4 clearly structured paragraphs
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.subsectionTitle}>Lexical Resource Checklist</Text>
            <View style={{ marginTop: 15, marginBottom: 10 }}>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                [ ] I use precise vocabulary appropriate to the specific context
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                [ ] I use natural collocations (words that belong together)
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                [ ] I have used nominalization to increase academic density
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                [ ] My register is consistently formal (no slang, contractions, or conversational fillers)
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                [ ] I include topic-specific vocabulary relevant to the question
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                [ ] No "big words" used incorrectly — I prioritize precision over complexity
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.subsectionTitle}>Grammar Checklist</Text>
            <View style={{ marginTop: 15, marginBottom: 10 }}>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                [ ] I have used a variety of complex sentence structures
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                [ ] I use passive voice appropriately to shift focus
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                [ ] I have included conditional sentences for hypothetical scenarios
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                [ ] I use hedging (may, might, could) for nuanced expression
              </Text>
              <Text style={{ ...styles.paragraph, marginBottom: 6 }}>
                [ ] My punctuation is correct throughout (semicolons, colons, dashes used appropriately)
              </Text>
              <Text style={{ ...styles.paragraph }}>
                [ ] There are no systematic errors — only rare "slips" allowed
              </Text>
            </View>
        </View>

        {/* Page Number */}
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
          `${pageNumber} / ${totalPages}`
        )} fixed />
      </Page>
    </Document>
  );
}
