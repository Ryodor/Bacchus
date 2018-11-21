import React from 'react';

import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity, InlineImage } from 'react-native';

class Suggestion extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.proposition}>
                {this.props.name}
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: 325,
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
        marginRight: 17,
        marginLeft: 17
    },
    name:{
        position: 'relative',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        fontSize: 20
    },
    proposition:{
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        fontSize: 20
    }
})
export default Suggestion;