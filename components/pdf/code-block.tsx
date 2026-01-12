import { View, Text } from '@react-pdf/renderer';
import { styles } from '../styles';

interface CodeBlockProps {
  code: string;
  label?: string;
}

export function CodeBlock({ code, label }: CodeBlockProps) {
  return (
    <View>
      {label && (
        <Text style={{ ...styles.subSubsectionTitle, fontSize: 14, marginBottom: 8 }}>
          {label}
        </Text>
      )}
      <View style={styles.codeBlock}>
        <Text>{code}</Text>
      </View>
    </View>
  );
}
