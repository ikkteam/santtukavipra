import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';
import RNFS from 'react-native-fs';
import LinearGradient from 'react-native-linear-gradient';

const Bhagvatabhang = () => {
  const [showPDF, setShowPDF] = useState(false);
  const pdfAsset = 'bhagvat.pdf';
  const localPath = `${RNFS.DocumentDirectoryPath}/${pdfAsset}`;
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    const copyPDF = async () => {
      const fileExists = await RNFS.exists(localPath);
      if (!fileExists) {
        await RNFS.copyFileAssets(pdfAsset, localPath);
        console.log("PDF कॉपी झाली:", localPath);
      }
    };
    copyPDF();
  }, []);

  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      {!showPDF ?
        <View>
          <Text style={styles.infoText}>
            संत तुकाविप्र यांनी भागवताच्या सर्व स्कंदांवर अभंगातून भाष्य केले आहे.
            त्यातील बरेच शिल्लक आहे आणि काही नष्ट झाले आहे.
            जे उपलब्ध आहे त्यातील दहाव्या स्कंदाचा पहिला अध्याय येथे PDF स्वरूपात दिला आहे.
            ज्यांना संत साहित्यात रुची आहे त्यांनी आमच्याशी संपर्क साधल्यास
            सगळे उपलब्ध साहित्य पहावयास आणि अभ्यास करण्यास मिळेल.
          </Text>
          <TouchableOpacity style={styles.pdfButton} onPress={() => setShowPDF(true)}>
            <Pdf source={{ uri: `file://${localPath}` }} style={styles.pdfThumbnail} />
          </TouchableOpacity>
        </View>
        :
        <Pdf
          source={{ uri: `file://${localPath}` }}
          style={{ flex: 1, width: screenWidth }}
          enablePaging={false}
          horizontal={false}
          fitWidth={true}
          enableAnnotationRendering={true}
          onLoadComplete={(numberOfPages) => {
            console.log(`PDF loaded with ${numberOfPages} pages`);
          }}
          onError={(error) => console.log('PDF Error:', error)}
        />
      }
    </LinearGradient >
  );

};

export default Bhagvatabhang;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
    paddingBottom: 50
  },

  infoText: {
    fontSize: 18,
    color: '#3a2b1e',
    fontFamily: 'VesperLibre-Bold',
    lineHeight: 26,
    textAlign: 'justify',
    marginBottom: 20,
  },
  pdfButton: {
    width: '100%',
    height: 200,
    borderWidth: 1,
    borderColor: '#ccc',
    alignSelf: 'center',
    marginBottom: 20,
  },
  pdfThumbnail: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  pdfContainer: {
    flex: 1,
    width: '100%',
  },
});
