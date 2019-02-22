import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../pages/Home';
import Login from '../pages/Login';
import LandingScreen from './Router';


export const RootApp = StackNavigator({
	Login: {
		screen: Login,
    navigationOptions: {
     
      }
    },
	Home: {
		screen: Home,
    navigationOptions: {
      
      }
    },

});