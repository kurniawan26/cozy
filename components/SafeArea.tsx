import { StyleSheet, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { Platform, StatusBar } from 'react-native';

const SafeArea = ({ children }: any) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default SafeArea;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 24,
  },
});
