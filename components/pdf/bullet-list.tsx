import { View, Text } from '@react-pdf/renderer';
import { styles } from '../styles';

interface BulletListProps {
  items: string[];
  emphasized?: boolean;
}

export function BulletList({ items, emphasized }: BulletListProps) {
  return (
    <View style={styles.bulletList}>
      {items.map((item, index) => (
        <View key={index} style={styles.bulletItem}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={emphasized ? styles.emphasizedText : undefined}>{item}</Text>
        </View>
      ))}
    </View>
  );
}
