import React from 'react';
import { Button, View, Text, Dimensions, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const LATITUDE = 3.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421;

class GoogleMap extends React.Component {
    render() {
               return (
                  <View accessible={true} style={styles.container}>
                      <Text>Google Map</Text>
                      <MapView style={styles.map} initialRegion={{ 
                        latitude: LATITUDE, 
                        longitude: LONGITUDE  , 
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA, 
                      }} />
                  </View>
               );
             }
  }

  
  const styles = StyleSheet.create({
    fadeIn: {
      width: 250,
      height: 50,
      backgroundColor: "#bdc3c7"
    },
    container: {
      justifyContent: "flex-end",
      alignItems: "center",
      borderRadius: 10,
      overflow: "hidden",
      height: 225,
      width: width - 20,
      marginBottom: 10
    },
    map: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: 250,
      width: width - 10
    }
  });

  export default GoogleMap;