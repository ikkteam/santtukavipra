import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            श्रीधर स्वामींचा | पुत्र मनोहार ।{"\n"}भाऊ नामधार | कथे उभा || १ ||{"\n"}
            रामाजी गोसोच्या  | घरी तारगांवी ।{"\n"}कथा हे बरवी | स्वानंदाची || २ ||{"\n"}
            सुखाचा पुतळा | मनोहर जोगी।{"\n"}उभा कथारंगी | नित्यनेमा || ३ ||{"\n"}
            तुकाविप्र आज्ञा | धार तया सभे ।{"\n"}संतकृपा शोभे | मनोहरी || ४ ||{"\n"}
            {"\n"}
            साजे हे बोलणे मनोहर संता ।{"\n"}श्रोते हो ऐकता धन्ये तुम्ही || १ ||{"\n"}
            माझीया प्रारब्धे ऐशा प्रसंगाची ।{"\n"}आणिले तुम्हास पाहावया || २ ||{"\n"}
            श्रोत्या वक्त्याचे पाहीले चेरण ।{"\n"}प्रारब्ध प्रमाण धन्य माझे || ३ ||{"\n"}
            तुकाविप्र सुख स्वानंद भरीत ।{"\n"}सूचना बहूत सद्गुणीया || ४ ||{"\n"}
            {"\n"}
            सापडला ज्ञानी अद्वैत बोधाचा ।{"\n"}ढीगारा प्रेमाचा मनोहर || १ ||{"\n"}
            शसी मनोहार चकोर हे श्रोते ।{"\n"}तुका कचा तेथे काय कीती || २ ||{"\n"}
            सहश्र भोजेनी आगांतूक येक ।{"\n"}ने घे पायी मुर्ख मानील तो || ३ ||{"\n"}
            तुकाविप्र पाथी  सहश्रा कौतुक ।{"\n"}आगांतूक यक बैसवीला || ४ ||
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