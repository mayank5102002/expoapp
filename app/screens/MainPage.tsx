// src/screens/MainPage.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const MainPage = () => {
  const params = useLocalSearchParams();

  const {key, name} = params;

  return (
    <View style={styles.container}>
      <Text>This is the Main Page!</Text>
      <Text>Hello, {name}</Text>
      <Text>Key : {key}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainPage;
