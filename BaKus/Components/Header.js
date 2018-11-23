import React from 'react';
import { Button, View, Text, StyleSheet, Image  } from 'react-native';
import { SearchBar } from 'react-native-elements'
import SuggestionList from './SuggestionList'
import FavList from './FavList'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstQuery: '',
        }
    }
    
    onEnd(){
        let text = this.state.firstQuery;
        this.props.navigation.navigate('Lst', {
            search: text
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.profile} source={require('../assets/placeholder.jpg')}/>
                <SearchBar 
                round
                onEndEditing={this.onEnd.bind(this)}
                onChangeText={query => this.setState({ firstQuery: query })}
                style={styles.search}
                inputStyle={styles.searchInput}
                containerStyle={styles.searchContainer}
                placeholder="Rechercher..."
                value={this.props.navigation.getParam('search')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    profile:{
        width: 40,
        height: 40,
        borderRadius: 100,
        marginBottom: 10,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10
    },
    container: {
        marginTop: 30,
        backgroundColor: '#eee',
        flexDirection:'row', 
        flexWrap:'wrap',
        justifyContent: 'center'
    },
    searchInput: {
        backgroundColor: '#ccc'
    },
    searchContainer: {
        width: '80%',
        backgroundColor: '#eee',
        borderBottomColor: '#eee',
        borderTopColor: '#eee',
    }
});

export default Header;