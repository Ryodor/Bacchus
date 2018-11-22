import React from 'react';

import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity, ScrollView } from 'react-native';
import ComponentsList from './ComponentsList'

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const text = ''+ this.props.navigation.getParam('search');
        return (
            <ScrollView style={styles.container}>  
                <ComponentsList search={text}/>
            </ScrollView>
        )
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    
})
export default List;