import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            धर्णीधर येक देव ।{"\n"}चिंचवडी योगीराव || १ ||{"\n"}
            गणपती उपासक ।{"\n"}भोळा प्रेमळ भाविक || २ ||{"\n"}
            शुद्ध विदेही विरक्त ।{"\n"}निरुपम जीवन्मुक्त || ३ ||{"\n"}
            देखियेला डोळे भरी ।{"\n"}तेणे आनंद अंतरी || ४ ||{"\n"}
            तुकाविप्र सुखी जाला ।{"\n"}धर्णीधर पाहियेला || ५ ||
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