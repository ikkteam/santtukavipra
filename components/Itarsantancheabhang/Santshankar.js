import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            सांप्रदाई तुकोबाचा । वारकरी पंढरीचा || १ ||{"\n"}
            शंकराजी बाबा संत । साधु प्रसिद्ध विरक्त || २ ||{"\n"}
            देखियेले पंढरीसी । सुख, जाहाले जीवासी || ३ ||{"\n"}
            तुकाविप्र म्हणे भेटी । चंद्रभागा वाळंवंटी || ४ ||{"\n"}{"\n"}

            सखाराम विठोबाचा । वासी येक पंढरीचा || १ ||{"\n"}
            भोळा विरक्त प्रेमळ । साधु अंतर निर्मळ || २ ||{"\n"}
            सत्वगुणी वीतरागी । वेडा दिसतसे जगी || ३ ||{"\n"}
            तुकाविप्र भेटी लाभ । पारी गरुड स्वयंभ || ४ ||
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