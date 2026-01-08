import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>
          आरती ब्रह्मचर्या। तेजे प्रताप सूर्या ||{"\n"}
          श्रीराम दाशरथी। सौमित्र बंधुवर्या ||धृ|| {"\n"}{"\n"}


          निर्मल सत्व शुद्धी। लक्ष श्रीराम पदी ||{"\n"}
          सर्व दायक रुप । निश्चल येक बुद्धी ||{"\n"}
          प्रमाण राम आज्ञा पाळीयेली त्वा सुज्ञा || {"\n"}
          घेतले सेवा सुख। विचार पूर्ण प्राज्ञा || {"\n"}
          आरती ब्रह्मचर्या। तेजे प्रताप सूर्या ||१||{"\n"}{"\n"}


          द्वैत हा भाव नाही। राम सौमित्र नाही ||{"\n"}
          धन्य हा कीर्ती घोष | देती सर्वत्र ग्वाही || {"\n"}
          सदूरु विप्र तुका । राम सौमित्र सखा || {"\n"}
          कीर्तनी साध्य सदा। होवोनिया प्रेमपिका || {"\n"}
          आरती ब्रह्मचर्या। तेजे प्रताप सूर्या  ||२||
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