import React from 'react';
import { Button, View, Text, Dimensions, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421;

class GoogleMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        latitude: null,
        longitude: null,
        error: null,
    };
  }
  componentDidMount() {
    requestCameraPermission()
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }
    render() {
               return (
                  <View accessible={true} style={styles.container}>
                      <Text>Google Map</Text>
                      <MapView style={styles.map} initialRegion={{ 
                        latitude: this.state.latitude, 
                        longitude: this.state.longitude, 
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

  async function requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          'title': 'Cool Photo App Camera Permission',
          'message': 'Cool Photo App needs access to your camera ' +
                     'so you can take awesome pictures.'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera")
      } else {
        console.log("Camera permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
  }

  export default GoogleMap;