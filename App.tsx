import 'react-native-get-random-values';
import { StatusBar } from 'expo-status-bar';
import { model, Model } from 'mobx-keystone';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

@model('mobx-keystone-issue/Store')
class Store extends Model({}) {}

export default function App() {
  const store = new Store({});

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
