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
        return (
            <ScrollView style={styles.container}>                
                <ComponentsList/>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default List;