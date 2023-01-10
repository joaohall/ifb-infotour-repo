import { ScrollView, View } from "react-native";
import { Text } from "react-native";
import * as Font from 'expo-font';
import HorizontalList from "./HorizontalList";
import { StyleSheet, Image} from "react-native";
import {
    useFonts,
    Poppins_700Bold,
    Poppins_600SemiBold,
  } from '@expo-google-fonts/poppins';
import { TouchableOpacity } from "react-native-gesture-handler";
import NotificationIcon from "../assets/icons/SVGNotificationIcon";



const style = StyleSheet.create({   
    goodmorningText:{
        width: 155,
        height: 50,
        left: 38,
        top: 130,
        fontSize: 29,
        fontFamily:'Poppins_700Bold'
    },
    routeText:{
        fontSize: 15,
        margin: 15,
        top:160,
        left:25,
        fontSize:23,
        fontFamily:'Poppins_600SemiBold'
    },
    routeText2:{
        fontSize: 15,
        margin: 15,
        top:160,
        left:25,
        fontSize:23,
        fontFamily:'Poppins_600SemiBold'
    },
})

export default function MainPage(){


    let [fontsLoaded] = useFonts({Poppins_700Bold, Poppins_600SemiBold});
    
    return(
        <View>
            <TouchableOpacity>
                <NotificationIcon></NotificationIcon>
            </TouchableOpacity>
            <Image source={require('../assets/icons/image/ProfilePicture.png')} style={{borderRadius:100}}></Image>
            <Text style={style.goodmorningText}>Olá, João!</Text>
            <Text style={style.routeText}>Rotas recomendadas</Text>
            <HorizontalList style={{left:40}}/>
            <Text style={style.routeText2}>Pontos recomendados</Text>
        </View>
    )
}