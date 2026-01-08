import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            ज्ञानेश्वर मुक्ता | निऊर्ती  सोपान ।{"\n"} जाले युगी धन्ये  | याची ऐसे || १ ||{"\n"}
            विठ्ठली जयाची | अत्यंत आवडी ।{"\n"} विठोबाचे गडी |  बरोबरी || २ ||{"\n"}
            जनार्दन पंत |  प्रसिद्ध विठ्ठल ।{"\n"} भक्त वोळखीले  | येकोबानी || ३ ||{"\n"}
            तुकाविप्र ऐसी | भक्ती निरूपम | {"\n"}विठ्ठल सप्रेम | कलयुगी || ४ ||
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