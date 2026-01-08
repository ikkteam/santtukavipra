import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            ज्ञानराजया विष्णु दैवता ।{"\n"}नमन तुजला विनंती हे आता || १ ||{"\n"}
            येकनाथजी ज्ञानराजया ।{"\n"}येकची करा पूर्ण ते दया || २ ||{"\n"}
            ज्ञानदेव तूं येकनाथजी ।{"\n"}विनवणी कृपा करी ते आजी || ३ || {"\n"}
            तुकली तनु पाहिजे प्रीती ।{"\n"}विप्र नाम या ज्ञानसंपत्ती || ४ ||{"\n"}{"\n"}

            ज्ञानेश्वर येक-नाथ महाराजे | {"\n"}वेदार्थ गुढ जे | उगवीले || १ ||{"\n"}
            दूर होत्या जव-ळची आल्या गोष्टी | {"\n"}उघडी या द्रीष्टी | ब्रह्मडोळा || २ ||{"\n"}
            तुकाविप्र म्हणे प्रसिद्धची थोर ।{"\n"}केले उपकार | संतानीया || ३ ||{"\n"}{"\n"}

            ज्ञानेश्वरा ऐसे अवतार जाले ।{"\n"}पंढरीसी गेले खेळावया || १ ||{"\n"}
            नामदेवा संगे खेळले हुतुतू ।{"\n"}वेदश्रुति तंतू धरोनिया || २ ||{"\n"}
            तुम्ही आम्ही खेळू आपुलीया पाडे ।{"\n"}घेऊ फाडो  वाटे  लाभ रासी || ३ ||{"\n"}
            तुकाविप्र म्हणे पंढरी खेळावे ।{"\n"}कीर्तिध्वज व्हावे त्रिभुवनी || ४ ||{"\n"}{"\n"}

            ज्ञानदेव सेवे गुरु | {"\n"}ग्रंथी आला प्रेम पुरु || १ ||{"\n"}
            ज्ञानदेवी नोहे टीका ।{"\n"}स्वधर्म तारु हे नौका || २ || {"\n"}
            गुरुसेवेचे हे सार ।{"\n"}ज्ञानदेवी ग्रंथ थोर || ३ ||{"\n"}
            भाविकांसी कल्पद्रुम ।{"\n"}तुकाविप्र पूर्ण काम || ४ ||{"\n"}{"\n"}

            विष्णु अवतार ज्ञानदेव संत।{"\n"}प्रमाण कलीत चालविती भिंताडे || १ ||{"\n"}
            पशु रेडा वेद बोलाविला । {"\n"}ज्यांनी प्रसिद्ध पैठणी गौतमीचे तटाकी || २ || {"\n"}
            भुदेवा संतोष बहुतचि केला ।{"\n"}सत्य उगविला गीतार्थ जयाला || ३ ||{"\n"}
            तुकाविप्र ऐसे थोर ज्ञानदेव ।{"\n"}ज्यानी केला भव अवघाची कोरडा || ४ ||{"\n"}{"\n"}

            आवतार हे देव कलयुगी ।{"\n"}ज्ञानदेव  मानव तनु जगी || १ ||{"\n"}
            उद्धराया पतीत जन लोका।{"\n"}जड  मुढ आनाथ दिनरंका || २ ||{"\n"}
            तुकाविप्र आभंग आवडीचा ।{"\n"}ज्ञानदेव उघडा  प्रचीतीचा || ३ ||
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