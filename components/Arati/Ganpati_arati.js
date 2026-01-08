import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>
          आरती धुंडीराजा | लक्ष लावीन तया ||{"\n"}
          सर्वेश सर्वसाक्षी | निजसुख दातया ||{"\n"}
          आरती धुडीराजा ||१||{"\n"}{"\n"}
          प्रसन्न गजमुखा । होय स्वामी विनायका ||{"\n"}
          कीर्तन रंग देई । जेणे होय हरीकथा ||{"\n"}
          आरती धुडीराजा || २ ||{"\n"}{"\n"}
          कीर्तन प्रेमरग | नित्यनेम सत्संग ||{"\n"}
          आनद वृत्ती सदा | प्रेमे देई अभंग ||{"\n"}
          आरती धुडीराजा ||३||{"\n"}{"\n"}
          अभग एकदता। सिध्दी बुद्धीचे काता ||{"\n"}
          प्रमाण आरती हे। होय प्रसन्न आता ||{"\n"}
          आरती धुडीराजा ||४||{"\n"}{"\n"}
          स्वामीया भालचंद्रा । तुकाविप्र हाती धरा ||{"\n"}
          गर्जाया नाम हारी | भक्ती भावे उभा करा ||{"\n"}
          आरती धुडीराजा ||५||
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