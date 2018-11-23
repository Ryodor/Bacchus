import React from 'react';

import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity, ScrollView } from 'react-native';
import ComponentsList from './ComponentsList'
import Header from './Header'

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const text = ''+ this.props.navigation.getParam('search');
        return (
            <View style={styles.container}>  
                <Header navigation={this.props.navigation}/>
                <ComponentsList navigation={this.props.navigation} style={styles.list} search={text}/>
            </View>
        )
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    list:{
        color:'#eee'
    }
    
})
export default List;