import React from 'react';
import { StyleSheet, Text, View , Image , FlexDirection, WebView} from 'react-native';
 
 /*style={{flex:1,flexDirection:'row', overflow:'scroll'}}*/

 class ItemList extends React.Component {
  render() {
    var JsonResto = require('../json/list')
    return (
        <View style={styles.container}> 
       
    
        <Image style ={styles.image} source={require('../assets/placeholder.jpg')}/>
        <View style={styles.myText}>
            <Text>{this.props.name}</Text>
            <Text>{this.props.description}</Text>
            <Text>{this.props.menu}</Text>
            <Text>{this.props.price}</Text>
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
    
      minWidth: 35,
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
  },
  image:{
    flexDirection:'column',
    
	
    width:100,
    height:100,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: '#fa0',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 5,
    marginRight: 23,

},

 
});
export default ItemList;