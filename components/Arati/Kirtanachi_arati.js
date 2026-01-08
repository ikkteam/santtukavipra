import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>
          ओवाळू आरती कीर्तन रंगा। {"\n"}हरि कीर्तन रंगा । {"\n"}श्रोते वक्ते गुरुदेव संगा ||{"\n"}

          नित्य नेम, कथा रंग ऐसा वाढत असो। {"\n"}सर्वकाळ प्रेमा अंगी कीर्तन वसो ||१||{"\n"}{"\n"}
          लोटांगण घालोनीया वंदिली पाये। {"\n"}संकीर्तनी रुप डोळे भरुनी पाहे ||{"\n"}
          ओवाळू आरती कीर्तन रंगा। {"\n"}हरि कीर्तन रंगा । {"\n"}श्रोते वक्ते गुरुदेव संगा || २ ||{"\n"}{"\n"}

          अलींगला रंग प्रेमे कीर्तनी हरी । {"\n"}आनंदे पूजीले ज्यासी गर्जती चारी ||{"\n"}
          भावे ओवाळीली भक्ती कीर्तन सभा। {"\n"}तुकाविप्र हा नाचत उभा ||{"\n"}
          ओवाळू आरती कीर्तन रंगा। {"\n"}हरि कीर्तन रंगा । {"\n"}श्रोते वक्ते गुरुदेव संगा ||३||
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