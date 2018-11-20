// Navigation/Navigation.js
import React from 'react';
import { createStackNavigator } from 'react-navigation'
import Details from '../Components/Details'

const SearchStackNavigator = createStackNavigator({
//     Search: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
//     screen: Search,
//     navigationOptions: {
//       title: 'Rechercher'
//     }
//   },  
  Details: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Details,
    // navigationOptions: {
    //   title: 'Détailles'
    // }
  }
})

export default SearchStackNavigator