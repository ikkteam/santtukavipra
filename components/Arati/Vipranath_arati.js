import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Santanna = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>
          आरती विप्र देवा | नाथ एक माणकोबा | {"\n"}अनाथ दीन बंधु | ब्रम्हा विष्णु श्री शिवा ||{"\n"}
          त्रिमूर्ति वृक्ष रूपा | तुम्हा स्वामी घनकृपा | {"\n"}वोवाळू प्रेम भावे | विप्रनाथ माय बापा ||१||{"\n"}{"\n"}
          आरती विप्र देवा | नाथ एक माणकोबा | {"\n"}अनाथ दीन बंधु | ब्रम्हा विष्णु श्री शिवा ||{"\n"}
          जडमूढ तारावया | अवतार जगी या | {"\n"}नररूप नारायेण | माणकोबा नामध्येया ||२||{"\n"}{"\n"}
          आरती विप्र देवा | नाथ एक माणकोबा | {"\n"}अनाथ दीन बंधु | ब्रम्हा विष्णु श्री शिवा||{"\n"}
          विप्रनाथ नाम साजे | गुरु मायेबाप माझे | {"\n"}समाधी वृक्ष रुप | पूर्ण ब्रम्ह अवतार सहजे ||३||{"\n"}{"\n"}
          आरती विप्र देवा | नाथ एक माणकोबा | {"\n"}अनाथ दीन बंधु | ब्रम्हा विष्णु श्री शिवा ||{"\n"}
          देवाधी देव गुरु | विप्रनाम भवतारू | {"\n"}दास मी दीन तूका | गुरु कृपा विप्र तरु ||{"\n"}
          आरती विप्र देवा | नाथ एक माणकोबा | {"\n"}अनाथ दीन बंधु | ब्रम्हा विष्णु श्री शिवा ||४||
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