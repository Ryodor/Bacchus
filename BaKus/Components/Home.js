import React from 'react';
import { Button, View, Text } from 'react-native';
import SuggestionList from './SuggestionList'

class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <SuggestionList/>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Gmp')}
          />
          <Button
            title="Go to Custom Marker"
            onPress={() => this.props.navigation.navigate('Cmk')}
          />
        </View>
      );
    }
  }

  export default HomeScreen;