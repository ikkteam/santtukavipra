import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            बाबा राघोपंत | निसिम वैरागी |{"\n"}संत कलीयुगी | ज्ञाननीधी || १ ||{"\n"}
            देशस्त ऋग्वेदी | धर्म परायण |{"\n"}समर्थ ब्राम्हण | ब्रम्हकर्मे|| २ ||{"\n"}
            सर्वस्वे विठ्ठली | जयाचा भावार्थ |{"\n"}प्रेमळ विरक्त | सत्वगुणी || ३ ||{"\n"}
            कर्म धर्म अती | आवडते देवा |{"\n"}राघोपंत बाबा | नामधार || ४ ||{"\n"}
            उत्तम साधन | सर्व काळ ज्याचा |{"\n"}भावार्थ भक्तीचा | मेरू जैसा|| ५ ||{"\n"}
            धन्यपणे काळ | पंढरी वैकुंठी |{"\n"}निरंतर गोष्टी | देवा सवे || ६ ||{"\n"}{"\n"}

            सर्व संतांमाजी | विख्यात प्रमाण | {"\n"}विठ्ठल स्मरण | सर्व काळ || १ ||{"\n"}
            ऐसीयाचा काळ | अंत होणे आला |{"\n"}सकळ संताला | सुचवीले || २ ||{"\n"}
            अंतकाळी प्रेमा | निसिम वेदांती | {"\n"}धन्य राघोपंती | म्हणविले || ३ ||{"\n"}
            सद्वीद्या संपन्न | विनीत सर्वासी | {"\n"}समता तयासी | तेची एक || ४ ||{"\n"}
            विश्वासे शेवट | भजने लावीला |{"\n"}धन्यपणे गेला | नीज धामा || ५ ||{"\n"}
            आधिक आषाढ | कृष्ण महापर्व |{"\n"}द्वादशी अपूर्व | भूमीवार् || ६ ||{"\n"}{"\n"}

            सोळासे त्रेण्णव | शक शालिवान | {"\n"}अभंग कीर्तन | संत सभा || १ ||{"\n"}
            समस्ताचे साक्षी | धन्य संतराव | {"\n"}सत्कर्मी वैष्णव | निरुपम || २ ||{"\n"}
            खर संवछरी | ब्रम्हानंद युक्त |{"\n"}गेले राघोपंत | निजधामा || ३ ||{"\n"}
            प्रसिद्ध पवाड | पंढरी भरोनी | {"\n"}उरवीला जनी | सांगावया || ४ ||{"\n"}
            तुकाविप्र वाणी | सार्थका लागली | {"\n"}चरित्र विठ्ठली | निरुपम || ५ ||
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