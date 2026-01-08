import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            वीर भीऊबा सद्भक्त । भोळा प्रेमळ विरक्त || १ ||{"\n"}
            विप्रनाथाचा वरदी । वीर भीऊबा सद्बुद्धी || २ ||{"\n"}
            विठोबाचा भक्तराज । साक्षात्कारी कीर्तिध्वज || ३ ||{"\n"}
            वीर वैष्णव साजिरा | भक्त विठोबाचा तुरा || ४ ||{"\n"}
            तुकाविप्र म्हणे भला । भक्त भीऊबा देखिला || ५ ||
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