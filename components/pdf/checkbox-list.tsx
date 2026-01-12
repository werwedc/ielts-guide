import { View, Text } from '@react-pdf/renderer';
import { styles, PDF_COLORS, PDF_SIZES } from '../styles';

interface CheckboxItem {
  checked?: boolean;
  text: string;
  category?: string;
}

interface CheckboxListProps {
  items: CheckboxItem[];
  title?: string;
}

export function CheckboxList({ items, title }: CheckboxListProps) {
  return (
    <View>
      {title && (
        <Text style={styles.sectionTitle}>{title}</Text>
      )}
      {items.map((item, index) => (
        <View key={index} style={{ marginBottom: 10, flexDirection: 'row' }}>
          <Text style={{ 
            fontSize: 12, 
            marginRight: 8,
            color: item.checked ? '#166534' : '#374151',
            fontWeight: 'bold'
          }}>
            [{item.checked ? 'X' : ' '}]
          </Text>
          <View style={{ flex: 1 }}>
            {item.category && (
              <Text style={{ fontSize: 10, color: '#6366f1', marginBottom: 2 }}>
                {item.category}:
              </Text>
            )}
            <Text style={{ fontSize: 12, color: '#e5e7eb' }}>
              {item.text}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}
