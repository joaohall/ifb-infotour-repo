// ignore_for_file: prefer_const_constructors, unnecessary_new

import 'dart:io';

import 'package:camera/camera.dart';
import 'package:flutter/material.dart';

class UserAi extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => UserAiState();
}
class UserAiState extends State<UserAi>{
  List<CameraDescription> cameras = [];
  CameraController? cameraController;
  XFile? imagem;
  Size? size;
  @override
  void initState() {
    super.initState();
    _loadCameras();
  }

  _loadCameras() async{
    try{
      cameras = await availableCameras();
      _startCamera();
    } on CameraException catch(e) {
      print(e.description);
    }
  }

  _startCamera(){
    if(cameras.isEmpty){
      print("Nenhuma câmera foi encontrada.");
    } else {
      _previewCamera(cameras.first);
    }
  }
  _previewCamera(CameraDescription camera) async{
    final CameraController cameraController = new CameraController(
    camera, 
    ResolutionPreset.high,
    enableAudio: false, 
    imageFormatGroup: ImageFormatGroup.jpeg
    );

    try { 
      await cameraController.initialize();
    } on CameraException catch (e){
      print(e.description);
    }
    if(mounted){
      setState(() {
        
      });
    }

  }

  @override
  Widget build(BuildContext context) {
   size = MediaQuery.of(context).size;
   return Scaffold(
     body: Container(
      color: Colors.grey,
      child: Center(
       
      ),
     ),
   );
  }


  
}