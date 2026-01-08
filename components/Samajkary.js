import { StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';

const images = [
  require("../images/samajkary_1.jpg"),
  require("../images/samajkary_2.jpg"),
  require("../images/samajkary_3.jpg"),
  require("../images/samajkary_4.jpg"),
  require("../images/samajkary_5.jpg"),
];

const { width } = Dimensions.get('window');
const IMAGE_WIDTH = width * 0.9;

const Samajkary = () => {
  const [imageHeights, setImageHeights] = useState([]);

  useEffect(() => {
    const loadHeights = async () => {
      const heights = await Promise.all(
        images.map((img) =>
          new Promise((resolve) => {
            const source = Image.resolveAssetSource(img);
            const ratio = source.height / source.width;
            resolve(IMAGE_WIDTH * ratio);
          })
        )
      );
      setImageHeights(heights);
    };

    loadHeights();
  }, []);

  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {images.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={[
              styles.image,
              {
                width: IMAGE_WIDTH,
                height: imageHeights[index] || 200,
              },
            ]}
            resizeMode="contain"
          />
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

export default Samajkary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  image: {
    marginBottom: 50,
    alignSelf: 'center',
  },
});
