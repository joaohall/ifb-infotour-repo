// ignore_for_file: avoid_print

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:location/location.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:location/location.dart';

class UserSearch extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => UserSearchState();
}
  
class UserSearchState extends State<UserSearch>{
  String mapStyle = '';
  late GoogleMapController mapController;
  double lat = 45.521563;
  double lng = -122.677433;
  

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
      DefaultAssetBundle.of(context).loadString('assets/maptheme.json').then((string) {
      mapStyle = string;
    });
  }
  
  
   void _onMapCreated(GoogleMapController controller){
    mapController = controller;
    controller.setMapStyle(mapStyle);
    
  }
  @override
  Future<Widget> build(BuildContext context) async {
    LocationData currentLocation;

try {
  Location location = Location();
  currentLocation = await location.getLocation();
} catch (e) {
  print(e);
}


   return Scaffold(
    body: 
    GoogleMap(
      onMapCreated: _onMapCreated,
      initialCameraPosition: CameraPosition(target: LatLng(currentLocation.latitude, currentLocation.longitude), zoom: 14.0)) 
    );
  }

}