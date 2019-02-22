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
} from 'react-native';

import {MainNavigator} from './src/config/Router'





export default class App extends Component<{}> {
  render() {
    return <MainNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  }
});
