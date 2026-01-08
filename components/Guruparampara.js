import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Guruparampara = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView>
        <View style={styles.guruColumn}>
          <Text style={styles.guruText}>दत्त</Text>
          <Text style={styles.arrow}>↓</Text>
          <Text style={styles.guruText}>जनार्दन</Text>
          <Text style={styles.arrow}>↓</Text>
          <Text style={styles.guruText}>एकनाथ</Text>
          <Text style={styles.arrow}>↓</Text>
          <Text style={styles.guruText}>विप्रनाथ</Text>
          <Text style={styles.arrow}>↓</Text>
          <Text style={styles.guruText}>तुकाविप्र</Text>
        </View>
        <Text style={styles.text}>
          एकनाथ कृपे | अनंत वैष्णव |{'\n'} नाम नित्योत्सव | हरी गुरु प्रसाद{'\n'}
          एकनिष्ठ तप | सह्याद्रीचे तळी |{'\n'} कृष्णेचिया जळी | वेदवती संगम{'\n'}
          तुकाविप्र तया | कुळिचा प्रसाद |{'\n'} कीर्तन आनंद | हरी गुरु स्मरण{'\n'}{'\n'}
          अनंत कृपेनी | विठ्ठल कीर्तनी |{'\n'} सह्याद्री भुवनी | कृष्णेचिया तटाकी{'\n'}
          पुर्वपार व्रत | चालतची आले |{'\n'} नाथ विठ्ठले | नित्यनेमे चालले{'\n'}
          तुकाविप्र नातू | विठ्ठल संताचा |{'\n'} अनादि  बळीचा | नाम कथा हा धिंग{'\n'}{'\n'}
          विठ्ठल प्रसादे | विप्रनाथे मोठी |{'\n'} केली हातवटी | संकीर्तन निर्मळ{'\n'}
          विप्रनाथ स्वामी | पितर आपुले |{'\n'} प्रसन्न जाहले | बाळपणी अभंग{'\n'}
          तुकाविप्र ऐसे | पूर्वार्चित गाढे |{'\n'} निरंतर वाढे | हरी गुरु कीर्तन{'\n'}
        </Text>
      </ScrollView>
    </LinearGradient>
  )
}

export default Guruparampara

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  guruColumn: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  guruText: {
    fontSize: 18,
    color: '#FF512F',
    textAlign: 'center',
    lineHeight: 26,
    fontFamily: 'VesperLibre-Bold',
  },
  arrow: {
    color: '#999',
    fontSize: 18,
  },

  text: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 26,
    color: '#3a2b1e',
    fontFamily: 'VesperLibre-Bold',
  },
})
