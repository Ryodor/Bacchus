import React from 'react';

import { Dimensions, StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity, InlineImage } from 'react-native';
const { width, height } = Dimensions.get('window');


class Menu extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        var json = require('../json/list.json');
        var resto = json.restos[1];
        return (
            <View style={styles.container}>
                <Text style={styles.name}>
                Menu du jour:
                </Text>
                <Text style={styles.proposition}>
                {this.props.proposition}
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: width-20,
        position: 'relative',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fa0',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 5,
    },
    name:{
        position: 'relative',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fa0'
    },
    proposition:{
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        fontSize: 20
    }
})
export default Menu;