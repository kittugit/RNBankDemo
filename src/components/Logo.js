import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';



export default class Logo extends Component<{}> {
  render() {
    return (

      <View style={styles.container}>
          <Image
          style={{width: 70, height: 70}}
          source={require('../images/logo.png')}          
        />
        <Text style={styles.loginTxt}>Welcome to BOLT$</Text>
               
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    
  },
  loginTxt: {
    fontSize: 18,   
    marginVertical: 15,
    color: 'rgba(255,255,255,0.75)',

  }
});