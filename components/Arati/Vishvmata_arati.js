import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>
          आरती विश्वमाते | प्रीय विश्व श्री कांते | {"\n"}वोवाळू प्रेम भावे | निजानंद भरीते ||धृ||{"\n"}
          सर्वासी सुखकारी पापा टाप संहारी | {"\n"}दर्शने मोक्ष जोडे | काय वर्णु मी थोरी || {"\n"}
          प्रसन्न जयासी होणे | पद अक्षय देणे | {"\n"}माऊली सर्व जना | सर्वदा पूर्ण पणे || {"\n"}
          आरती विश्वमाते | प्रीय विश्व श्री कांते | {"\n"}वोवाळू प्रेम भावे | निजानंद भरीते ||१||{"\n"}{"\n"}

          आंनद सर्व काळे | देई प्रेम कल्लोळे | {"\n"}पहाया कृपा दृष्टी | करोंनीया सिंधू बोले || {"\n"}
          सद्गुरू माय लक्ष्मी | काया वाचा मनोधर्मी | {"\n"}वोंवाळी विप्र तुका | नित्य अर्चनी नेमी ||{"\n"}
          आरती विश्वमाते | प्रीय विश्व श्री कांते | {"\n"}वोवाळू प्रेम भावे | निजानंद भरीते ||२||
        </Text>
      </View>
    </LinearGradient>
  )
}

export default Santanna

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#faf9f6',
    padding: 16,
  },
  card: {
    width: '90%',
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
    textAlign: "center"
  }
})