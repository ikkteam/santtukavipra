import { FlatList, Image, Dimensions, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const images = [
  { id: '1', uri: require("../images/haripath/1.png") },
  { id: '2', uri: require("../images/haripath/2.png") },
  { id: '3', uri: require("../images/haripath/3.png") },
  { id: '4', uri: require("../images/haripath/4.png") },
  { id: '5', uri: require("../images/haripath/5.png") },
  { id: '6', uri: require("../images/haripath/6.png") },
  { id: '7', uri: require("../images/haripath/7.png") },
  { id: '8', uri: require("../images/haripath/8.png") },
  { id: '9', uri: require("../images/haripath/9.png") },
  { id: '10', uri: require("../images/haripath/10.png") },
  { id: '11', uri: require("../images/haripath/11.png") },
  { id: '12', uri: require("../images/haripath/12.png") },
  { id: '13', uri: require("../images/haripath/13.png") },
  { id: '14', uri: require("../images/haripath/14.png") },
];

const { width } = Dimensions.get('window');
const IMAGE_SIZE = width * 1.1;
export default function ImageScroll() {
  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image
            source={item.uri}
            style={[styles.image]}
          />
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
}

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
});
