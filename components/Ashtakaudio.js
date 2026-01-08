import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const Ashtakaudio = () => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://tukavipra.org/ashtak-pathan-audio/' }} />
    </View>
  );
};

export default Ashtakaudio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

