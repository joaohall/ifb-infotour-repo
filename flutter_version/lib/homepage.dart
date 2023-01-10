// ignore_for_file: prefer_const_constructors, use_key_in_widget_constructors, no_logic_in_create_state, camel_case_types, prefer_const_literals_to_create_immutables

import 'package:flutter/material.dart';

class UserHome extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => UserHomeState();
}
class UserHomeState extends State<UserHome>{
  @override
  Widget build(BuildContext context) {
   return Scaffold(
      body: Stack(
        
        children:[
        Align(
          alignment: Alignment(0.7, -0.64),
          child: CircleAvatar(
            radius: 26,
            backgroundImage: NetworkImage('https://instagram.fbsb12-1.fna.fbcdn.net/v/t51.2885-15/319125512_669161581378665_8512714700833857281_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fbsb12-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=0Q4qvyLTMDQAX9xAPxZ&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjk4OTg4Mjk0NDI2OTc2MTE4NQ%3D%3D.2-ccb7-5&oh=00_AfA_g5sL-yCX-DPcDW147xcIuIc0DXSBJm1ghYcVzx_ngQ&oe=63BFB048&_nc_sid=1527a3'),
          ),
        ),
        Align(
          alignment: Alignment(-0.57,-0.59),
          child:
            Text.rich(TextSpan(
            style: TextStyle(fontFamily: 'Poppins'),
            children:[
            TextSpan(text: 'Olá, ', style: TextStyle(fontSize: 30,)),
            TextSpan(text: 'João', style: TextStyle(fontSize: 30, color: Color.fromARGB(1004, 173, 83, 171))), //AC58AA
      ])),)
      ])
   );
  }

}

