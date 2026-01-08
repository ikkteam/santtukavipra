import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            पांडुरंग दादा आष्टक लिहिले | {"\n"}ते रूपा आणले पाहिजे की || १ ||{"\n"}
            जैसी केली स्तुति तैसे कृपाबळ | {"\n"}दिधले निर्मळ पाहिजे की हो || २ ||{"\n"}
            सर्वज्ञ चेतूरा विनवणी काय | {"\n"}धरीयेले पाय कृपेसाठी || ३ ||{"\n"}
            तुकाविप्र म्हणे खरी बोली बोला | {"\n"}जाणूनी संताला संत पणे || ४ ||
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