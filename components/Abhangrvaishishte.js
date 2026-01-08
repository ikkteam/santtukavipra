import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Abhangrvaishishte = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.text}>संत तुकाविप्र यांच्या हस्तलिखित साहित्याचा अभ्यास करताना आवर्जून लक्षात येणारी अजून एक बाब म्हणजे त्यांनी प्रत्येक रचनेचा प्रकार काय आहे म्हणजे पद, अभंग वोवी, याचा उल्लेख त्या रचनेच्या सुरुवातीला केला आहे. एवढेच नाही तर तो अभंग कोणत्या प्रकारचा आहे याचा देखील उल्लेख संत तुकाविप्र यांनी आपल्या रचनेच्या आधी केलेला आहे.
            काही रचनांच्या आधी त्या कोणत्या वृत्तातील किंवा छंदातील आहेत याचा देखील उल्लेख  केलेला आढळतो.{'\n'}{'\n'}
            अभंगात अनेक बोली भाषेतील शब्द आहेत.
            प्रकृती हा शब्द प्रक्रती असा लिहिला आहे . चित्त हा शब्द चीत असा आहे . आकाश लिहिताना ते आकाश लिहितात परंतु आकाशी लिहिताना आकासी असे लिहितात .
            {'\n'}
            अशा अनेक बाबी यात निदर्शनाला आल्या आहेत .{"\n"}
          </Text>
          <Text style={styles.styletext}>आपल्याला लक्षात आलेल्या बाबी आमच्याकडे पाठवाव्या. आपल्या नावासहित आम्ही त्या बाबींचा सहभाग या app मध्ये करू</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default Abhangrvaishishte

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#faf9f6',
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 30
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
    fontSize: 18,
    lineHeight: 26,
    color: '#3a2b1e',
    textAlign: 'justify',
    paddingVertical: 4
  },
  styletext: {
    fontFamily: 'VesperLibre-Bold',
    color: '#555555',
    fontSize: 16,
    lineHeight: 22,
    marginTop: 12,
    textAlign: 'justify'
  }
})
