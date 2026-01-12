import { View, Text } from '@react-pdf/renderer';
import { styles } from '../styles';

interface TOCEntry {
  title: string;
  pageNumber: number;
}

interface TableOfContentsProps {
  entries: TOCEntry[];
}

export function TableOfContents({ entries }: TableOfContentsProps) {
  return (
    <View>
      <Text style={styles.tocHeader}>Table of Contents</Text>
      {entries.map((entry, index) => (
        <View key={index} style={styles.tocEntry}>
          <Text style={styles.tocTitle}>{entry.title}</Text>
          <Text style={styles.tocPageNumber}>{entry.pageNumber}</Text>
        </View>
      ))}
      <View style={styles.separator} />
    </View>
  );
}
