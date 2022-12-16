import { View } from "react-native";
import { Text } from "react-native";
import { useFonts } from "expo-font";

export default function MainPage(){
    const PoppinsBold = {require('assets\fonts\Poppins-Bold.ttf')}
    return(
        <View>
            <Text style={{ fontFamily: 'PoppinsBold', fontSize: 40 }}>Test</Text>
        </View>
    )
}