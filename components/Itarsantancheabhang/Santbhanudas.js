import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            नीऊर्ती  सोपान मुक्ताबाई मीरा ।{"\n"}भेटी कटी करा धांव घेती || १ ||{"\n"}
            भानुदास चक्र-पाणी सूर्यपंत ।{"\n"}वारकरी संत जनार्दन || २ ||{"\n"}
            स्वामी येकनाथ वारकरी भोळे ।{"\n"}उदार मोकळे ब्रह्मज्ञानी || ३ ||{"\n"}
            तुकाविप्र म्हणे भावार्थी निसीम ।{"\n"}ब्राह्मण हे ब्रह्म जाणीतले || ४ ||{"\n"}{"\n"}

            भानुदास चक्रपाणी सूर्यपंत  | {"\n"}स्वामी येकनाथ | प्रतिष्ठानी || १ ||{"\n"}
            आजीवरी त्यांचे | कुळ त्याची  पाडे ।{"\n"}चालीले रोकडे | कलयुगी || २ ||{"\n"}
            विठोबाचे दास | कुलीन चांगले ।{"\n"}भूदेव झाले | असंख्यात || ३ ||{"\n"}
            तुकाविप्र तया | कृपेचा विस्तार | {"\n"}विठ्ठल साचार | ब्रह्मपूरी || ४ ||
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