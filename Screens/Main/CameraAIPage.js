import { TouchableHighlight, TouchableOpacity, View } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { StyleSheet } from "react-native";
import { useEffect, useRef, useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function CameraAIPage(){
    const refCamera = useRef(null);
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    
    
  useEffect(() => {
      (async () => {
        Camera.requestCameraPermissionsAsync();
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        
        })();
    }, []);

    if (hasCameraPermission === false) {
      return <Text style={{position:"absolute", alignContent:'center', top:397}}>VAI TOMAR NO CU NAO TEM ACESSO A PORRA DA CAMERA</Text>;
    }
    return(
        <View>
            <SafeAreaView>
                <Camera>

                </Camera>
            </SafeAreaView>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1
    },
    camera:{
        flex:1,
        width:"100%",
        height:"100%"
    },
    buttomContainer:{
        flex:1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin:20
    },
    buttom: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center'
    },
    text: {
        fontSize:18,
        color:'white'
    }

});