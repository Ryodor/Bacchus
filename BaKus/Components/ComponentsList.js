import React from 'react';
import { StyleSheet, Text, View ,FlatList } from 'react-native';
import ItemList from './ItemList'
 
 class ComponentsList extends React.Component {
  render() {
    var JsonResto = require('../json/list')
    return (
      <FlatList style={styles.list}
      data={JsonResto.restos}
      renderItem={({item}) => 
        <ItemList name={item.name} 
                  description={item.description}
                  menu={item.menu}
                  price={item.price}/>
      }
    />
    );
  }
}

const styles = StyleSheet.create({
  list:{
      flex: 1,
      marginTop: 25
  },
  container: {
      minWidth: 350,
      position: 'relative',
      marginTop: 10,
      backgroundColor: '#fff',
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#fa0',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 12, height: 20 },
      shadowOpacity: 0.9,
      shadowRadius: 5,
      elevation: 5,
      marginBottom: 10,
  }
});
export default ComponentsList;