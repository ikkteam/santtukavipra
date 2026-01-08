import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            तुकोबाचे कुळी नि:सीम सद्भक्त ।{"\n"}विदेही विरक्त महादेव || १ ||{"\n"}
            कुलोद्धारी होय पुरुष प्रसिद्ध ।{"\n"}अंतःकर्ण  शुद्ध सत्य ज्याचे || २ ||{"\n"}
            वैष्णवाचा राव महादेव भोळा ।{"\n"}उदास मोकळा ब्रह्मनिष्ठ || ३ ||{"\n"}
            तुकाविप्र तया सेवेचा सेवक ।{"\n"}विठ्ठलचि एक महादेव || ४ ||{"\n"}{"\n"}

            महादेव भक्त पागवासी | {"\n"}होता पेशव्याच्या सेवेसी || १ ||{"\n"}
            एक वीध भाव सीवापासी | {"\n"}निष्ठा जडली कृष्णेश्वरासी || २ ||{"\n"}
            वारकऱ्यांचा होता हेत | {"\n"}महादेव न्यावा पंढरीत || ३ ||{"\n"}
            महादेव म्हणे वारकऱ्यांसी | {"\n"}नका नेवू पंढरीसी || ४ ||{"\n"}
            कृष्णेश्वरी पूर्ण भाव | {"\n"}हाची माझा विठो देव || ५ ||{"\n"}
            पाचारावे विठोबासी | {"\n"}माझ्या कृष्णेश्वर भेटीसी || ६ ||{"\n"}
            तुकाविप्र म्हणे अपूर्व | {"\n"}योग हरी हर भेट सुदैव || ७ ||{"\n"}{"\n"}

            वडगावी संतराव | {"\n"}बाबा एक महादेव || १ ||{"\n"}
            सत्वगुणी वीतरागी |  {"\n"}ब्रम्हचर्ये धन्य जगी || २ ||{"\n"}
            ज्ञान वैराग्य सद्भक्ती | {"\n"}तिन्ही ज्या अंगी वसती || ३ ||{"\n"}
            क्षमा दया शांती शीळ | {"\n"}शुद्ध भावीक प्रेमळ || ४ ||{"\n"}
            तुकाविप्र सुखरूप | {"\n"}ऐसे पाहोनी स्वरूप || ५ ||
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