import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FirstScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d9c659'
  },
  text: {
    fontSize: 20,
    color: 'white'
  }
});

export default FirstScreen;