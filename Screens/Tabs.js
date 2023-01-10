import HomeIcon from "../assets/icons/SVGhomeIcon";
import SearchIcon from "../assets/icons/SVGSearchIcon";
import AiIcon from "../assets/icons/SVGaiIcon";

import HomeIconSelected from "../assets/icons/SVGhomeIconSelected";
import AiIconSelected from "../assets/icons/SVGaiIconSelected";
import SearchIconSelected from "../assets/icons/SVGSearchIconSelected";


import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"


import MapSearch from "./MapSearchPage";
import MainPage from "./MainPage";
import CameraAIPage from "./CameraAIPage";

const bottomtab = createBottomTabNavigator();

export default function Tabs({ navigation }){
    
    return(
        <NavigationContainer independent={true} options={{headerShown:false}}>
            <bottomtab.Navigator
            initialRouteName={"MainPage"}
            screenOptions={{
                tabBarStyle: {position: 'absolute', height: 70, borderTopLeftRadius: 20, borderTopRightRadius: 20, },
                headerShown: false,
                tabBarShowLabel: false
            }}
            >
                <bottomtab.Screen name={'MapSearch'} component={MapSearch} options={{headerShown:false,
                    tabBarIcon:({focused})=>{ if(focused==false){
                    return <SearchIcon/>
                   }else{
                    return <SearchIconSelected/>}}}}/>
                    <bottomtab.Screen name={'Home'} component={MainPage} options={{headerShown:false, tabBarIcon:({ focused })=>{ 
                   if(focused==false){
                    return <HomeIcon/>
                   }else{
                    return <HomeIconSelected/>                   } 
                }}}/>
                <bottomtab.Screen name={'AI'} component={CameraAIPage} options={{headerShown:false,unmountOnBlur: true, tabBarIcon:( {focused} )=>{ 
                    if(focused==false){
                    return <AiIcon/>
                   }else{
                    return <AiIconSelected/>}}}}/>
            </bottomtab.Navigator>
        </NavigationContainer>
    )
}