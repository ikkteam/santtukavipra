import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            द्वेपायन भीमातीर | वासी माशाळ माचणुर || १ ||{"\n"}
            शुद्ध वैष्णव प्रेमळ | ज्ञानी अंतर निर्मळ || २ ||{"\n"}
            नाही मनी द्वैत भाव | ऐसे विदेही वैष्णव || ३ ||{"\n"}
            वृत्ती समान जयाची | भेटी जाहाली तयाची || ४ ||{"\n"}
            तुकाविप्र म्हणे भली | भेटी ऐसी तूर्त झाली || ५ ||
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