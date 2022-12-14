import { View, VirtualizedList } from "react-native";
import MapView from "react-native-maps";
import { StyleSheet } from "react-native";
import { Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"


import MapSearchPage from "./Screens/Main/MapSearchPage";
import MainPage from "./Screens/Main/MainPage";
import CameraAIPage from "./Screens/Main/CameraAIPage";

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