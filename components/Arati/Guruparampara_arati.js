import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Abhangrvaishishte = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <View style={styles.card}>
        <ScrollView
          style={styles.innerScroll}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{ paddingVertical: 10 }}
        >
          <Text style={styles.text}>
            आदीमूर्ती परात्पर | नारायेण आवतार ||{"\n"}
            सांप्रदाय मूळ प्रमाण सद्गुरू माळा |{"\n"}आरती नारायेण  ||१||{"\n"}{"\n"}
            नारायेण कृपाबळे | अत्रीचीया पुण्य फळे | {"\n"}दत्त अवतार पूर्ण ||{"\n"}
            सद्गुरू माळा |आरती नारायेण ||२||{"\n"}{"\n"}
            तिन्ही देव अनुसया | सूत झाले एक काया | {"\n"}सर्व कुळ गौरवर्ण ||{"\n"}
            सद्गुरू माळा |आरती नारायेण ||३||{"\n"}{"\n"}
            दत्तात्रेय महाराज | त्रिभुवन महाकाज |{"\n"} सांगितले जनार्दन |||{"\n"}
            सद्गुरू माळा |आरती नारायेण ||४||{"\n"}{"\n"}
            जनार्दन सत्य कृपे | भानुदास कुळ तपे | {"\n"}एकनाथ प्रतिष्ठाण ||{"\n"}
            सद्गुरू माळा |आरती नारायेण ||५||{"\n"}{"\n"}
            अनंत श्रीकृपे एकनाथ | भक्ति प्रेम सुख | {"\n"}विठ्ठल ही ब्रम्ह खूण ||{"\n"}
            सद्गुरू माळा |आरती नारायेण ||६||{"\n"}{"\n"}
            विठ्ठल ही कृपा सत्य | विप्रनाथ प्रेम नित्य | {"\n"}तुकाविप्र तीर्थ कृष्ण ||{"\n"}
            सद्गुरू माळा |आरती नारायेण ||७||
          </Text>
        </ScrollView>
      </View>
    </LinearGradient>
  )
}

export default Abhangrvaishishte

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#faf9f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    width: '90%',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    height: '100%', // 👈 defines visible scroll area inside card
    overflow: 'hidden', // keep scroll indicator inside
  },
  innerScroll: {
    flex: 1,
  },
  text: {
    fontFamily: 'VesperLibre-Bold',
    fontSize: 18,
    lineHeight: 26,
    color: '#3a2b1e',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
})
