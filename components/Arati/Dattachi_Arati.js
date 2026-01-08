import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>
          आरती दत्त देवा ब्रम्हा विष्णु सदाशिवा ||{"\n"}
          त्रैमूर्ती गुरुराया | कृपा लोभ करावा ||{"\n"}
          आरती दत्त देवा ||१||{"\n"}{"\n"}
          अभंग विनवणी | भावे जोडोनी पाणी ||{"\n"}
          केली हे परीसावी | कथा नाम रंगणी ||{"\n"}
          आरती दत्त देवा ||२||{"\n"}{"\n"}
          सत्संग हरीकथा | नित्य नेम समर्था ||{"\n"}
          प्रमाण भेट तुझी | हेच पाहिजे आता ||{"\n"}
          आरती दत्त देवा ||३||{"\n"}{"\n"}
          सद्गुरू दास आहे | केली विनंती पाहे ||{"\n"}
          प्रसिद्ध कृपा दृष्टी । तुका विप्र हेतू आहे ||{"\n"}
          आरती दत्त देवा आरती दत्त देवा ब्रम्हा विष्णु सदाशिवा ||४||
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