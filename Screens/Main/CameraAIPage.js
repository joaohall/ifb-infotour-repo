import React, { useState, useEffect } from 'react';
import { StyleSheet ,Text, View, Button, Image} from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraAIPage() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
useEffect(() => {
    (async () => {
    const ratios = await camera.getSupportedRatiosAsync();
    const cameraStatus = await Camera.requestCameraPermissionsAsync();
    setHasCameraPermission(cameraStatus.status === 'granted');
})();
  }, []);
const takePicture = async () => {
    if(camera){
        const data = await camera.takePictureAsync(null)
        setImage(data.uri);
    }
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
   <View style={{ flex: 1}}>
      <View style={styles.cameraContainer}>
            <Camera 
            ref={ref => setCamera(ref)}
            style={styles.fixedRatio} 
            type={type}
            ratio={'4:3'} />
      </View>

   </View>
  );
}
const styles = StyleSheet.create({

    
  cameraContainer: {
      position:'absolute',
      alignContent:'center',
      flex: 1,
      flexDirection: 'row'
  },
  fixedRatio:{
      flex: 1,
      aspectRatio: 0.5
  }
})