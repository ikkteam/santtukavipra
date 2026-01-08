import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            सेना न्हाव्याचे काम देवे केले ।{"\n"} डोई केली रायास रिझविले || १ ||{"\n"}
            उंच नीच देवास ठावे नाही  ।{"\n"} कोणे जातीचा भक्त कोणे देही || २ ||{"\n"}
            तुकाविप्र तारील यात काये ।{"\n"} देवराया नवल कीती आहे || ३ ||{"\n"}
            सेना न्हावी जसवंत |{"\n"} थोर भक्त केले हे || ४ ||{"\n"}
            रंगनाथ रामदास | {"\n"}कृष्णदास जैराम || ५ ||{"\n"}
            महाराजा कृपाधना |{"\n"} ऐसा दीना उद्धरी || ६ ||{"\n"}
            तुकाविप्र म्हणे हाती | {"\n"}धरी प्रीती अनाथा || ७ ||
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default Santanna

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf9f6',
    padding: 16,
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 30
  },
  card: {
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
  }
})