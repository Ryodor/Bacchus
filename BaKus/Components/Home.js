import React from 'react';
import { Button, View, ScrollView, Text, StyleSheet } from 'react-native';
import Header from './Header'
import SuggestionList from './SuggestionList'
import FavList from './FavList'

class HomeScreen extends React.Component {
    render() {
        return (
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    <Header navigation={this.props.navigation}/>
                    <FavList navigation={this.props.navigation}/>
                    <SuggestionList navigation={this.props.navigation}/>
                    <Button
                        title="Go to Geoloc"
                        onPress={() => this.props.navigation.navigate('Glc')}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollContainer:{
        flexGrow : 1, 
        justifyContent : 'center'
    },
    container: {
        backgroundColor: '#eee',
        flex: 1,
        justifyContent: 'center'
    },
    searchInput: {
        backgroundColor: '#ccc'
    },
    searchContainer: {
        backgroundColor: '#eee',
        borderBottomColor: '#eee',
        borderTopColor: '#eee',
    }
});

export default HomeScreen;