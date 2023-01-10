import { View, StyleSheet, Text,  SafeAreaView, TouchableOpacity, Image } from "react-native";
import { Camera, WhiteBalance } from "expo-camera";
import { useState, useEffect } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import SVGpictureButton from "../assets/icons/image/SVGpictureButton";
import SVGCameraInnerLines from "../assets/icons/SVGCameraInnerLines";
import SVGChangeCamera from "../assets/icons/SVGChangeCamera";
import { useIsFocused } from '@react-navigation/native';

//Precisamos mandar a foto manipulada para o MDB
export default function CameraAIPage(){

  const CameraScreen = () => {
    useEffect(() => {}, [])
    return(<Camera/>)
  };
    

  const[type, setType] = useState(Camera.Constants.Type.back);
  const[hasPermission, setHaspermission] = useState(null);


  useEffect(() => {
    (async () =>{
      const status = await Camera.requestCameraPermissionsAsync();
      setHaspermission(status==='granted')
    })();
  }, [])
  
  if(hasPermission===null){
      return <View/>;
  }
  

  return(
    <View style={styles.container}>
    <TouchableOpacity style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
              );
            }}>
              <SVGChangeCamera style={{flex:1,width:90, height:90, position:'relative', right:120}}></SVGChangeCamera>
            </TouchableOpacity>
      <Camera
        style={styles.camera}
        type={type}
        >
          <View style={{flex:1, backgroundColor: 'transparent', borderRadius:70, alignItems:'center'}}>
            <SVGCameraInnerLines style={styles.innerlines}></SVGCameraInnerLines>
          </View>
          
        </Camera>
        <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.button}>
              <SVGpictureButton></SVGpictureButton>
          </TouchableOpacity>
      </SafeAreaView>
    </View>
  )

}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
  },
  camera: {
    position:'relative',
    alignSelf:"center",
    bottom:90,
    width:580,
    height:760,
  },
  button:{
    justifyContent:'center',
    alignItems: 'center',
    alignSelf:'center',
    position:'absolute',
    bottom: 60,
    backgroundColor: 'transparent',
    margin:10,
    borderRadius: 90,
    height: 100,
    width: 100,
  },
  changecamera:{
    color:'white',
    borderRadius:20,
  },
  innerlines:{
    top:200,
    alignContent:'center',
    alignSelf:'center'
  },
})
