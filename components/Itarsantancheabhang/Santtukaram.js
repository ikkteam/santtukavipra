import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Santtukaram = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            बद्रीवनासी यावया ।{"\n"}काय कारण तुकीया || १ ||{"\n"}
            पूर्वजन्मी हेत केला ।{"\n"}तैसा तूर्त फळा आला || २ ||{"\n"}
            विनायकासी पूजावे ।{"\n"}हेत केला होता जीवे || ३ ||{"\n"}
            तुका विप्र हेत होणे ।{"\n"}बद्रीवनी गुरु देणे || ४ ||
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>संत तुकाराम आणि कुटुंब</Text>
          <Text style={styles.text}>
            ऐसे किती याची मऱ्हाष्ट्र देशात {"\n"}विठोबाचे भक्त निरुपम || १ ||{"\n"}
            देशो देशी भक्त अनंत अपार |{"\n"}विठ्ठल साचार देवाचे या || २ ||{"\n"}
            तुकाराम वाणी कुणबी जातीचा |{"\n"}भक्त विठोबाचा निरुपम || ३ ||{"\n"}
            कान्होबा तयाचा बंधु कीर्तीध्वज |{"\n"}पुत्र  भक्तराज  नारायेण || ४ ||{"\n"}
            तुकाविप्र म्हणे नातू पंतु त्यांचे |{"\n"}भक्त विठोबाचे कुटुंबीत || ५ ||
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>संत तुकाराम - चिंचोली </Text>
          <Text style={styles.text}>
            चिंचोलीचा तुकाराम |{"\n"}ब्रह्मचारी निरुपम || १ ||{"\n"}
            ज्ञान वैराग्य आगळे |{"\n"}शुद्ध अंतर मोकळे || २ ||{"\n"}
            डोळेभरी देखियेले ।{"\n"}तेणे चित्त संतोषले || ३ ||{"\n"}
            तुकाविप्र म्हणे भेटी ।{"\n"}ब्रह्मपुरी कृष्णातटी || ४ ||
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>संत तुकाराम - बेलेश्वर </Text>
          <Text style={styles.text}>
            तुर्त देखियेल नर ।{"\n"}संत साधु अवतार || १ ||{"\n"}
            तुकाराम बेलेश्वरी ।{"\n"}योगी राणा अवतारी || २ ||{"\n"}
            सर्व गुणे उदासीन ।{"\n"}जया मातीसम धन || ३ ||{"\n"}
            भोळा विरक्त सात्विक ।{"\n"}देखियेला साधु येक || ४ ||{"\n"}
            तुकाविप्र म्हणे तूर्त ।{"\n"}ऐसे देखियेले संत || ५ ||
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>संत तुकाराम - देहू </Text>
          <Text style={styles.text}>
            तुकारामे  आण खरीच वाहीली ।{"\n"}दोघे जाती कली नर्कवासा || १ ||{"\n"}
            सकळ ही वर्ण येके ठाई खाती ।{"\n"}आवडती भ्रष्ट  खादाड ते || २ ||{"\n"}
            तुकाविप्र म्हणे याची वीसी आण ।{"\n"}वाहीली प्रमाण विठोबाची || ३ ||
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>संत तुकाराम - देहुकर </Text>
          <Text style={styles.text}>
            तुका तुका ऐसा | त्रिभुवनी केला ।{"\n"}वैकुंठासी नेला | पराक्रमे || १ ||{"\n"}
            ऐसा नामदेव | जागृत अभंग ।{"\n"}कीर्तन प्रसंग जेथे तेथे || २ ||{"\n"}
            पंढरी वैकुंठी | नामा वीराजतो ।{"\n"}अवतार देतो | भेटी लाभ || ३ ||{"\n"}
            तुकाविप्र म्हणे | सर्व सर्वत्रासी ।{"\n"}नामा दीवा निसी | भेटताहे || ४ ||
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default Santtukaram

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 30
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
    padding: 15,
    marginBottom: 12,
  },
  text: {
    fontFamily: 'VesperLibre-Bold',
    fontSize: 18,
    lineHeight: 26,
    color: '#3a2b1e',
    textAlign: "center"
  },
  title: {
    fontFamily: 'VesperLibre-Bold',
    fontSize: 20,
    lineHeight: 26,
    color: '#3a2b1e',
    paddingBottom: 20,
    textAlign: "center"
  },

})