import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            नमियेली निजरंग माऊली ।{"\n"}समाधी या निगडी ।।१।।{"\n"}
            केला सर्वांचा निजभावे उध्दार ।{"\n"}सर्वस्व जाले अवतार ।{"\n"}नरदेह सर्वोत्तम हे सर्व ।{"\n"}कृष्णा वेण्या थडी ।।२।।{"\n"}
            भक्ती भावाने विचरोनी ।{"\n"}संकीर्तन रंगणी ।{"\n"}प्रेमे नाचतसे निजधानी ।{"\n"}सर्वार्थ करोनी ।{"\n"}देव केला गडी ।।३।।{"\n"}
            मार्गशिर्ष या विभूती ।{"\n"}मासात हे तिथी ।{"\n"}कृष्ण दशमी पुण्यतिथी ।{"\n"}संत कीर्ती ।{"\n"}उभविली देह गुढी ।।४।।{"\n"}
            तुकाविप्र या संत संगी ।{"\n"}कीर्तन प्रेमरंगी ।{"\n"}नाचत उभा या कलयुगी ।{"\n"}नमुनी संत योगी ।{"\n"}धन्य होय गडी ।।५।।
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