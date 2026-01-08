import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const Dindi = () => {
  const phoneNumber = '91+9373430369'; // replace with your number (include country code, no '+' symbol)

  const openWhatsApp = () => {
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent('राम कृष्ण हरी ')}`;
    Linking.openURL(url).catch(() => {
      alert('WhatsApp is not installed on your device');
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openWhatsApp} style={styles.button}>
        <Text style={styles.buttonText}>WhatsApp वर उघडा</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dindi;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#25D366',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
