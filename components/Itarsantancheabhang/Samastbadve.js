import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            बडवे हे माझे देव । तेथे काय दुजा भाव || १ ||{"\n"}
            अष्ट अधिकारी संत । हे तो विठ्ठल समर्थ || २ ||{"\n"}
            देवा तया भेद नाही । ऐसी वेद श्रुती गाही || ३ ||{"\n"}
            देव अष्ट अधिकारी । नररूपे या पंढरी || ४ ||{"\n"}
            संत रूपे देशोदेशी । भेद नाही यासी त्यासी || ५ ||{"\n"}
            तुकाविप्र सर्वा पायी  । ठेवी आवडीने डोई || ६ ||
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