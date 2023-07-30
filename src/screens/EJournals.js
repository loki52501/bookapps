import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const EJournals = () => {
  const websiteUrl = 'https://ieeexplore.ieee.org/browse/periodicals/title'; // Replace with the URL you want to open

  return (
    <View style={styles.container}>
      <WebView source={{ uri: websiteUrl }} style={styles.webView} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});

export default EJournals;