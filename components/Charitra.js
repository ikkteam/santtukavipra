import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';
import RNFS from 'react-native-fs';

const Rajaramcharitra = () => {
  const [localPath, setLocalPath] = useState(null);
  const pdfAsset = 'tukavipra_katha.pdf';
  const screenWidth = Dimensions.get('window').width;
  
  useEffect(() => {
    const copyPDF = async () => {
      const path = `${RNFS.DocumentDirectoryPath}/${pdfAsset}`;
      const fileExists = await RNFS.exists(path);
      if (!fileExists) {
        await RNFS.copyFileAssets(pdfAsset, path);
        console.log("PDF कॉपी झाली:", path);
      }
      setLocalPath(path); 
    };
    copyPDF();
  }, []);

  if (!localPath) {
    return <View style={styles.container} />; 
  }

  const pdfSource = { uri: `file://${localPath}` };

  return (
    <View style={styles.container}>
      <Pdf
        source={pdfSource}
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
    </View>
  );
};

export default Rajaramcharitra;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  fullPDF: {
    flex: 1,
    height: '100%',
  },
});