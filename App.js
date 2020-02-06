import React, { Container } from 'react';
import { View, Text, ScrollView, Image, ImageBackground } from 'react-native';
/*import NavigationNavigateContainer, { NavigationNativeContainer } from '@react-navigation/native';*/

export default class App extends React.Component{
  render(){
    return(
      <ScrollView horizontal={true}>

        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', paddingTop: 380, paddingHorizontal: 15 }}>

          <View style={{height: 260, width: 190, borderRadius: 10, paddingRight:15}}>
            <Image source={require('./imgs/props.jpg')} 
            style={{flex: 1, height:null, width: null, resizeMode: 'cover', borderRadius: 10}}
            />
          </View>

          <View style={{height: 260, width: 190, borderRadius: 10, paddingRight:15}}>
            <Image source={require('./imgs/props.jpg')} 
            style={{flex: 1, height:null, width: null, resizeMode: 'cover', borderRadius: 10}}
            />
          </View>

          <View style={{height: 260, width: 190, borderRadius: 10, paddingRight:15}}>
            <Image source={require('./imgs/props.jpg')} 
            style={{flex: 1, height:null, width: null, resizeMode: 'cover', borderRadius: 10}}
            />
          </View>
          
        </View>
      </ScrollView>
    );
  }
}


 