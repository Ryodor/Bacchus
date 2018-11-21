import React from 'react';
import { Button, View, Text, Dimensions, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');

class GoogleMap extends React.Component {
    render() {
               return <View accessible={true} style={styles.container}>
                   <Text>Google Map</Text>
                   <MapView style={styles.map} initialRegion={{ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }} />
                 </View>;
             }
  }


  const styles = StyleSheet.create({
    fadeIn: {
      width: 250,
      height: 50,
      backgroundColor: "#bdc3c7"
    },
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: "flex-end",
      alignItems: "center",
      borderRadius: 10,
      overflow: "hidden",
      height: 250,
      width: width - 20
    },
    map: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: 250,
      width: width - 20
    }
  });

  export default GoogleMap;