# RNBankDemo

react-native init RNBankDemo
cd RNBankDemo
yarn add react-native-elements
yarn add react-native-vector-icons
react-native link react-native-vector-icons
settings.gradle - change / to \
yarn add react-navigation@1.0.0-beta.19
react-native link react-navigation
yarn add ract-native-maps@0.19.0
react-native link react-native-maps

Add AndroidManifest.xml

 <meta-data
      android:name="com.google.android.geo.API_KEY"      
      android:value="AIzaSyCDiPWH39KendGpyt6ZhH_ImJwf2Uk7sSc"/>



implementation(project(':react-native-maps')){
       exclude group: 'com.google.android.gms', module: 'play-services-base'
       exclude group: 'com.google.android.gms', module: 'play-services-maps'
   }
   implementation 'com.google.android.gms:play-services-base:10.0.1'
   implementation 'com.google.android.gms:play-services-maps:10.0.1'
