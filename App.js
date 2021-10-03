import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import CarItem from './Components/Car_item/index'

export default function App() {
  return (
    <View style={styles.container}>      
      <StatusBar style="auto" />
      <CarItem/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === "android"?StatusBar.currentHeight:0
  },
});
