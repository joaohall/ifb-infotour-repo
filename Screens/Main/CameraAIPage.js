import { View, StyleSheet, Text,  SafeAreaView, TouchableOpacity, Button } from "react-native";
import { Camera, WhiteBalance } from "expo-camera";
import { useState, useEffect } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

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
      <Camera
        style={styles.camera}
        type={type}
        aspect={{9:16}}>
          <View style={{flex:1, backgroundColor: 'transparent', flexDirection: 'row', borderRadius:70}}>
            <TouchableOpacity style={{
              position: 'absolute',
              bottom:150,
              left: 40,
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
              );
            }}>
              <Text style={styles.changecamera}>Trocar camera</Text>
            </TouchableOpacity>
          </View>
      <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.button}>
              <Text style={{color:'white', fontSize: 40}}>Tirar foto</Text>
          </TouchableOpacity>
      </SafeAreaView>
          
        </Camera>
        
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
    bottom:10,
    width:660,
    height:900,    
  },
  button:{
    justifyContent:'center',
    alignItems: 'center',
    position:'absolute',
    bottom: 20,
    backgroundColor: '#AD53AB',
    margin:10,
    borderRadius:10,
    height: 90,
    width: 370,
  },
  changecamera:{
    color:'white',
    borderRadius:20,
  }
})