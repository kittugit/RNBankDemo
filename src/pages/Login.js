/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import { Icon } from 'react-native-elements';

import Logo from '../components/Logo'
import LoginForm from '../components/LoginForm'


export default class Login extends Component<{}> {
  render() {
     const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
         <Logo/>  
         <LoginForm rootNavigation={this.props.navigation} /> 
         <View style={styles.signupTxtCont}>
          <Text style={styles.signupTxt}>Don't have an account yet?</Text>
          <TouchableOpacity onPress={() => { navigate('SignUp');}}><Text  style={styles.signupButton}> Signup</Text></TouchableOpacity> 
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#455a64',
  },
  signupTxtCont: {
    flexGrow: 1,
    paddingVertical:16,
    flexDirection: 'row',
     justifyContent: 'center',
    alignItems: 'flex-end',
  },
  signupTxt: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
  },
  signupButton: {
     color:'#ffffff',
     fontSize: 16,
     fontWeight: '500',
}
  
});
