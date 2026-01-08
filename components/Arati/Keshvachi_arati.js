import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>
          आरती मुख्य देवा । वीटे वरी केशवा । {"\n"}समान पाऊलासी । जीवे आरती भावा || {"\n"}
          विठ्ठल रखुमाई। रमा आरती राही । {"\n"}श्री माये सत्य भामा। उजळणी हेत पायी ||१||{"\n"}
          आरती मुख्य देवा । वीटे वरी केशवा ||{"\n"}{"\n"}

          सारांश पुंडलीक । भक्तराज अनेक । {"\n"}तीर्थ हे चंद्रभागा । खग मारुती येक ||२||  {"\n"}
          आरती मुख्य देवा । वीटे वरी केशवा तुळसी वैजयंती । {"\n"}तरु कनक मूर्ती । विजय जय ||{"\n"}
          भक्त । परिवार संपत्ती ||३||{"\n"}
          आरती मुख्य देवा । वीटे वरी केशवा ||{"\n"}{"\n"}
          वैकुंठ मंडळासी। विप्र आरती ऐसी । {"\n"}सप्रेम नाम तुका। तुकी उत्तरा ऐसी ||४|| {"\n"}
          आरती मुख्य देवा । वीटे वरी केशवा
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