import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './Components/Home'
import Detail from './Components/Details'
import List from './Components/List'


const RootStack = createStackNavigator(
  {
    Hme: HomeScreen,
    Dtl: Detail,
    Lst: List,
  },
  {
    initialRouteName: 'Hme',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}