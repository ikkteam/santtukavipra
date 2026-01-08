import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            पंढरीची वारी कबीराने केली ।{"\n"} पाउला पाउली येज्ञे जोडी || १ ||{"\n"}
            सजणा कसाब महमद सेक  ।{"\n"} विदेही नानक वारी करी || २ ||{"\n"}
            पीपाधना जाट दादु खोजु कर्मा ।{"\n"} मीरा मुक्ता नामा भक्तराज || ३ ||{"\n"}
            तुकाविप्र म्हणे पंढरी वैकुंठी ।{"\n"} संत ऐशा कोटी शतमाळा || ४ ||
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