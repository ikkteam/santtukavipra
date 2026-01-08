import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>
          आरती खग स्तंभा | नित्य मंडपी उभा | {"\n"}विठ्ठल धैर्य रासी ||{"\n"}
          संत मंडपी शोभा ||१||{"\n"}{"\n"}
          आवडी भेट देई | दुजे मागणे काई | {"\n"}श्री स्तंभ खग राजा ||{"\n"}
          सत्य वीनंती पायी | आरती खग स्तंभा | {"\n"}नित्य मंडपी उभा  ||२||{"\n"}{"\n"}

          आनंद सर्वाभूती | देई सर्वदा प्रीती | {"\n"}नमन भेटी गोष्टी ||{"\n"}
          देव राया संगती| आरती खग स्तंभा | {"\n"}नित्य मंडपी उभा ||३||{"\n"}{"\n"}

          भावार्थ विप्र सत्ता | देव आवडी भक्ता | {"\n"}वीठली काम सर्व ||{"\n"}
          तुकाविप्र या हेता | आरती खग स्तंभा | {"\n"}नित्य मंडपी उभा ||४||
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