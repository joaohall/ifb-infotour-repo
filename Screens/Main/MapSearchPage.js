import react from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";

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
        return(
            <View style={jeito.container}>
                <MapView style={jeito.container}/>
            </View>
        )
    }