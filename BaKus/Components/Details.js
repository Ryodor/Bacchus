import React from 'react';

import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity, Button } from 'react-native';
class Details extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <View style={styles.container}>                
                <Text style={styles.law}>Détails</Text>
                <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('HomeS')}
          />
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
export default Details;