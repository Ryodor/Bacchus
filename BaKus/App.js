import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './Components/Home'
import Details from './Components/Details'
import List from './Components/List'
import Gmap from './Components/GoogleMap'
import CMark from './Components/CustomMarker'


const RootStack = createStackNavigator(
  {
    Hme:{
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Dtl: {
      screen: Details,
      navigationOptions: {
        header: null,
      },
    },
    Lst: List,
    Gmp: Gmap,
    Cmk : CMark,
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