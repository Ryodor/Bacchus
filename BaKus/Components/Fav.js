import React from 'react';

import { Dimensions, StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

class Fav extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('../assets/placeholder.jpg')}/>
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
        margin: 5,
        height: 80,
        width: 80,
        maxHeight: 200,
        borderRadius:100,
        borderWidth: 2,
        borderColor: '#fa0'
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