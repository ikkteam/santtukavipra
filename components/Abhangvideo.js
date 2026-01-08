import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';

const Abhangvideo = () => {
  const videoLinks = [
    'https://www.youtube.com/embed/yUyDN_rHOCU',
    'https://www.youtube.com/embed/qXGRp-GbJio',
    'https://www.youtube.com/embed/UXztWsFjSTI',
    'https://www.youtube.com/embed/ijrgsuKE1n8',
    'https://www.youtube.com/embed/yksDbvK3LQw',
    'https://www.youtube.com/embed/cNcAhCPyxHA',
    'https://www.youtube.com/embed/ZCe3PN56gyw',
    'https://www.youtube.com/embed/Q88JcOS_2YA',
    'https://www.youtube.com/embed/z_U0C4sWqE4',
    'https://www.youtube.com/embed/RnaYXw_Tovc',
    'https://www.youtube.com/embed/KvYuEH_BlH4',
    'https://www.youtube.com/embed/LgxFbTIS6F4',
    'https://www.youtube.com/embed/iwBTQCMx8YM',
    'https://www.youtube.com/embed/Yq2GamEWf0s',
    'https://www.youtube.com/embed/LHC9-eoCqeo',
    'https://www.youtube.com/embed/fxRchuQqkJA',
  ];

  return (

    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.innerContainer}>
        {videoLinks.map((link, index) => (
          <View key={index} style={styles.videoWrapper}>
            <WebView
              source={{ uri: link }}
              style={styles.video}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              allowsFullscreenVideo={true}
              mediaPlaybackRequiresUserAction={false}
              mixedContentMode="always"
            />
          </View>
        ))}
      </View>
    </ScrollView>
    
  );
};

export default Abhangvideo;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 30,
  },
  innerContainer: {
    alignItems: 'center',
    width: '100%',
  },
  videoWrapper: {
    width: '90%',
    maxWidth: 350,
    height: 210,
    marginBottom: 20,
  },
  video: {
    flex: 1,
  },
});
