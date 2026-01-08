import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const Hastakshar = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>
          संत तुकाविप्र यांच्या हस्तलिखित साहित्याच्या बाबतीत प्रथम दर्शनी
          लक्षात येणारी बाब म्हणजे संत तुकाविप्र यांचे सगळे लिखाण हे दीर्घ लिपीत आहे.
          यात सगळ्या वेलांटी दुसऱ्या आहेत तर सगळे उकार पहिले आहेत.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.highlightText}>
          आपणास काही विशेष बाबी दिसल्यास त्या आम्हाला पाठवाव्यात.
          आपल्या नावासहित त्या आमच्या ऍप मध्ये प्रकाशित केल्या जातील.
        </Text>
      </View>
    </LinearGradient>
  );
};

export default Hastakshar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // ✅ vertically center
    alignItems: 'center',     // ✅ horizontally center
    backgroundColor: '#faf9f6', // nice devotional bg
    padding: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 12,
    width: '92%',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 }
  },
  text: {
    fontFamily: 'VesperLibre-Bold',
    fontSize: 20,
    color: '#3a2b1e',
    lineHeight: 26,
    paddingVertical: 4
  },
  highlightText: {
    fontFamily: 'VesperLibre-Bold',
    fontSize: 18,
    color: '#6b4e25',
    marginTop: 10,
    lineHeight: 26
  },
  divider: {
    height: 1,
    backgroundColor: '#e6e0d6',
    marginVertical: 12
  }
});
