// PDF color scheme for dark mode
export const PDF_COLORS = {
  background: '#0d1418',
  text: '#e5e7eb',
  primary: '#6366f1',
  secondary: '#374151',
  accent: '#4b5563',
  border: '#1f2937',
  code: '#1e293b',
  success: '#166534',
  warning: '#ca8a04',
} as const;

// Text size constants
export const PDF_SIZES = {
  title: 36,
  sectionTitle: 28,
  subsectionTitle: 20,
  paragraph: 12,
  small: 10,
  medium: 14,
  large: 18,
  code: 11,
} as const;

// Spacing constants
export const PDF_SPACING = {
  pagePadding: 40,
  sectionMarginTop: 40,
  subsectionMarginTop: 25,
  paragraphMarginBottom: 12,
  listMarginBottom: 8,
  tableMarginBottom: 20,
} as const;
