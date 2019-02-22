import React from 'react';
import { TabNavigator, StackNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';

import ATM from '../pages/ATM';
import Login from '../pages/Login';
import Home from '../pages/Home';
import SignUp1 from '../pages/SignUp1';
import TandC from '../pages/TandC';

const LoginTabNavigator = TabNavigator({
	Login: {
		screen: Login,
    navigationOptions: {
      tabBarLabel: "Login",
      tabBarIcon: ({tintColor}) => <Icon name="home" size={25} color={"white"} />
      }
    },
	ATM: {
		screen: ATM,navigationOptions: {
      tabBarLabel: "ATM",
      tabBarIcon: ({tintColor}) => <Icon type="entypo" name="location-pin" size={25} color={'white'} />
      }
    },

},  {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: false,
  activeTintColor: '#ffffff',
  labelStyle: {
    fontSize: 12,
  },
  style: {
    backgroundColor: '#263238',
  },
}

});

const NewRegistrationNavigator = StackNavigator({
 
  SignUp: {
    screen: SignUp1,
    
    },

    TandC: {
    screen: TandC,
    
    },

}, {
   
 });

export const MainNavigator = StackNavigator({
  Login: {
    screen: LoginTabNavigator,
    
    },
  SignUp: {
    screen: NewRegistrationNavigator,
    
    },
  Home: {
    screen: Home,
  }

}, {
   headerMode: 'none',
 });