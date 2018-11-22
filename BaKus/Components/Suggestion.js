import React from 'react';

import { Dimensions, StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

class Suggestion extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('../assets/placeholder.jpg')}/>
                <View style={styles.text}>
                    <Text style={styles.title}>
                    {this.props.name}
                    </Text>
                    <Text style={styles.proposition}>
                    {this.props.menu}
                    </Text>
                    <Text style={styles.price}>
                    {this.props.price}
                    </Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    image:{
        margin: 5,
        width: '95%',
        maxHeight: 200,
        borderRadius:8,
    },
    container: {
        width: width-20,
        height: 350,
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
        marginRight: 10,
        marginLeft: 10,
        alignItems: 'center',
        marginBottom:10,
    },
    name:{
        position: 'relative',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        fontSize: 20
    },
    title:{
        color: "#FA0",
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    proposition:{
        color: "#555",
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        fontSize: 20
    },
    price:{
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right',
        color: '#FA0'
    },
    text:{
        width: '100%',
    }
})
export default Suggestion;