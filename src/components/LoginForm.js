import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { Button } from 'react-native-elements'



export default class LoginForm extends Component<{}> {
  
  render() {
    
   
    return (

      <View style={styles.container}>
          <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder='Enter UserID' placeholderTextColor='#ffffff'/>
           <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder='Enter Password' placeholderTextColor='#ffffff'/>

           <TouchableOpacity onPress={() => { this.props.rootNavigation.navigate('Home');}} style={styles.button}><Text  style={styles.buttonTxt}>Login</Text></TouchableOpacity>    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#455a64',
  },
  inputBox: {
    width: 300,
     backgroundColor: 'rgba(255,255,255,0.3)',
     borderRadius: 25,
     paddingHorizontal: 16,     
     color: '#ffffff',
     marginVertical: 10,
  },
  button: {

    width: 300,
      backgroundColor: '#263238',
     borderRadius: 25,
     paddingVertical: 16,    
     
     marginVertical: 10,


  },
  buttonTxt: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'

  },
});