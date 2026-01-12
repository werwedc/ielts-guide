import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { default: jsPDF } = await import('jspdf');
    
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    // Colors (dark mode)
    const COLORS = {
      background: '#0d1418',
      text: '#e5e7eb',
      primary: '#6366f1',
      secondary: '#374151',
      border: '#1f2937',
      success: '#166534',
    };

    let yPos = 20;

    // Helper to add section header and return new Y position
    const addSection = (title: string) => {
      yPos += 10;
      doc.setFontSize(20);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(COLORS.primary);
      doc.text(title, 20, yPos);
      yPos += 8;
    };

    // Helper to add paragraph
    const addParagraph = (text: string, indent: number = 0) => {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(COLORS.text);
      const lines = doc.splitTextToSize(text, 170 - indent);
      lines.lines.forEach((line: any) => {
        doc.text(line.text, 20 + indent, yPos);
        yPos += 6;
      });
      yPos += 6;
    };

    // Header
    doc.setFillColor(COLORS.background);
    doc.rect(0, 0, 210, 297, 'F');
    doc.setFillColor(COLORS.background);
    doc.rect(0, 0, 210, 297, 'F');

    yPos = 25;
    doc.setFontSize(28);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(COLORS.text);
    doc.text('IELTS Band 9.0 Writing Guide', 105, yPos, { align: 'center' });
    
    const badgeWidth = doc.getTextWidth('Band 9.0') + 24;
    doc.setFillColor(COLORS.success);
    doc.roundedRect(105 - badgeWidth / 2, yPos + 10, badgeWidth, 10, 2);
    doc.setTextColor('#ffffff');
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Band 9.0', 105, yPos + 24, { align: 'center' });
    
    yPos += 50;

    // Table of Contents
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(COLORS.primary);
    doc.text('Table of Contents', 20, yPos);
    yPos += 15;

    const toc = [
      { title: 'Assessment Criteria', page: 3 },
      { title: 'Essay Types', page: 5 },
      { title: 'Grammar', page: 19 },
      { title: 'Advanced Techniques', page: 27 },
      { title: 'Writing for AI Graders', page: 35 },
      { title: 'Topic-Based Vocabulary', page: 42 },
      { title: 'Band Comparison', page: 54 },
      { title: 'Strategies', page: 58 },
      { title: 'Example Essay', page: 65 },
      { title: 'Band 9.0 Checklist', page: 75 },
    ];

    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(COLORS.text);
    toc.forEach((entry) => {
      doc.text(entry.title, 20, yPos);
      doc.setTextColor(COLORS.primary);
      doc.setFont('helvetica', 'bold');
      doc.text(String(entry.page), 180, yPos);
      doc.setTextColor(COLORS.text);
      doc.setFont('helvetica', 'normal');
      yPos += 10;
    });

    yPos += 10;
    doc.setDrawColor(COLORS.border);
    doc.setLineDash([2, 2], 0);
    doc.line(20, yPos, 190, yPos);
    doc.setLineDash([], 0);
    yPos += 10;

    // Introduction
    addSection('Introduction');
    addParagraph('This comprehensive guide covers everything you need to achieve Band 9.0 in IELTS Academic Writing Task 2. From understanding assessment criteria to mastering advanced techniques and vocabulary, each section provides detailed explanations and examples.');
    addParagraph('Navigate through each topic to develop your writing skills systematically. The guide includes practical strategies, Band 9 examples, and comprehensive checklists to ensure you meet all requirements.');
    yPos += 10;

    // Assessment Criteria
    addSection('Assessment Criteria');
    addParagraph('Examiners score your essay based on four criteria, each worth 25% of your total score.');
    
    yPos += 8;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(COLORS.text);
    doc.text('The 4 Assessment Criteria', 20, yPos);
    yPos += 8;
    
    const criteria = [
      '1. Task Response (TR) — How fully you answer the task',
      '2. Coherence & Cohesion (CC) — How well your ideas flow',
      '3. Lexical Resource (LR) — Your vocabulary range and accuracy',
      '4. Grammar (GRA) — Your grammatical range and accuracy',
    ];
    
    criteria.forEach((item) => {
      addParagraph(item, 10);
    });
    
    addParagraph('For detailed breakdowns of each criterion including Band 7/8/9 comparisons, key techniques, and common pitfalls, refer to the full Assessment Criteria section in the online guide.');
    yPos += 10;
    doc.setDrawColor(COLORS.border);
    doc.setLineDash([2, 2], 0);
    doc.line(20, yPos, 190, yPos);
    doc.setLineDash([], 0);
    yPos += 10;

    // Essay Types
    addSection('Essay Types');
    addParagraph('Master the 6 different IELTS essay types. Each requires a specific approach and structure.');
    
    yPos += 8;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(COLORS.text);
    doc.text('The 6 Essay Types', 20, yPos);
    yPos += 8;
    
    const essayTypesList = [
      '1. Opinion Essays — Single-sided argument',
      '2. Discussion Essays — Two-sided argument',
      '3. Problem-Solution Essays — Problem and causes + solutions',
      '4. Advantage-Disadvantage Essays — Pros and cons',
      '5. Two-Question Essays — Answer two related questions',
      '6. Mixed Type Essays — Opinion + Discussion',
    ];
    
    essayTypesList.forEach((item) => {
      addParagraph(item, 10);
    });
    
    addParagraph('Each essay type includes structure templates, Band 9 tips, and example paragraphs. Refer to the full Essay Types section for detailed guidance.');
    yPos += 10;
    doc.setDrawColor(COLORS.border);
    doc.setLineDash([2, 2], 0);
    doc.line(20, yPos, 190, yPos);
    doc.setLineDash([], 0);
    yPos += 10;

    // Grammar
    addSection('Grammar');
    addParagraph('Advanced grammatical structures are essential for achieving Band 9. Use complex sentences strategically while maintaining accuracy.');
    
    yPos += 8;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(COLORS.text);
    doc.text('Key Grammar Structures', 20, yPos);
    yPos += 8;
    
    const grammarStructures = [
      '• Complex Sentences — Combining independent and dependent clauses',
      '• Passive Voice — Shifting focus from agent to action',
      '• Inversion — Placing verb before subject for emphasis',
      '• Cleft Sentences — Splitting sentences to stress elements',
      '• Relative Clauses — Adding detailed information concisely',
      '• Conditionals — Hypothetical situations',
      '• Participle Clauses — -ing/-ed phrase bridges',
      '• Nominalization — Converting verbs/adjectives to nouns',
    ];
    
    grammarStructures.forEach((item) => {
      addParagraph(item);
    });
    
    addParagraph('Each structure includes examples showing how to transform simple sentences into complex, Band 9-level writing.');
    yPos += 10;
    doc.setDrawColor(COLORS.border);
    doc.setLineDash([2, 2], 0);
    doc.line(20, yPos, 190, yPos);
    doc.setLineDash([], 0);
    yPos += 10;

    // Advanced Techniques
    addSection('Advanced Techniques');
    addParagraph('Move beyond basic writing with cohesion, collocation, and register awareness.');
    
    yPos += 8;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(COLORS.text);
    doc.text('Cohesion & Collocation', 20, yPos);
    yPos += 8;
    
    const techniques = [
      '• Use lexical chaining — synonyms instead of repetition',
      '• Use collocations — natural word combinations',
      '• Maintain formal register — consistently academic tone',
    ];
    
    techniques.forEach((item) => {
      addParagraph(item);
    });
    
    addParagraph('Advanced techniques transform your writing from competent to sophisticated.');
    yPos += 10;
    doc.setDrawColor(COLORS.border);
    doc.setLineDash([2, 2], 0);
    doc.line(20, yPos, 190, yPos);
    doc.setLineDash([], 0);
    yPos += 10;

    // Writing for AI Graders
    addSection('Writing for AI Graders');
    addParagraph('Optimize your essays for automated scoring while maintaining human readability.');
    
    yPos += 8;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(COLORS.text);
    doc.text('Syntactic Maturity', 20, yPos);
    yPos += 8;
    
    const aiItems = [
      '• Subordinator Frames — Creating depth with although/while/because',
      '• Relative Clauses — Pack more definition into nouns',
      '• Nominalization — Turn actions into concepts',
      '• Participle Links — Connect cause and effect',
    ];
    
    aiItems.forEach((item) => {
      addParagraph(item);
    });
    
    yPos += 8;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(COLORS.text);
    doc.text('Vocabulary Substitution', 20, yPos);
    yPos += 8;
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(COLORS.text);
    addParagraph('Avoid: but, so, also, get, give, show, make, bad, big', 8);
    addParagraph('Use: however/consequently, acquire/facilitate, demonstrate, generate/foster, detrimental/substantial', 8);
    
    yPos += 8;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(COLORS.text);
    doc.text('Machine-Targeted Strategies', 20, yPos);
    yPos += 8;
    
    const aiStrategies = [
      '• Length Bias: Target 320-350 words (not 260-280)',
      '• Clause Depth: Use subordinate embedding (which, that, although)',
      '• Rare Word Index: Use Academic Word List equivalents',
      '• Hedge Factor: Use cautious language (may, might, could)',
    ];
    
    aiStrategies.forEach((item) => {
      addParagraph(item);
    });
    yPos += 10;
    doc.setDrawColor(COLORS.border);
    doc.setLineDash([2, 2], 0);
    doc.line(20, yPos, 190, yPos);
    doc.setLineDash([], 0);
    yPos += 10;

    // Topic-Based Vocabulary
    addSection('Topic-Based Vocabulary');
    addParagraph('Advanced vocabulary organized by IELTS essay topics to elevate your writing.');
    
    yPos += 8;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(COLORS.text);
    doc.text('Six Major Topics', 20, yPos);
    yPos += 8;
    
    const topics = [
      '1. Technology & The Future — Progress, Internet, Negatives',
      '2. Environment & Climate Change — Damage, Protection, Causes',
      '3. Education & Learning — Learning, School, Students',
      '4. Health & Lifestyle — Sickness, Health, Medicine',
      '5. Society & Crime — Crime, Punishment, Society',
      '6. Work & Business — Jobs, Business, Workers',
    ];
    
    topics.forEach((item) => {
      addParagraph(item);
    });
    
    addParagraph('Each topic includes advanced nouns, verbs, and adjectives organized by category.');
    yPos += 10;
    doc.setDrawColor(COLORS.border);
    doc.setLineDash([2, 2], 0);
    doc.line(20, yPos, 190, yPos);
    doc.setLineDash([], 0);
    yPos += 10;

    // Band Comparison
    addSection('Band Comparison');
    addParagraph('Understanding the differences between Band 7, 8, and 9 helps you target the right level.');
    
    yPos += 8;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(COLORS.text);
    doc.text('Key Differences', 20, yPos);
    yPos += 8;
    
    const diffs = [
      '• Word Count: Band 7/8: 260-280, Band 9: 270-290',
      '• Vocabulary: Band 7/8: Appropriate, Band 9: Sophisticated & natural',
      '• Grammar: Band 7/8: Varied, Band 9: Complex & purposeful',
      '• Cohesion: Band 7/8: Good flow, Band 9: Invisible',
    ];
    
    diffs.forEach((item) => {
      addParagraph(item);
    });
    yPos += 10;
    doc.setDrawColor(COLORS.border);
    doc.setLineDash([2, 2], 0);
    doc.line(20, yPos, 190, yPos);
    doc.setLineDash([], 0);
    yPos += 10;

    // Strategies
    addSection('Proven Strategies');
    addParagraph('Effective methods for IELTS Writing Task 2 success.');
    
    yPos += 8;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(COLORS.text);
    doc.text('Core Strategies', 20, yPos);
    yPos += 8;
    
    const strategies = [
      '• 3 Questions Per Paragraph — Ask "So what?", "Compared to what?", "What if?"',
      '• 1 Example = 3 Purposes — Support, vocabulary, mental anchor',
      '• The Friends Technique — Explain naturally, then translate',
      '• 40-Minute Protocol — 5 min plan, 30 min write, 5 min review',
    ];
    
    strategies.forEach((item) => {
      addParagraph(item);
    });
    
    yPos += 8;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(COLORS.text);
    doc.text('Time Management', 20, yPos);
    yPos += 8;
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(COLORS.text);
    addParagraph('Planning (5 min) → Writing (30 min) → Review (5 min)', 8);
    addParagraph('Target: 270-290 words. Avoid over 300 words.', 8);
    yPos += 10;
    doc.setDrawColor(COLORS.border);
    doc.setLineDash([2, 2], 0);
    doc.line(20, yPos, 190, yPos);
    doc.setLineDash([], 0);
    yPos += 10;

    // Example Essay
    addSection('Band 9.0 Example Essay');
    addParagraph('Study a complete Band 9 essay with P-E-E-L breakdown, scoring analysis, and annotations.');
    
    yPos += 8;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(COLORS.text);
    doc.text('Essay Structure', 20, yPos);
    yPos += 8;
    
    const essayStructure = [
      '• Introduction — Present views + state position',
      '• Body Paragraph 1 — First supporting argument',
      '• Body Paragraph 2 — Second supporting argument',
      '• Conclusion — Summarize + restate position',
    ];
    
    essayStructure.forEach((item) => {
      addParagraph(item);
    });
    
    yPos += 8;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(COLORS.text);
    doc.text('P-E-E-L Structure', 20, yPos);
    yPos += 8;
    
    const peel = [
      'P - Point: Main idea or topic sentence',
      'E - Explanation: Why your point is true (causal chain)',
      'E - Example: Specific, relevant example anchoring explanation',
      'L - Link: Connect back to thesis or next paragraph',
    ];
    
    peel.forEach((item) => {
      addParagraph(item);
    });
    yPos += 10;
    doc.setDrawColor(COLORS.border);
    doc.setLineDash([2, 2], 0);
    doc.line(20, yPos, 190, yPos);
    doc.setLineDash([], 0);
    yPos += 10;

    // Band 9.0 Checklist
    addSection('Band 9.0 Final Checklist');
    addParagraph('Use this checklist before submitting your essay to ensure you meet all Band 9 requirements.');
    
    yPos += 8;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(COLORS.text);
    doc.text('Task Response Checklist', 20, yPos);
    yPos += 8;
    
    const trChecklist = [
      '[ ] I have identified and addressed ALL micro-keywords in the prompt',
      '[ ] My position is clearly stated in the introduction and consistently maintained',
      '[ ] Each main idea is fully extended using the "Why" chain',
      '[ ] All arguments are supported with specific, relevant examples',
      '[ ] I have used dialectical reasoning (acknowledge counter-arguments where appropriate)',
      '[ ] My word count is between 270-290 words (above 250 minimum)',
    ];
    
    trChecklist.forEach((item) => {
      addParagraph(item);
    });
    
    yPos += 8;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(COLORS.text);
    doc.text('Coherence & Cohesion Checklist', 20, yPos);
    yPos += 8;
    
    const ccChecklist = [
      '[ ] I have avoided overusing mechanical linkers (Firstly, Moreover, etc.)',
      '[ ] I use "This + summary noun" patterns for referencing',
      '[ ] Each paragraph has ONE clear central idea with a conceptual topic sentence',
      '[ ] My paragraphs are linked by ideas, not just sequencers',
      '[ ] I use lexical chaining (synonyms) instead of repeating words',
      '[ ] My essay has 4 clearly structured paragraphs',
    ];
    
    ccChecklist.forEach((item) => {
      addParagraph(item);
    });
    
    yPos += 8;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(COLORS.text);
    doc.text('Lexical Resource Checklist', 20, yPos);
    yPos += 8;
    
    const lrChecklist = [
      '[ ] I use precise vocabulary appropriate to specific context',
      '[ ] I use natural collocations (words that belong together)',
      '[ ] I have used nominalization to increase academic density',
      '[ ] My register is consistently formal (no slang, contractions, or conversational fillers)',
      '[ ] I include topic-specific vocabulary relevant to the question',
      '[ ] No "big words" used incorrectly — I prioritize precision over complexity',
    ];
    
    lrChecklist.forEach((item) => {
      addParagraph(item);
    });
    
    yPos += 8;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(COLORS.text);
    doc.text('Grammar Checklist', 20, yPos);
    yPos += 8;
    
    const grammarChecklist = [
      '[ ] I have used a variety of complex sentence structures',
      '[ ] I use passive voice appropriately to shift focus',
      '[ ] I have included conditional sentences for hypothetical scenarios',
      '[ ] I use hedging (may, might, could) for nuanced expression',
      '[ ] My punctuation is correct throughout (semicolons, colons, dashes used appropriately)',
      '[ ] There are no systematic errors — only rare "slips" allowed',
    ];
    
    grammarChecklist.forEach((item) => {
      addParagraph(item);
    });

    // Add page numbers
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(COLORS.secondary);
      doc.text(`${i} / ${totalPages}`, 105, 280);
    }

    // Generate and return PDF
    const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
    
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="IELTS-Band9-Guide.pdf"',
      },
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
