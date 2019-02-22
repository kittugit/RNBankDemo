import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Button,
} from 'react-native';



export default class SignUp1 extends Component<{}> {
  render() {
 const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
         <Text>Signup1</Text>
        <Button
  onPress={() => { navigate('TandC');}}
  title="Next"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
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
  }});
