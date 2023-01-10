// ignore_for_file: prefer_const_constructors

import 'dart:convert';

import 'package:InfoTour/searchpage.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:google_nav_bar/google_nav_bar.dart';


import 'aipage.dart';
import 'homepage.dart';

void main(List<String> args) {
  runApp(MaterialApp(home: HomePage()));

}


class HomePage extends StatefulWidget{
  @override
  State<StatefulWidget> createState() => HomePageState();
}


class HomePageState extends State<HomePage>{
  int _selectedIndex = 0;
  void _navigateBottomBar(int a){
  setState(() {
    _selectedIndex = a;
  });
}


  final List<Widget> _pages = [
      UserSearch(),
      UserHome(),
      UserAi(),
  ];
  late String _mapStyle;

  @override
  Widget build(BuildContext context) {
      return Scaffold(
        body: _pages[_selectedIndex],
        bottomNavigationBar: Container(
        color: Color.fromARGB(217, 217, 217, 217),
        child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 15.0, vertical: 14),
        child: GNav(
          curve: Curves.easeInCirc,
          selectedIndex: _selectedIndex,
              onTabChange: (index) {
                
                setState(() {
                  _selectedIndex = index;
                });},
          activeColor: Colors.white,
          iconSize: 26,
          gap: 10,
          padding: EdgeInsets.all(20),
          tabBackgroundColor: Color.fromARGB(1004, 173, 83, 171),
          backgroundColor: Color.fromARGB(217, 217, 217, 217),
          tabs: const [
          GButton(icon: Icons.search, text: 'Pesquisar',),
          GButton(icon: Icons.home, text: 'Página principal',),
          GButton(icon: Icons.qr_code_scanner_sharp, text: 'InfoAI',),
        ]),
      )));
  }
  
}

class _mapStyle {
}



