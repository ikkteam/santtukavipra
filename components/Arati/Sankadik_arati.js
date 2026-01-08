import { View, Text, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>
          संत सणकादिक भक्त मिळाले अनेक |{"\n"}
          साधू मिळाले अनेक |{"\n"}
          स्वानंदे गर्जती पाहू आले कवतीक ||१||{"\n"}{"\n"}

          नवल होता हे आरती देवाधिदेवा |{"\n"}
          राजा देवाधिदेवा |{"\n"}
          स्वर्गेहून सुरवर पाहू येताती केशवा |{"\n"}{"\n"}

          नरनारीचे टप टप पडले नयना |{"\n"}
          टप टप पडले नयना |{"\n"}
          ओवाळीता श्रीमूख चरणी नापूरे मना ||२||{"\n"}{"\n"}

          नवल होता हे आरती देवाधिदेवा |{"\n"}
          राजा देवाधिदेवा |{"\n"}
          स्वर्गहून सुरवर पाहू येताती केशवा |{"\n"}{"\n"}

          एका जनार्दनी मंगल कौतुके गाती |{"\n"}
          मंगल आरत्या गाती |{"\n"}
          मिळाले वैष्णव, मिळाले साधू,{"\n"}
          जय जयकार गर्जती ||३||{"\n"}{"\n"}

          नवल होता हे आरती देवाधिदेवा |{"\n"}
          राजा देवाधिदेवा |{"\n"}
          स्वर्गहून सुरवर पाहू येताती केशवा |
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