import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            ब्रम्हचारी नारायण । कवि श्रीरंग प्रमाण || १ ||{"\n"}
            ज्ञानी विरक्त निचाड । साधु निष्काम निर्भीड || २ ||{"\n"}
            इंद्रपूरवासी संत । योगीराव अगर्वीत || ३ ||{"\n"}
            देखियेला डोळे भरी । संत येक ब्रह्मचारी || ४ ||{"\n"}
            तुकविप्र सुखावला । येक पाहोनी तयाला || ५ ||
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