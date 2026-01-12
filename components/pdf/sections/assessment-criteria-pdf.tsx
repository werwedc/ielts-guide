import { View, Text } from '@react-pdf/renderer';
import { styles } from '../styles';
import { Table } from './table';
import { BulletList } from './bullet-list';

interface AssessmentCriteriaPDFProps {
  data: any;
}

export function AssessmentCriteriaPDF({ data }: AssessmentCriteriaPDFProps) {
  return (
    <View>
      <Text style={styles.sectionTitle}>Assessment Criteria</Text>
      <Text style={styles.paragraph}>
        Your IELTS Writing Task 2 essay is scored across four criteria, each worth 25% of your total score. Understanding these criteria is essential to achieving Band 9.0.
      </Text>
      
      {data.map((criterion) => (
        <View key={criterion.id} style={{ marginTop: 30 }}>
          <Text style={styles.subsectionTitle}>{criterion.name}</Text>
          <Text style={{ ...styles.paragraph, marginBottom: 8 }}>{criterion.band9Description}</Text>
          
          <View style={{ marginBottom: 15 }}>
            <Text style={{ ...styles.emphasizedText, marginBottom: 8 }}>Key Requirements for Band 9</Text>
            <BulletList items={criterion.keyRequirements} emphasized />
          </View>
          
          <View style={{ marginTop: 15, marginBottom: 15 }}>
            <Text style={styles.subSubsectionTitle}>Band Comparison</Text>
            <Table 
              headers={['Feature', 'Band 7', 'Band 8', 'Band 9']}
              rows={criterion.bandComparison.map(row => [
                row.aspect, row.band7, row.band8, row.band9
              ])}
            />
          </View>
          
          <View style={{ marginTop: 15, marginBottom: 15 }}>
            <Text style={styles.subSubsectionTitle}>Key Techniques</Text>
            {criterion.techniques.map((technique, idx) => (
              <View key={idx} style={{ marginTop: 10 }}>
                <Text style={styles.emphasizedText}>{technique.name}</Text>
                <Text style={{ ...styles.paragraph, marginBottom: 5 }}>{technique.description}</Text>
                <BulletList items={technique.examples} />
              </View>
            ))}
          </View>
          
          <View style={{ marginTop: 15 }}>
            <Text style={{ ...styles.emphasizedText, color: PDF_COLORS.warning, marginBottom: 8 }}>Common Pitfalls to Avoid</Text>
            <BulletList items={criterion.commonPitfalls} />
          </View>
        </View>
      ))}
    </View>
  );
}
