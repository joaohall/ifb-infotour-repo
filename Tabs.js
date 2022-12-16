import { View, VirtualizedList } from "react-native";
import MapView from "react-native-maps";
import { StyleSheet } from "react-native";
import { Text } from "react-native";

//Icons
import HomeIcon from "./assets/icons/SVGhomeIcon";
import SearchIcon from "./assets/icons/SVGSearchIcon";
import AiIcon from "./assets/icons/SVGaiIcon";


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
                tabBarStyle: {position: 'absolute', height: 70, borderTopLeftRadius: 20, borderTopRightRadius: 20, },
                headerShown: false,
                tabBarShowLabel: false
            }}
            >
                <bottomtab.Screen name={'MapSearch'} component={MapSearchPage} options={{
                    tabBarIcon:()=>{ return <SearchIcon />}}}/>
                <bottomtab.Screen name={'Home'} component={MainPage} options={{tabBarIcon:()=>{ return <HomeIcon />}}}/>
                <bottomtab.Screen name={'AI'} component={CameraAIPage} options={{tabBarIcon:()=>{ return <AiIcon />}}}/>
            </bottomtab.Navigator>
        </NavigationContainer>
    )
}