import React from 'react';

import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity, FlatList } from 'react-native';
import Suggestion from './Suggestion'

class SuggestionList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        var json = require('../json/list.json');
        return (
            <View>
                <Text style={styles.title}>
                    Choix de la Team
                </Text>
                <FlatList
                horizontal
                data={json.restos}
                renderItem={({item}) => 
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('Dtl', {
                            itemId: item.id
                        })
                    }
                >
                    <Suggestion image={item.image} name={item.name} menu={item.menu} price={item.price}/>
                </TouchableOpacity>
                }/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title:{
        color: '#fa0',
        marginLeft: 10,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default SuggestionList;