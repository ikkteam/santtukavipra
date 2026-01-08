import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>
          अनादि सिद्ध माय भुवन त्रय जननी | {"\n"}तुझेनी योगे देवा थोरी य तिन्ही ||{"\n"}
          आकाश पृथ्वी वायु जळदेव वन्ही | {"\n"}सर्व ही आले उदया तुझ्या कृपेने ||{"\n"}
          जय देवी जय देवी रुक्मिणी माते | {"\n"}वोवाळू आरती तुज सद्गुरू सुख भरिते ||१||{"\n"}{"\n"}


          सर्वाधार माय तुझ्या कृपेचा | {"\n"}तुझ्या कृपे वेदा फुटली ही वाचा ||{"\n"}
          तेथे आंबे किती पाड आमुचा | {"\n"}घाली पान्हा आता पूर्ण कृपेचा ||{"\n"}
          जय देवी जय देवी रुक्मिणी माते | {"\n"}वोवाळू आरती तुज सद्गुरू सुख भरिते ||२||{"\n"}{"\n"}


          तुकाविप्र दास अनादि गुरुमाय | {"\n"}कृपा करून दाखवी हीना तू पाय ||{"\n"}
          त्रीभुवन पालन करिसी बहु तुजला काय | {"\n"}विनंती करणे ऐसी भेटी तू देय ||{"\n"}
          जय देवी जय देवी रुक्मिणी माते | {"\n"}वोवाळू आरती तुज सद्गुरू सुख भरिते ||३||
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