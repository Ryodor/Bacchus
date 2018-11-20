// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Home from './Components/Home'
// import List from './Components/List'
// //import Detail from './Components/Details'
// import Navigation from './Navigation/Navigation'

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Wesh les Morray!</Text>
//         <Home/>
//         <List/>
//         <Navigation/>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// In App.js in a new project

import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import List from './Components/List';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Dtl: {
    screen: List
  }
});

export default createAppContainer(AppNavigator);