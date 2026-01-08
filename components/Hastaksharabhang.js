import { View, StyleSheet, Image, ScrollView, Dimensions, Text } from 'react-native';
import React from 'react';

const images = [
  require("../images/1.jpg"),
  require("../images/2.jpg"),
  require("../images/3.jpg"),
  require("../images/4.jpg"),
  require("../images/5.jpg"),
  require("../images/6.jpg"),
  require("../images/7.jpg"),
  require("../images/8.jpg"),
  require("../images/9.jpg"),
  require("../images/10.jpg"),
  require("../images/11.jpg"),
  require("../images/12.jpg"),
  require("../images/13.jpg"),
  require("../images/14.jpg"),
  require("../images/15.jpg"),
  require("../images/16.jpg"),
  require("../images/17.jpg"),
];

const { width } = Dimensions.get('window');
const IMAGE_SIZE = width * 0.9;

const Hastaksharabhang = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {images.map((image, index) => (
        <Image key={index} style={styles.image} source={image} />
      ))}
      <Text style={styles.text}>
        संत तुकाविप्र यांच्या हस्ताक्षरात अनेक अभंग आहेत त्यातील काही येथे दिले आहेत.
        आपणास संत तुका विप्र यांच्या साहित्याचा अभ्यास करायचा असेल तर आमच्याशी संपर्क साधा
      </Text>
    </ScrollView>
  );
};

export default Hastaksharabhang;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    resizeMode: 'contain',
    marginBottom: 10,
    alignSelf: 'center',
  },
  text: {
    fontSize: 17,
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: 'center',
    fontFamily: 'VesperLibre-Bold',
    lineHeight: 22
  },
});
