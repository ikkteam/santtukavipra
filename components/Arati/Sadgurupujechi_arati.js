import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>
          वोवाळू आरती सद्गुरू पूजे | {"\n"}संत सद्गुरू पूजे ||{"\n"}
          सर्व धर्म उपासना कीर्तनी ध्वजे | {"\n"}वेद श्रुती महा पुराण गाभा ||{"\n"}
          भागवत महाधर्म कीर्तनी उभा | {"\n"} ज्ञान कर्म उपासना सद्गुरू भक्ति||{"\n"}
          त्रिभुवन महा पूजा कीर्तनी प्रीती | {"\n"}वोवाळू आरती सद्गुरू पूजे ||{"\n"}
          संत सद्गुरू पूजे | {"\n"}सर्व धर्म उपासना कीर्तनी ध्वजे ||१||{"\n"}{"\n"}


          परंपरा चालीलीया कीर्तन माळा | {"\n"}हरी गुरु भक्ति भाव दीप उजळा ||{"\n"}
          अष्ट तीर्थ नित्य पायी सद्गुरू संता | {"\n"}सर्व लाभ गुरु सेवा कीर्तन वक्ता ||{"\n"}
          वोवाळू आरती सद्गुरू पूजे | {"\n"}संत सद्गुरू पूजे | {"\n"}सर्व धर्म उपासना कीर्तनी ध्वजे ||२||{"\n"}
          {"\n"}
          तुकाविप्र नेमे उभा कीर्तनी नित्य | {"\n"}संत गुरु कृपे नाचणे नित्य ||{"\n"}
          संत गुरु कृपे नाचणे नित्य | {"\n"} तुकाविप्र नेमे उभा कीर्तनी नित्य ||{"\n"}
          वोवाळू आरती सद्गुरू पूजे | {"\n"}संत सद्गुरू पूजे | {"\n"}सर्व धर्म उपासना कीर्तनी ध्वजे ||३||
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