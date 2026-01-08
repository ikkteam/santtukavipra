import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            मूर्ति मंगळ विख्यांत ।{"\n"}भोळा प्रेमळ विरक्त || १ ||{"\n"}
            सिद्धीबाई अर्ध अंग ।{"\n"}धन्ये उभयता योग || २ ||{"\n"}
            उपासना गजानन | {"\n"}शांति क्षमा सीळ ध्यान || ३ ||{"\n"}
            हे चि डोळा देखियेले ।{"\n"}तेणे चित्त संतोषले || ४ ||{"\n"}
            तुकाविप्र भक्ती भावा ।{"\n"}मूर्ति मंगळ वैष्णवा || ५ ||
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