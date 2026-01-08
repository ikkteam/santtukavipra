import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>
          आरती व्यासराया | करी अभंग दया | {"\n"}प्रसिद्ध विनवणी | मायेबापा गुरुवर्या ||धृ||{"\n"}
          वेदान्त श्रुती सार | नित्य नेम विचार | {"\n"}विठ्ठल नाम कथा | संत संग सदर् ||{"\n"}
          आरती व्यासराया | करी अभंग दया | {"\n"}प्रसिद्ध विनवणी | मायेबापा गुरुवर्या ||१||{"\n"}{"\n"}
          सर्वांग भरी प्रेमा | देई व्यास नीसीमा | {"\n"}भोळीव भाव भक्ति | शांती सर्वदा क्षमा ||{"\n"}
          आरती व्यासराया | करी अभंग दया | {"\n"}प्रसिद्ध विनवणी | मायेबापा गुरुवर्या ||२||{"\n"}{"\n"}
          श्री व्यास गुरु मूर्ती | तुकाविप्र आरती | {"\n"}वैकुंठ भूमीवरी | सिद्ध कार्य विनंती ||{"\n"}
          आरती व्यासराया | करी अभंग दया | {"\n"}प्रसिद्ध विनवणी | मायेबापा गुरुवर्या ||३||
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