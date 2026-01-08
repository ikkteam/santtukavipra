import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            नीवृत्ती नाथ | शंकर आवतार || १ ||{"\n"}
            जड मुढ तारावया । धरीयेली नरकाया ।{"\n"}कलयुगी प्रीती फार || २ ||{"\n"}
            हें ची युगायुगीं काया । संत जन्म धरोनीया ।{"\n"}वाढवाया भक्तीसार || ३ ||{"\n"}
            तुकाविप्र म्हणे ऐसे । मानवची देव तैसे ।{"\n"}जडजीवा तारणार || ४ ||{"\n"}{"\n"}

            शंकर स्वामी | निवृत्ती नाथ जाले || १ ||{"\n"}
            ज्ञानदेव सोपानासी । उपदेश मुक्ताईसी ।{"\n"}आवतार उघडीले  || २ ||{"\n"}
            करवीले पराक्रम । तीघाचेही केले नाम ।{"\n"}ब्रह्मडोळा दाखवीले || ३ ||{"\n"}
            तुकाविप्र म्हणे नाथ । नीवृत्ती श्री कृपावंत । {"\n"}सर्वगुणे सत्य जाले || ४ ||
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