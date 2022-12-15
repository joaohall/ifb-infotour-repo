import { View, VirtualizedList } from "react-native";
import MapView from "react-native-maps";
import { StyleSheet } from "react-native";
import { Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"


import MapSearchPage from "./Screens/Main/MapSearchPage";
import MainPage from "./Screens/Main/MainPage";
import CameraAIPage from "./Screens/Main/CameraAIPage";

const bottomtab = createBottomTabNavigator();

export default function Tabs(){
    return(
        <NavigationContainer>
            <bottomtab.Navigator
            initialRouteName={MainPage}
            screenOptions={{
                tabBarStyle: {position: 'absolute', height: 70},
                headerShown: false
                
            }}
            >
                <bottomtab.Screen name={'MapSearch'} component={MapSearchPage}/>
                <bottomtab.Screen name={'Home'} component={MainPage}/>
                <bottomtab.Screen name={'AI'} component={CameraAIPage}/>
            </bottomtab.Navigator>
        </NavigationContainer>
    )
}