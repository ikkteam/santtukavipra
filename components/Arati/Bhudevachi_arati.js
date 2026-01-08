import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.text}>
            आरती वेद शास्त्रा । ग्रंथ वेदांत सारा ।। {"\n"}जाणोनी  वीचरती  । तया आरती थोरा ।।धृ।।{"\n\n"}
            प्रसंग नित्य पूजा । विप्र नामया ध्वजा ।। {"\n"}भूभार हरणार्थ । साधू योगीराजा ।।{"\n\n"}
            दुर्बोध तीर्थे जाले । तैसे पायी दावीले ।। {"\n"}दुर्गुण काये ते आता । गुण वेगळे केले ।।{"\n\n"}
            भूदेवा ज्ञान घना । तुकाविप्र प्रार्थना ।। {"\n"}कीर्तन प्रेमरंग। तारु उघड जन ।।
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