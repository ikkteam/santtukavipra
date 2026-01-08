import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            नाथ अंतर निर्मळ । वास त्रिपुरी गोपाळ || १ ||{"\n"}
            ज्ञान वैराग्य कऱ्हाडी । मूर्ती गोपाळ उघडी || २ ||{"\n"}
            विश्वमान्य एक धेंडे | नाथ गोपाळ रोकडे || ३ ||{"\n"}
            संत गोपाळ वैष्णव | देखियेला योगिराव || ४ ||{"\n"}
            तुकाविप्र तुर्त भेटी । जाली अभंग त्रिपुटी || ५ ||
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