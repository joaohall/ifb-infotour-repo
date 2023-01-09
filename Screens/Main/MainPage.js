import { View } from "react-native";
import { Text } from "react-native";
import * as Font from 'expo-font';
import { StyleSheet } from "react-native";


const style = StyleSheet.create({   
    goodmorningText:{
        width: 151,
        height: 44,
        left: 38,
        top: 105,
        fontSize: 29,
    }
})

export default function MainPage(){
    
    return(
        <View>
            <Text style={style.goodmorningText}>Olá, João!</Text>
        </View>
    )
}