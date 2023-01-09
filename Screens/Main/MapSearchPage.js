import MapView from "react-native-maps";
import { View, StyleSheet,TextInput, Keyboard, Button} from "react-native";


    const style = StyleSheet.create({
        container: {
            flex: 1,
        },
        map: {
            width: '100%',
            height: '100%',
        },
    })

    export default function Tabs(){
        let state = {
            location: null,
            region: null,
            errorMessage: null,
        };

        //Código retirado de 'https://stackoverflow.com/questions/53358630/get-lat-and-long-from-expo-location-to-fetch-on-map'
            return(
                <View style={style.container}>
                    <MapView style={style.container}/>
                </View>
        )};
      
    