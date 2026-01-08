import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>
            भला गर्जे नाम हारी । कोणी तरी आसेना || १ ||{"\n"}
            चोखा महारची होता । हरी सत्ता पालटी || २ ||{"\n"}
            जनी दासी खरी होती । नामे कीर्ती विठल || ३ ||{"\n"}
            नाम विठल गर्जली । उद्धरीली सर्वस्वे || ४ ||{"\n"}
            तुकाविप्र म्हणे गर्जा । लावा ध्वजा विठल || ५ ||{"\n"}{"\n"}
            नरहरी जाती | सोनार पंचाळ ।{"\n"}सद्भक्त निर्मळ | विठोबाचा || १ ||{"\n"}
            परीसा भागवता | कुटुंब सहित ।{"\n"}विठोबाचा भक्त | कलयुगी || २ ||{"\n"}
            चोखा आणि बंका | जातीचे माहार ।{"\n"}दास धुरंधर | वीठोबाचे || ३ ||{"\n"}
            तुकाविप्र म्हणे | सहीत कुटुंब ।{"\n"}भक्त हे स्वयंभ | उद्धरीले || ४ ||
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