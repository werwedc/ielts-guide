import { StyleSheet } from '@react-pdf/renderer';
import { PDF_COLORS, PDF_SIZES, PDF_SPACING } from './constants';

export const styles = StyleSheet.create({
  page: {
    backgroundColor: PDF_COLORS.background,
    color: PDF_COLORS.text,
    padding: PDF_SPACING.pagePadding,
    fontFamily: 'Helvetica',
  },
  // Header styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: PDF_SIZES.title,
    fontWeight: 'bold',
    color: PDF_COLORS.text,
    marginBottom: 10,
  },
  badge: {
    backgroundColor: PDF_COLORS.success,
    color: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    fontSize: PDF_SIZES.medium,
    fontWeight: 'bold',
  },
  // TOC styles
  tocHeader: {
    fontSize: PDF_SIZES.sectionTitle,
    fontWeight: 'bold',
    marginBottom: 20,
    color: PDF_COLORS.primary,
  },
  tocEntry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    fontSize: PDF_SIZES.medium,
    color: PDF_COLORS.text,
  },
  tocTitle: {
    flex: 1,
  },
  tocPageNumber: {
    color: PDF_COLORS.primary,
    fontWeight: 'bold',
  },
  // Section titles
  sectionTitle: {
    fontSize: PDF_SIZES.sectionTitle,
    fontWeight: 'bold',
    marginTop: PDF_SPACING.sectionMarginTop,
    marginBottom: 20,
    color: PDF_COLORS.primary,
  },
  subsectionTitle: {
    fontSize: PDF_SIZES.subsectionTitle,
    fontWeight: '600',
    marginTop: PDF_SPACING.subsectionMarginTop,
    marginBottom: 15,
    color: PDF_COLORS.text,
  },
  subSubsectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    color: PDF_COLORS.primary,
  },
  // Content styles
  paragraph: {
    fontSize: PDF_SIZES.paragraph,
    lineHeight: 1.7,
    marginBottom: PDF_SPACING.paragraphMarginBottom,
    color: PDF_COLORS.text,
  },
  emphasizedText: {
    fontWeight: 'bold',
    color: PDF_COLORS.primary,
  },
  italicText: {
    fontStyle: 'italic',
    color: PDF_COLORS.secondary,
  },
  // List styles
  bulletList: {
    marginBottom: PDF_SPACING.listMarginBottom,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 6,
    fontSize: PDF_SIZES.paragraph,
    color: PDF_COLORS.text,
  },
  bulletPoint: {
    color: PDF_COLORS.primary,
    fontSize: PDF_SIZES.large,
    marginRight: 8,
    marginTop: 3,
  },
  numberedList: {
    marginBottom: PDF_SPACING.listMarginBottom,
  },
  numberedItem: {
    flexDirection: 'row',
    marginBottom: 8,
    fontSize: PDF_SIZES.paragraph,
    color: PDF_COLORS.text,
  },
  numberLabel: {
    color: PDF_COLORS.primary,
    fontWeight: 'bold',
    fontSize: PDF_SIZES.medium,
    minWidth: 30,
  },
  // Table styles
  table: {
    marginBottom: PDF_SPACING.tableMarginBottom,
    borderWidth: 1,
    borderColor: PDF_COLORS.border,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: PDF_COLORS.border,
  },
  tableHeader: {
    backgroundColor: PDF_COLORS.secondary,
    color: PDF_COLORS.text,
    fontSize: PDF_SIZES.paragraph,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  tableCell: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: PDF_SIZES.code,
    color: PDF_COLORS.text,
  },
  tableCellHeader: {
    fontSize: PDF_SIZES.medium,
    fontWeight: 'bold',
    color: PDF_COLORS.text,
  },
  // Code block styles
  codeBlock: {
    backgroundColor: PDF_COLORS.code,
    padding: 15,
    marginVertical: 10,
    borderRadius: 4,
    fontSize: PDF_SIZES.code,
    fontFamily: 'Courier',
    color: PDF_COLORS.text,
  },
  inlineCode: {
    backgroundColor: PDF_COLORS.code,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 2,
    fontSize: PDF_SIZES.small,
    fontFamily: 'Courier',
    color: PDF_COLORS.text,
  },
  // Box/Card styles
  box: {
    backgroundColor: PDF_COLORS.secondary,
    padding: 15,
    marginBottom: 15,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: PDF_COLORS.border,
  },
  warningBox: {
    backgroundColor: `${PDF_COLORS.warning}15`,
    padding: 15,
    marginBottom: 15,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: PDF_COLORS.warning,
  },
  // Separator
  separator: {
    height: 1,
    backgroundColor: PDF_COLORS.border,
    marginVertical: 20,
  },
  // Page number
  pageNumber: {
    position: 'absolute',
    fontSize: PDF_SIZES.small,
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: PDF_COLORS.secondary,
  },
  // Footer
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: 'center',
    paddingVertical: 10,
    backgroundColor: PDF_COLORS.secondary,
    color: PDF_COLORS.secondary,
    fontSize: PDF_SIZES.small,
  },
} as const;
