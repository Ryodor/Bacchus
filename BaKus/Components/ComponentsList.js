import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View ,FlatList } from 'react-native';
import ItemList from './ItemList'
 
 class ComponentsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    var JsonResto = require('../json/list')
    var search = this.props.search
    var restos = JsonResto.restos.filter(item => item.type.includes(search.toLowerCase()))
    return (
      <FlatList style={styles.list} 
      data={restos}
      renderItem={({item}) => 
      <TouchableOpacity 
      onPress={() => this.props.navigation.navigate('Dtl', {
              itemId: item.id
          })
      }
  >
        <ItemList
                  name={item.name} 
                  description={item.description}
                  menu={item.menu}
                  price={item.price} 
                  image={item.image}/>
                  </TouchableOpacity>
      }
    />
    );
  }
}



const styles = StyleSheet.create({
  list:{
      flex: 1,
      color: '#eee'
  },
  container: {
      minWidth: 350,
      position: 'relative',
      marginTop: 10,
      backgroundColor: '#eee',
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
  },
  image:{
    borderRadius: 400,
    borderWidth: 3,
    borderColor: '#fa0',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 5,
}
});
export default ComponentsList;