import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Alerta from './componentes/Alerta';
import Pai from './componentes/Pai';

export default function App() {
  return (
    <View style={styles.container}>
      <Alerta/>
      <Pai/>
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
