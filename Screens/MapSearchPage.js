import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet,TextInput, Alert} from "react-native";
import { useEffect, useState } from "react";
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import * as FileSystem from 'expo-file-system';

const theme = "";

const readJSON = async () => {
    const jsonString = await FileSystem.readFileAsync('../assets/maptheme.json', { encoding: 'utf8' });
    const data = JSON.parse(jsonString);
    const theme = data;
  }




    const style = StyleSheet.create({
        container: {
            flex: 1,
        },
        map: {
            width: '100%',
            height: '100%',
        },
        searchbar:{
             borderColor: "#000",
             color:"#000"
        },
        searchbarinside:{
            display:"flex",
            height: 70,
            fontSize:25,
            borderColor: "grey",
            borderRadius:30,

        },

    })

    export default function MapSearch() {
        const [regiao, setRegiao] = useState({
          latitude: -15.753235760569678,
          longitude: -47.87862551603111,
          latitudeDelta: 0.0014,
          longitudeDelta: 0.0014,
        });
      
        
        
        useEffect(() => {
            const getPermissions = async () => {
                try {
                  let { status } = await Location.requestBackgroundPermissionsAsync();
                  if (status !== 'granted') {
                    alert('Não foi possivel acessar a localização atual.');
                    return;
                  }
                  var currentLocation = await Location.getCurrentPositionAsync({});
                  setRegiao(currentLocation.coords);
                } catch (error) {
                  console.error(error);
                }
              };
              getPermissions();
        }, [setRegiao]);
      
        return (
          <View style={style.container}>
            <TextInput style={{flex: 0, backgroundColor: '#000', margin:14}} placeholder="teste" />
            <MapView customMapStyle={[
    {
        "elementType": "all",
        "stylers": [
            {
                "hue": "#6600ff"
            },
            {
                "saturation": -11
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "33"
            },
            {
                "hue": "#6600ff"
            },
            {
                "lightness": "2"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-58"
            },
            {
                "lightness": "28"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-58"
            },
            {
                "lightness": "28"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-58"
            },
            {
                "lightness": "28"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-58"
            },
            {
                "lightness": "28"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": "-58"
            },
            {
                "lightness": "28"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-58"
            },
            {
                "lightness": "28"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-58"
            },
            {
                "lightness": "28"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-58"
            },
            {
                "lightness": "28"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#5e00ff"
            },
            {
                "saturation": -79
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "lightness": 30
            },
            {
                "weight": 1.3
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#5e00ff"
            },
            {
                "saturation": -16
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -72
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -65
            },
            {
                "hue": "#1900ff"
            },
            {
                "lightness": 8
            }
        ]
    }
]} style={style.container} initialRegion={regiao}>
              <Marker  
              coordinate={{
              latitude: -15.753235760569678,
              longitude: -47.87862551603111
        }}  
        title="My Marker"
        description="Some description"
        />
            </MapView>
          </View>
        );
      }