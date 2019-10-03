import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCCF',
  },
  welcome: {
    fontSize: 30,
    alignItems: 'center',
    margin: 10,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text styles={styles.welcome}>welcome to react-native</Text>
    </View>
  );
}
