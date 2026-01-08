import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            कृष्ण भटाचे इष्ट सर्वेश्वर |{"\n"}म्हणोनी नाम पावला कृष्णेश्वर || १ ||{"\n"}
            माझा विठो माझ्यासाठी |{"\n"}निघाला कोकण भटीसी || २ ||{"\n"}
            लीला काही महादेवासी |{"\n"}दावूनी निवारावे संदेहासी || ३ ||{"\n"}
            चिपळूण पाग कृष्णेश्वर |{"\n"}नमन तया वारंवार || ४ ||{"\n"}
            तुकाविप्र उभा कीर्तनासी | {"\n"}लाभ घावला भाग्यासी || ५ ||
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default Santanna

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf9f6',
    padding: 16,
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 30
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    padding: 15
  },
  text: {
    fontFamily: 'VesperLibre-Bold',
    fontSize: 18,
    lineHeight: 26,
    color: '#3a2b1e',
  }
})