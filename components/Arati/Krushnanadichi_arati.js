import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>
          और कोटी तीर्था । वद्य तू जननी ||{"\n"}
          पवन स्पर्शे जडमूढ | पावन तुझेनी ||{"\n"}
          जलरुपी अवतार । हरीहरा वनी ||{"\n"}
          कलीयुगी हे वस्ती | तुझ्या कृपेनी ||{"\n"}
          जयदेवी जयदेवी । जय श्री कृष्णे माते ||{"\n"}
          ओवाळू आरती। हरीहर सुख सरीते ||{"\n"}
          || जयदेवी जयदेवी ||१||{"\n"}{"\n"}
          स्मरणमात्रे पावन । करीसी तू सकळा ||{"\n"}
          अनंत नामे तुझी अनंतशा लीला ||{"\n"}
          तुझेनी योगे। पापे होती धुरळा ||{"\n"}
          म्हणोनि माझी वाणी। हीन दीन उद्धरा ||{"\n"}
          जयदेवी जयदेवी । जय श्री कृष्णे माते ||{"\n"}
          ओवाळू आरती। हरीहर सुख सरीते ||{"\n"}
          || जयदेवी जयदेवी ||२||{"\n"}{"\n"}
          श्री कृष्णे माऊली। हे तुजला विनती ||{"\n"}
          हीन दीन सुख हे माझे। राहो तव चित्ती ||{"\n"}
          विश्वास नेमे । दे क्षमा शांती ||{"\n"}
          तुकाविप्र कृपा करावी पूर्ती ||{"\n"}
          जयदेवी जयदेवी । जय श्री कृष्णे माते ||{"\n"}
          ओवाळू आरती। हरीहर सुख सरीते ||{"\n"}
          ।। जयदेवी जयदेवी ||३||
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