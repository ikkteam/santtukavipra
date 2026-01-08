import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            आण्णा अनंत उपाध्ये । संत पंढरी या मध्ये || १ ||{"\n"}
            भोळा भाविक प्रेमळ । सत्य अंतर निर्मळ || २ ||{"\n"}
            सत्वसीळ निरुपम । साधु सर्वज्ञ परम || ३ ||{"\n"}
            भेटी स्वानंदाची जाली । चित्त वृत्ती संतोषली || ४ ||{"\n"}
            प्रीती योग्य संत होये । त्याचे न सोडावे पाय || ५ || {"\n"}
            तुकाविप्र साचे तया । शुद्ध ऐसा विद्यार्थीया || ६ ||
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