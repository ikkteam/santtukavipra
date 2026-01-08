import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            रोहिदास आणि | कबीर कमाल । {"\n"}प्रगटा आणिले | नामदेवे || १ ||{"\n"}
            नानकादी भक्त | प्रगट व्हावया |  {"\n"}मुख्य हाची पाया | नामदेव || २ ||{"\n"}
            कुर्मदास गोरा | सावता प्रगट । {"\n"}नामदेवे नीट | भक्त केले || ३ ||{"\n"}
            तुकाविप्र म्हणे | चोखामेळा बंका । {"\n"}नामदेवे लेका | उद्धरिले || ४  ||{"\n"}{"\n"}

            राजा त्रिलोचन | सजण कसाई । {"\n"}भक्त मीराबाई | गिरीधर || १ ||{"\n"}
            धना जाट कर्मा-बाई राका बाका । {"\n"}पीपा राजा सखा | नामयाचा || २ ||{"\n"}
            भक्ती परायेण | नामदेवे केले । {"\n"}राजे भले भले | धुरंधर || ३ ||{"\n"}
            तुकाविप्र म्हणे | नामा आवतार । {"\n"}प्रल्हाद साचार | उद्धव हा || ४ ||{"\n"}{"\n"}


            निऊर्ती  सोपान | ज्ञानेश मुक्ताई । {"\n"}नामयाचे पाई | पंढरीसी || १ ||{"\n"}
            विसोबा खेचर | चांगया प्रमाण । {"\n"}अखंड बैसणे | येके ठाई || २ ||{"\n"}
            नरहरी पर्सा  | भागवत जनी । {"\n"}श्रोते हे कीर्तनी | नामयाच्या || ३ ||{"\n"}
            तुकाविप्र म्हणे | नामा निरूपम । {"\n"}देवासी परम | आवडता || ४ ||
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