import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>
          आरते प्रेम आरती । विप्र संत पंगती ।। {"\n"}वेदांत सिद्ध सर्वा । वोवाळणे हेत प्रीती ||धृ||{"\n"}{"\n"}
          धन्य हे स्वामी सर्व। कली काळासी भाव ।। {"\n"}लावोनी उद्धरीले । विप्रनाम भूदेवे ||१||{"\n"}{"\n"}
          कृपाळू विप्रसंता । सर्व आरती आरता ।। {"\n"}ऐसी हे कलीयुगी। केली सर्व कार्य सिद्धता ||२||{"\n"}{"\n"}
          त्रिमुर्ती विप्र सर्वा । कृपा लोभ करावा ।। {"\n"}आरती याच हेते। विप्र तुकीया सेवा ||३||
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