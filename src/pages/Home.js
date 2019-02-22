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
  Image,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <View style={{flex: 1, flexDirection: 'row',  alignItems: 'center',}}>
<Image style={{width:50, height: 50}}source={require('../images/bolt.png')} />

 <Text style={{fontSize: 15, color: '#424242'}}>Accounts</Text>
 </View>

 
 <View style={{flexDirection: 'row',  alignContent: 'space-around'}}>
 <TouchableOpacity>
    <Icon style={{marginRight: 25 }} name="map-marker" size={30} />

 </TouchableOpacity>
 <TouchableOpacity>
    <Icon style={{marginRight: 25 }} name="bell-o" size={30} />
 </TouchableOpacity>
 <TouchableOpacity>
 <Icon style={{marginRight: 25 }} name="question" size={30} />
</TouchableOpacity>
 <TouchableOpacity>
 <Icon style={{marginRight: 25 }} name="sign-out" size={30} />
 </TouchableOpacity>
 </View>
        </View>
        
        <View style={styles.body}>

         <View style={styles.card}>
           <View style={{flex: 1, backgroundColor: 'gray'}}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 5}}>
                <Text style={{ fontSize: 18, color: 'white'}}> Card : x7890</Text> 
                
             </View>             
            <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'space-around' }}>
               <View style={{flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around'}}>
                <Text style={{ fontSize: 18, color: 'gray'}}> Account Balance </Text>  
               <Text style={{ fontSize: 18,}}> 1,00.00 </Text>
               </View>
               <View style={{flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around'}}>
                 <Text style={{ fontSize: 18,}}> Ledger Balance </Text>  
                 <Text style={{ fontSize: 18,}}> 1,560.00 </Text>
               </View>
            </View>
        </View>
      </View>  
     
     <View style={styles.card}>
           <View style={{flex: 1, backgroundColor: 'gray'}}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 5}}>
                <Text style={{ fontSize: 18, color: 'white'}}> Card : x7890</Text> 
                
             </View>             
            <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'space-around' }}>
               <View style={{flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around'}}>
                <Text style={{ fontSize: 18, color: 'gray'}}> Account Balance </Text>  
               <Text style={{ fontSize: 18,}}> 1,00.00 </Text>
               </View>
               <View style={{flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around'}}>
                 <Text style={{ fontSize: 18,}}> Ledger Balance </Text>  
                 <Text style={{ fontSize: 18,}}> 1,560.00 </Text>
               </View>
            </View>
        </View>


      </View> 

    </View>  

       <View style={styles.footer}>

         <View style={{flexDirection: 'row',  justifyContent: 'space-around', marginTop: 5}}>
 <TouchableOpacity>
    <Icon style={{marginRight: 25 }} name="exchange" size={35} />
    <Text>Transfer</Text>
 </TouchableOpacity>
 <TouchableOpacity>
    <Icon style={{marginRight: 25 }} name="user" size={35} />
    <Text>Profile</Text>
 </TouchableOpacity>
 <TouchableOpacity>
 <Icon style={{marginRight: 25 }} name="gear" size={35} />
  <Text>Settings</Text>
</TouchableOpacity>
 <TouchableOpacity>
 <Icon style={{marginRight: 25 }} name="navicon" size={35} />
 <Text>More</Text>
 </TouchableOpacity>
 </View>

         </View> 
  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  header: {
    height: 45,
    backgroundColor: 'white',  
    elevation: 3,
    
    flexDirection: 'row',    
        alignItems: 'center',
        alignContent: 'space-around'
  },
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  footer: {

    height: 60,
    backgroundColor: 'white',
    borderWidth: 0.50,
    borderColor: 'gray',
    
    margin: 2,

  },
  card: {

    height: 130,
    backgroundColor: 'gray',
    borderWidth: 0.50,
    borderColor: 'gray',
   
    margin: 10,
    paddingBottom: 10,

  }
 
});
