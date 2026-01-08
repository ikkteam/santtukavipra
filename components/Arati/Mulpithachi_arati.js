import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>
          आरती येकवट। मुख्य भाव मूळपीठ ।।{"\n"} विठ्ठल सन्त रुपा । विनवणी अवीट ||धृ||{"\n"}
          तरावया सर्व लोक । तास हे नाम नौका ॥{"\n"} वेदांत अर्थ सार नाम येक त्रिलोका ||{"\n"}
          भूसंत देव पायी। नाम गर्जा प्रीती ॥{"\n"} धर्माचा धर्म सार। विप्र आगळी भक्ती ||{"\n"}
          तुर्तची  भक्ती भाव। संत संग भूदेव ।।{"\n"} सद्गुरु वागवीता । तुकाविप्र हा आर्व ||
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