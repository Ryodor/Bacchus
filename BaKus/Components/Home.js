import React from 'react';

import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <View style={styles.container}>                
                <Text style={styles.law}>Acceuille</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    law: {
        flex: 1,
        flexDirection: 'row',
        marginTop: '34%',
        fontSize: 10
    }
})
export default Home;