import { View } from "react-native";
import { Text } from "react-native";
import * as Font from 'expo-font';
import { StyleSheet } from "react-native";

async function loadFonts() {
	await Font.loadAsync({
		PoppinsBold: require('assets\fonts\PoppinsBold.ttf'),
	});}

const style = StyleSheet.create({   
    goodmorningText:{
        width: 151,
        height: 44,
        left: 38,
        top: 105,
        fontSize: 29,
        fontFamily: 'PoppinsBold'
    }
})

export default function MainPage(){
    
    return(
        <View>
            <Text style={style.goodmorningText}>Olá, João!</Text>
        </View>
    )
}