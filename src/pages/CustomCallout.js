import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

export default class CustomCallout extends Component<{}> {
  constructor(props){
  	super(props);
  }
  render() {
     return (
     <View style={styles.container}>
         <Text>{this.props.atmdata.name}</Text>        
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {

  	flex: 1,
    
    
  }});
