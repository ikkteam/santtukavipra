import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            बहेरा पिसा आणि जग मित्र नागा ।{"\n"} भक्त पांडुरंगा | आवडते || १ ||{"\n"}
            विसोबा खेचर | जातीचे ब्राह्मण ।{"\n"} दामाजी प्रमाण | पंता ऐसे || २ ||{"\n"}
            मालोपंत आणि | नरहरी पंत ।{"\n"} विठोबाचे भक्त | कलयुगी || ३ ||{"\n"}
            तुकाविप्र म्हणे | विठोबाचे दास ।{"\n"} विजयी प्रत्यक्ष | त्रिभुवनी || ४ ||
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