import React from 'react';

import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity, FlatList } from 'react-native';
import Fav from './Fav'

class FavList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        var json = require('../json/list.json');
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Favoris
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
                    <Fav image={item.image} name={item.name}/>
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
    },
    container:{
        marginTop: 20,
        marginBottom: 30
    }
})

export default FavList;