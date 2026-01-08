import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>
          आरती चार वेदा । इये ग्रंथी संपदा । {"\n"}येकाचे येकवट । विनवणी येकदा ||धृ||{"\n"}
          अभंग हे ची  भेटी । प्रीती सर्व या गोष्टी ॥ {"\n"}भूदेव संतराया। प्रेमे माहुली मिठी ||१||{"\n"}{"\n"}
          सर्वार्थे उघडेची । घडी सत्ये  सोन्याची ॥ {"\n"}नेमाची नित्य भेटी । लाभ अखंड हाची ||२||{"\n"}{"\n"}
          कीर्तनी विप्र तुका । उभा येकला येका ॥ {"\n"}वेदांत सार तो हा । भक्ती भाव या लोका ||३||
        </Text>
      </View>
    </LinearGradient>
  )
}

export default Santanna

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#faf9f6',
    padding: 16,
  },
  card: {
    width: '90%',
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
    textAlign: "center"
  }
})