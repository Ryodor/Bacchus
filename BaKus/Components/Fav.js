import React from 'react';

import { Dimensions, StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

class Fav extends React.Component {
    constructor(props) {
        super(props)
    }
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
        return (
            <View style={styles.container}>
                <View style={styles.imgContainer}><Image style={styles.image} source={this.getImage()}/></View>
                <Text style={styles.title}>
                {this.props.name}
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
    },
    image:{
        height: 80,
        width: 80,
        maxHeight: 200,
    },
    imgContainer:{
        backgroundColor: '#fff',
        margin: 5,
        height: 80,
        width: 80,
        maxHeight: 200,
        borderRadius:100,
        borderWidth: 2,
        borderColor: '#fa0',
        overflow: 'hidden'
    },
    name:{
        position: 'relative',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        fontSize: 20
    }
})
export default Fav;