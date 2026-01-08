import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>
          आरती रंग साळे | विठ्ठलाई कृपाळे | {"\n"}प्रसन्न होई आता | सत्य भक्ती प्रती पाळे ||{"\n"}
          सप्रेम युक्त नाम | विठ्ठलाई दे क्षेम | {"\n"}आरते भाव आरती | वाचे सर्वदा नाम ||{"\n"}
          आरती रंग साळे | विठ्ठलाई कृपाळे ||१||{"\n"}{"\n"}
          नाचवी प्रेम प्रीती | बहुत हेत हा चित्ती | {"\n"}श्री माये रंग साळे | धरी प्रसिद्ध हाती ||{"\n"}
          आरती रंग साळे | विठ्ठलाई कृपाळे ||२||{"\n"}{"\n"}
          आनाथ विप्र तुका | कृपा दृष्टी विलोका | {"\n"}वीनंती आरताची | भाव एकला एका ||{"\n"}
          आरती रंग साळे | विठ्ठलाई कृपाळे ||३||
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