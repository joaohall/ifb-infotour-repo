import React from 'react';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import Tabs from './Tabs';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native';


export default function Login({ navigation }) {
    const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      
      <Image
      source={require('../assets/icon1.png')}
      style={styles.logo}
      />
    <View style={{backgroundColor:"#D9D9D9", width:340, height:230,}}>
    <TextInput
      style={styles.input}
      placeholder= "Digite seu email"
      />
      <TextInput
      style={styles.input2}
      secureTextEntry = {true}
      placeholder= "Digite sua senha"
    />
      <TouchableOpacity onPress={() => navigation.navigate('Tabs')}
        style={styles.botao}
        
      >
        <Text style ={styles.botaoText}>Login</Text>
      </TouchableOpacity>
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
      <Text style={{left:50, bottom:31}}>Lembrar da senha?</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#AC58AA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 0,
    marginBottom:30

  },
  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
    alignContent: 'center',
    alignSelf: 'center'
    
  },
  input2: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
    alignContent: 'center',
    alignSelf: 'center'
  },
  botao: {
    width: 300,
    height: 42,
    backgroundColor :'#333344',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center'
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  checkbox: {
    margin: 13,
    left:10,
    
  },

 
});