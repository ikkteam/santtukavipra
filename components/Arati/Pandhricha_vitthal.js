import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>
          सदभावे आरती विठ्ठल तुज देवा | {"\n"}विटेवरल्या स्वामी उभया निजभावा ||{"\n"}{"\n"}
          भिमातिर वासी देवाधी  देवा | {"\n"}करुणा सिंधु म्हणती राधा माधवा ||{"\n"}
          जयदेव जयदेव जय रुक्मिणी रमणा | {"\n"}वोवाळू आरती विठ्ठल समचरणा ||{"\n"}
          जयदेव जय देव || १ ||{"\n"}{"\n"}
          पंचाग्नी मस्तकी मुकुट साजीरा | {"\n"}चरणी वाहे भीमा जगद् उद्धारा ||{"\n"}
          विष्णु वरल्या भूमी पंढरिया चक्रा | {"\n"}संत साधू योगे विश्रांती थारा ||{"\n"}
          जयदेव जयदेव जय रुक्मिणी रमणा | {"\n"}वोवाळू आरती विठ्ठल समचरणा ||{"\n"}
          जयदेव जय देव ||२||{"\n"}{"\n"}
          सदभावे  आरती देवाही केली | {"\n"}विनंती करी वस्तु अभंग पावली ||{"\n"}
          पितांबरे करा कृपा साउली | {"\n"}तुकाविप्र पदी  त्रिभुवन वोवाळी ||{"\n"}
          जयदेव जयदेव जय रुक्मिणी रमणा | {"\n"}वोवाळू आरती विठ्ठल समचरणा ||{"\n"}
          जयदेव जय देव ||३||
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