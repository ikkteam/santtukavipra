import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            बोधले प्रसिद्ध वारकरी संत ।{"\n"}तुकोबा विख्यात वारकरी || १ ||{"\n"}
            कुटुंब सहित आजीवरी भाव ।{"\n"}तो चि अनुभव तया घरी || २ ||{"\n"}
            बहुतासी वाट दावीयेली संती ।{"\n"}थोर केली कीर्ति त्रिभुवनी || ३ ||{"\n"}
            तुकाविप्र म्हणे पंढरीसी चला ।{"\n"}भेटाया विठ्ठला कलयुगी || ४ ||{"\n"}{"\n"}

            सेतची पेरले | बोधल्या  बाबाचे ।{"\n"}कौतुक देवाचे | अघटीत || १ ||{"\n"}
            आणिली कणसे | थोटीया ताटासी ।{"\n"}दाविले जनासी | उघडची || २ ||{"\n"}
            तुकाविप्र म्हणे | विठ्ठल या देवे ।{"\n"}भरियेली पेवे | बोधल्याची || ३ ||
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