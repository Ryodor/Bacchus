import React from 'react';
import {geolocated} from 'react-geolocated';


// class Demo extends React.Component {
//     render() {
//       return !this.props.isGeolocationAvailable
//         ? <div>Your browser does not support Geolocation</div>
//         : !this.props.isGeolocationEnabled
//           ? <div>Geolocation is not enabled</div>
//           : this.props.coords
//             ? <table>
//               <tbody>
//                 <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
//                 <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
//                 <tr><td>altitude</td><td>{this.props.coords.altitude}</td></tr>
//                 <tr><td>heading</td><td>{this.props.coords.heading}</td></tr>
//                 <tr><td>speed</td><td>{this.props.coords.speed}</td></tr>
//               </tbody>
//             </table>
//             : <div>Getting the location data&hellip; </div>;
//     }
//   }

//   class Demo extends React.Component {
//     render() {
//         return (
//             <View>
//             <Text>Your browser does not support Geolocation</Text>
//             <Text>{this.props.isGeolocationEnabled}</Text>
//             <Text>Geolocation is not enabled</Text>
//             <Text>{this.props.coords}</Text>
//             <Text>latitude</Text>
//             <Text>{this.props.coords.latitude}</Text>
//             <Text>longitude</Text>
//             <Text>{this.props.coords.longitude}</Text>
//             <Text>altitude</Text>
//             <Text>{this.props.coords.altitude}</Text>
//             <Text>heading</Text>
//             <Text>{this.props.coords.heading}</Text>
//             <Text>speed</Text>
//             <Text>{this.props.coords.speed}</Text>
//             </View>
//           );
//         }
//       }
    
   
//   export default geolocated({
//     positionOptions: {
//       enableHighAccuracy: false,
//     },
//     userDecisionTimeout: 5000,
//   })(Demo);


import React, { Component } from 'react';
import { View, Text, PermissionsAndroid } from 'react-native';

class GeolocationExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }
//AndroidManifest.xml:<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

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
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    );
  }
}


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

export default GeolocationExample;