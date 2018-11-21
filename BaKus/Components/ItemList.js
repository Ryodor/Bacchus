import React from 'react';
import { StyleSheet, Text, View ,FlatList } from 'react-native';
 
 class ItemList extends React.Component {
  render() {
    var JsonResto = require('../json/list')
    return (
        <View style={styles.container}>
            <Text>{this.props.name}</Text>
            <Text>{this.props.description}</Text>
            <Text>{this.props.menu}</Text>
            <Text>{this.props.price}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
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
export default ItemList;