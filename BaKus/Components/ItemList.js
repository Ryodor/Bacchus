import React from 'react';
import { StyleSheet, Text, View , Image , FlexDirection, WebView} from 'react-native';
 
 /*style={{flex:1,flexDirection:'row', overflow:'scroll'}}*/

 class ItemList extends React.Component {
  getImage(){
    switch (this.props.image) {
        case 'bk':
          return require("../assets/bk_logo.png");
        case 'mc':
          return require("../assets/macdo_logo.png");              
        case 'ot':
          return require("../assets/otacos_logo.png"); 
        case 'sw':
          return require("../assets/subway_logo.png"); 
        case 'bs':
          return require("../assets/bagelstein_logo.jpeg"); 
        case 'qk':
          return require("../assets/quick_logo.png"); 
      }
}
  render() {
    var JsonResto = require('../json/list')
    return (
        <View style={styles.container}> 
       
    
       <View style={styles.imgContainer}><Image style={styles.image} source={this.getImage()}/></View>
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

},
imgContainer:{
  margin: 5,
  height: 100,
  width: 100,
  maxHeight: 200,
  borderRadius:100,
  borderWidth: 2,
  borderColor: '#fa0',
  overflow: 'hidden'
},

 
});
export default ItemList;