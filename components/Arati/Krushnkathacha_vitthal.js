import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>
          वोवाळू आरती सावळ्या हरी | {"\n"}राम राजा विठो उभा कृष्णेच्या तिरी ||{"\n"}
          कृष्णा वेण्या तनु साऱ्या विश्वाच्या माता | {"\n"}ऐक्य भावे पुरी ब्रम्ह आलिया सरीता ||{"\n"}
          सरीता या मिळूनी पदी विष्णूच्या आल्या | {"\n"}नाथ शिव ऋषि सप्त पाहुनीया धाल्या ||{"\n"}
          वोवाळू आरती सावळ्या हरी | {"\n"}राम राजा विठो उभा कृष्णेच्या तिरी ||१||{"\n"}{"\n"}


          धालेपण हे भाक मागितली देवा | {"\n"}येथे वसती करा माझ्या जीवीचीया जीवा ||{"\n"}
          जीवाची या जीवा भाक मागितली द्यावी | {"\n"}ब्रीदापायी देवा पतीत पावना पुरवावी ||{"\n"}
          वोवाळू आरती सावळ्या हरी | {"\n"}राम राजा विठो उभा कृष्णेच्या तिरी ||२||{"\n"}{"\n"}


          पुरवी दिली भाक आली विठो येती जे | {"\n"}तुकाविप्र पुजी साधू संतांचे पाये ||{"\n"}
          तुकाविप्र पुजी साधू संतांचे पाये  | {"\n"}तुकाविप्र पुजी साधू संतांचे पाये ||{"\n"}
          वोवाळू आरती सावळ्या हरी | {"\n"}राम राजा विठो उभा कृष्णेच्या तिरी ||३||
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