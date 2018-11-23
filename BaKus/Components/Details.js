import React from 'react';

import { Dimensions, StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity, ScrollView } from 'react-native';
import Menu from './Menu';
import Score from './Score';
import GoogleMap from './GoogleMap';

const { width, height } = Dimensions.get('window');


class Details extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }
    getImage(image){
        switch (image) {
            case 'bk':
              return require("../assets/bk.jpg");
            case 'mc':
              return require("../assets/macdo.jpg");              
            case 'ot':
              return require("../assets/otacos.jpg"); 
            case 'sw':
              return require("../assets/subway.png"); 
            case 'bs':
              return require("../assets/bagelstein.jpg"); 
            case 'qk':
              return require("../assets/quick.jpg"); 
          }
    }
    render() {
        const itemId = ''+ this.props.navigation.getParam('itemId');
        var json = require('../json/list.json');
        var resto = json.restos.filter(item => item.id == itemId)
        resto = resto[0]
        return (
            <ScrollView 
            contentContainerStyle={{flexGrow : 1, justifyContent : 'center',}}>
                <View style={styles.container}>
                     <Image
                    source={this.getImage(resto.image)}
                    style={styles.image}
                    />
                    <View style={styles.nameContainer}><Text style={styles.name}>
                    {resto.name}
                    </Text></View>
                    <Score stars={resto.stars} style={styles.stars}/>
                    <GoogleMap/>
                    <Menu style={styles.menu} proposition={resto.menu}/>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    scrollContainer:{
        flexGrow : 1, 
        justifyContent : 'center'
    },
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#eee',
    },
    image:{
        width: '160%',
        height: '38%',
        top:-5,
        borderRadius: 400,
        borderWidth: 3,
        borderColor: '#fa0',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 15 },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        elevation: 5,
    },
    name:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 5,
    },
    nameContainer:{
        position: 'absolute',
        top: 220,
        backgroundColor: '#fa0',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fa0',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 6,
        marginRight: 10,
        marginLeft: 10,
        alignItems: 'center',
        marginBottom:10,
    },
    stars:{
        marginTop: 5,
        marginBottom: 5,
        color: '#fa0',
        fontSize: 20,
        left: 0
    },
    menu:{
        marginTop: 10
    }
})
export default Details;