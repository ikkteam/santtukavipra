import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>
          प्रसिद्ध पूजेला | विठो पंढरी राणा ||{"\n"}
          भावार्थ भक्ति भावे | सत्व आरती गुणे ||१||{"\n"}{"\n"}
          कनक तरुवरा | तळी आरती कृष्णा ||{"\n"}
          विठ्ठल रखुमाई | पूर्ण ब्रम्ह उभे ठाणे ||{"\n"}
          भावार्थ भक्ति भावे | सत्व आरती गुणे ||२||{"\n"}{"\n"}


          तुळसी वैजयंती | नाथ शिव चक्रपाणी ||{"\n"}
          सन्मुख आरती हे | प्रेम भक्ति उजळोनी ||{"\n"}
          भावार्थ भक्ति भावे | सत्व आरती गुणे ||३||{"\n"}{"\n"}


          कुबेर कामधेनु | द्वारपाल नाथ क्षेत्र ||{"\n"}
          शारदा अन्नपूर्णा | पंच शिव वर्ण ||{"\n"}
          भावार्थ भक्ति भावे | सत्व आरती गुणे ||४||{"\n"}{"\n"}


          आरती ब्रम्हपुरी | विप्रनाथ धनीया ||{"\n"}
          त्रिमूर्ति वृक्षरूपा | कृपा दृष्टी तुकीया ||{"\n"}
          भावार्थ भक्ति भावे | सत्व आरती गुणे ||५||
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