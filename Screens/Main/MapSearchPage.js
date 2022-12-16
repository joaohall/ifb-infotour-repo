import React, { useState, useEffect } from 'react';
import { Platform, Text } from 'react-native';
import MapView from "react-native-maps";
import { View, StyleSheet} from "react-native";


    //Jeito foi nomeado por causa da Lórean

    const jeito = StyleSheet.create({
        container: {
            flex: 1,
        },
        map: {
            width: '100%',
            height: '100%',
        }
    })
    
    
    export default function Tabs(){
        let state = {
            location: null,
            region: null,
            errorMessage: null,
        };

        //Código retirado de 'https://stackoverflow.com/questions/53358630/get-lat-and-long-from-expo-location-to-fetch-on-map'
            return(
                <View style={jeito.container}>
                    <MapView style={jeito.container}/>
                </View>
        )};
      
    