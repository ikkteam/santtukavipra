import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            दामाजी पंतांनी पंढरीची वारी  |{"\n"}केली तेंव्हा हरी साह्ये जाला || १ ||{"\n"}
            सर्वत्रासी मान्ये व्यापारी ऐसेले ।{"\n"}वारकरी जाले पंढरीचे || २ ||{"\n"}
            सकळ ही चला पंढर-पूरासी ।{"\n"}भेटाया वरासी रुक्मिणीच्या || ३ ||{"\n"}
            तुकाविप्र म्हणे संसारी असता ।{"\n"}प्रीती रमाकांता सवे केली || ४ ||
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