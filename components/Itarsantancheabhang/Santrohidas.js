import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            रोहीदासा संगे | जोडे ही शिविले ।{"\n"} चर्म रंगविले | देव राये || १ ||{"\n"}
            सर्वकाळ नाम | गर्जे रोहीदास ।{"\n"} राहिला  सेवेस | देव त्याच्या || २ ||{"\n"}
            तुकाविप्र म्हणे  | याती नेणोदेव ।{"\n"} पाही भक्तीभाव | नाम वाचे || ३ ||{"\n"}{"\n"}

            रोहिदास भक्त | चांभार जातीचा ।{"\n"} भोळा विठोबाचा | आवडता || १ ||{"\n"}
            कुटूंब सहिता  |  ऐसा भक्तराज ।{"\n"} जाला कीर्तिध्वज  | कलयुगी || २ ||{"\n"}
            न्हावी सेना तैसा | कुटूंबवत्सल ।{"\n"} भक्त या प्रेमळ | विठोबाचा || ३ ||{"\n"}
            तुकाविप्र म्हणे | कान्होपात्रा भक्त ।{"\n"} विठ्ठल विरक्त | देवाची या || ४ ||
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