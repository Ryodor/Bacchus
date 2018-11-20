import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home'
import List from './Components/List'
import Detail from './Components/Details'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Wesh les Morray!</Text>
        <Home/>
        <List/>
        <Detail/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});