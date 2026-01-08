import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            संतोबा पवार शूरत्वे आगळा |{"\n"} शुद्ध भक्त भोळा विठोबाचा || १ ||{"\n"}
            कुटुंब सहित माणकोजी बावा  | {"\n"}बोधला वैष्णवा - माजी वंद्ये || २ ||{"\n"}
            ममतावा कांता भागीरथी सुन | {"\n"}स सूत्र निधान येमधर्म || ३ ||{"\n"}
            नातू भगवंत पंतु भोजराज | {"\n"}ऐसे कीर्ती ध्वज आजीवर || ४ ||{"\n"}
            तुकाविप्र म्हणे दास विठोबाचे | {"\n"}विजयी नेमाचे त्रिभुवनी || ५ ||
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