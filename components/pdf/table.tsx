import { View, Text } from '@react-pdf/renderer';
import { styles } from '../styles';

interface TableProps {
  headers: string[];
  rows: string[][];
  columnWidths?: number[];
}

export function Table({ headers, rows, columnWidths }: TableProps) {
  const defaultWidths = columnWidths || headers.map(() => 1);

  return (
    <View style={styles.table}>
      {/* Header */}
      <View style={styles.tableRow}>
        {headers.map((header, index) => (
          <View key={index} style={{ ...styles.tableCellHeader, flex: defaultWidths[index] }}>
            <Text>{header}</Text>
          </View>
        ))}
      </View>
      {/* Rows */}
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.tableRow}>
          {row.map((cell, cellIndex) => (
            <View key={cellIndex} style={{ ...styles.tableCell, flex: defaultWidths[cellIndex] }}>
              <Text style={styles.tableCell}>{cell}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
