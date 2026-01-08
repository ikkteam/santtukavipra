import { Text, StyleSheet, View, Pressable, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Rachitsahitya = () => {
  const items = [
    'भागवताच्या सर्व भागावर अभंगात्मक टीका',
    'शतकोटीचे अभंग',
    'तत्वमसि अभंगात्मक निरूपण',
    'सुदामचरित्र',
    'भानुदास चरित्र',
    'ज्ञानेश्वर चरित्र',
    'कालियामर्दन',
    'हरीपाठाचे अभंग',
    'पंढरीपर अभंग',
    'समाज प्रबोधनात्मक प्रासंगिक अभंग',
    'नरदेह महिमा अभंग',
    'कीर्तन महिमा सांगणारे अभंग',
    'इतर संतावरचे अभंग',
    'विठ्ठलावरील पोवाडा'
  ];

  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          {items.map((item, index) => (
            <Pressable
              key={index}
              style={({ pressed }) => [
                styles.itemRow,
                pressed && { backgroundColor: '#f4f1e8' }
              ]}
            >
              <View style={styles.bullet} />
              <Text style={styles.text}>{item}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Rachitsahitya;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#faf9f6',
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 30
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 12,
    width: '92%',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 }
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 8,
    borderBottomWidth: 0.6,
    borderBottomColor: '#e0ddd4',
    borderRadius: 8,
    paddingHorizontal: 5,
  },
  bullet: {
    width: 7,
    height: 7,
    backgroundColor: '#6b4e25',
    borderRadius: 50,
    marginTop: 12,
    marginRight: 8
  },
  text: {
    fontFamily: 'VesperLibre-Bold',
    fontSize: 20,
    flex: 1,
    color: '#3a2b1e',
    lineHeight: 26,
    textAlignVertical: 'center',
    paddingVertical: 4
  },
});
