import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const data = [
  {
    image: require('../images/ekmukhi.jpg'),
    description: 'पंढरपूर - एक मुखी दत्त मंदिरातील शालिग्राम स्वयंभू मूर्ती',
  },
  {
    image: require('../images/ekmukhidatta.jpg'),
    description: 'अंजनवती - एक मुखी दत्त मूर्ती आणि संत तुकाविप्र यांची समाधी',
  },
  {
    image: require('../images/ekmukhimandir.jpg'),
    description: 'पंढरपूर - एक मुखी दत्त मंदिर',
  },
  {
    image: require('../images/dhundiraj.jpg'),
    description: 'बोरबन - धुंडीराज गणेशाची स्वयंभू मूर्ती',
  },
  {
    image: require('../images/nrusih.jpg'),
    description: 'ब्रम्हपुरी - नृसिंह गणेश',
  },
  {
    image: require('../images/borbanvitthal.jpg'),
    description: 'बोरबन - विठ्ठल मूर्ती',
  },
  {
    image: require('../images/tarkoba.jpg'),
    description: 'बोरबन - तारकोबा समाधी',
  },
  {
    image: require('../images/santtukavipra.jpg'),
    description: 'अंजनवती - संत तुकाविप्र समाधी मंदिर',
  },
  {
    image: require('../images/vitthalmadir.jpg'),
    description: 'ब्रम्हपुरी - विठ्ठल रुक्मिणी मंदिर',
  },
  {
    image: require('../images/vitthal.jpg'),
    description: 'ब्रम्हपुरी - विठ्ठल रुक्मिणी मूर्ती',
  },
  {
    image: require('../images/gondi.jpg'),
    description: 'गोंदी - गोंदी येथील विठ्ठल मूर्ती',
  },
];

const Devasthan = () => {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {data.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image style={styles.image} source={item.image} />
            <Text style={styles.title}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

export default Devasthan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: 'center',
  },

  card: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.1,
    resizeMode: 'contain',
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontFamily: 'VesperLibre-Bold',
    color: '#3a2b1e',
    textAlign: 'center',
  },
});
