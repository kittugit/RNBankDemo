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
import MapView from 'react-native-maps';

import { Icon } from 'react-native-elements';

import { characters } from '../config/Data';

import CustomCallout from './CustomCallout'




const { width, height } = Dimensions.get('window');




const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.0991;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


export default class ATM extends Component<{}> {

  constructor(props){
    super(props);

   this.state ={currentRegion: {
          latitude: 41.67217336646627,
          longitude: -9377311555668712,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
          searching: false

   },
   atms: [],

 };
   


  
 
  }

  towDec(num){
   return Math.floor(num * 100) / 100;
  }

componentDidMount(){
  navigator.geolocation.getCurrentPosition(
      (position) => {
       console.log(position);
      // if(this.towDec(this.state.currentRegion.latitude) != this.towDec(position.coords.latitude)
       // || this.towDec(this.state.currentRegion.longitude) != this.towDec(position.coords.longitude)) {
        this.setState({currentRegion: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }, atms: this.state.atms, searching: false });

         this.fetchData();
     // }
      },
      (error) => alert(error.message),
      //{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  
   
    
  }


  fetchData(){
    if(!this.state.searching) {
    this.setState({searching: true});
    
    fetch(`https://www.mapquestapi.com/search/v2/radius?key=4weF63fQ40fnklTG2jX3Rizs6GWDMw6k&origin=${this.state.currentRegion.latitude},${this.state.currentRegion.longitude}&radius=3&maxMatches=1000&hostedData=mqap.4weF63fQ40fnklTG2jX3Rizs6GWDMw6k_ATMLOC&_=1510466643781`)
  .then((response) => {  
      response.json().then((data) => {
        
        atmdata = data.searchResults;
        let atmList = [];
        if(atmdata) {
        atmdata.map((atmi) => {
          atmList.push({
          name: atmi.fields.N,
          lat: atmi.fields.mqap_geography.latLng.lat,
           lng: atmi.fields.mqap_geography.latLng.lng,
           
         
          });
        });
        this.setState({searching: false, currentRegion: this.state.currentRegion, atms: atmList});
      }
       
       
           
       
              });
      
    }).catch((error) => {
      alert(error);
    console.log(error);
    this.setState({searching: false});
   })
    
  }
    

   

  }
  

  _onRegionChange(region){
   if(!this.state.searching) {
    //if(towDec(this.state.currentRegion.latitude) != towDec(region.latitude) || 
    //towDec(this.state.currentRegion.longitude) != towDec(region.longitude)) {
      this.setState({currentRegion: {
          latitude: region.latitude,
          longitude: region.longitude,
          latitudeDelta: region.latitudeDelta,
          longitudeDelta: region.longitudeDelta,
        },  atms: this.state.atms });
      this.fetchData();
      //}
    } 
        
  }
  render() {

     /*if (this.state.searching) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size='large'/>
        </View>
      );
    } */

    return (
      <View style={styles.container}>
         <MapView style={styles.map}
         showsUserLocation={true}
    region={this.state.currentRegion}
     onRegionChange={region => this._onRegionChange(region)}>


 

 {
   
  this.state.atms.map((atm, index) =>
            // If showGoodOnly is true, but the character is bad - do not show it
            <MapView.Marker
              coordinate={{
                latitude: atm.lat,
                longitude: atm.lng,
              }}
              // Greed color for good characters and red for others
              pinColor='#009688'
              key={index}
              title={atm.N}
              description={atm.N}              
            >

            <MapView.Callout style={styles.mycallout}>
                       <CustomCallout atmdata={atm}/>
                  </MapView.Callout>
            </MapView.Marker>
              
          )}


    </MapView>
  
    
      <View style={styles.buttonContainer}>          
            <Text>`langg: ${this.state.currentRegion.longitude} lat: ${this.state.currentRegion.latitude}`</Text>
          
        </View>

    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#455a64',
    
  },
  mycallout: {
    width: 300,
    height: 100,
  },
  map: {
   ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20,
    padding: 12,
    width: 160,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },

});
