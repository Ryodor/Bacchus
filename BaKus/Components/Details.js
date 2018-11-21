import React from 'react';

import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import Menu from './Menu';
import Score from './Score';
import GoogleMap from './GoogleMap';

class Details extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        var json = require('../json/list.json');
        var resto = json.restos[0];
        return (
            <View style={styles.container}>
                <Image
                source={require('../assets/placeholder.jpg')}
                style={styles.image}
                />
                <Text style={styles.name}>
                {resto.name}
                </Text>
                <Score stars={resto.stars} style={styles.stars}/>
                <GoogleMap/>
                <Menu style={styles.menu} proposition={resto.menu}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#eee',
    },
    image:{
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
        position: 'absolute',
        left: 10,
        top: 255,
        color: '#fff',
        fontSize: 20,
        elevation: 6
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