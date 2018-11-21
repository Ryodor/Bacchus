import React from 'react';

import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity, InlineImage } from 'react-native';

class Score extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        var stars = [];
        for(var i = 0; i<5; i++){
            if(i<this.props.stars) stars.push(<Image source={require('../assets/star.png')} style={styles.star}/>)
            else stars.push(<Image source={require('../assets/emptyStar.png')} style={styles.star}/>)
        }
        return (
            <View style={styles.container}>
                {stars}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
        marginTop: 10,
        marginBottom: 10,
    },
    star:{
        height: 35,
        width: 35,
        marginLeft: 2,
        marginRight: 2,
    }
})
export default Score;