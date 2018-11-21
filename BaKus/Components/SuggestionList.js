import React from 'react';

import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity, InlineImage, FlatList } from 'react-native';
import Suggestion from './Suggestion'

class SuggestionList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        var json = require('../json/list.json');
        return (
            <View>
                <FlatList
                horizontal
                data={json.restos}
                renderItem={({item}) => <Suggestion name={item.name}/>}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        flexDirection:'row',
        marginTop: 10,
        marginBottom: 10,
    }
})
export default SuggestionList;