import React, { Container } from 'react';
import { View, Text, ScrollView, ImageBackground, StyleSheet, SafeAreaView } from 'react-native';

import page from './ios/page'

/*import NavigationNavigateContainer, { NavigationNativeContainer } from '@react-navigation/native';*/

export default class App extends React.Component{
  render(){
    return(
      <SafeAreaView>
        <ScrollView>
          <View style={{flex: 1, paddingHorizontal: 30, paddingTop: 50}}>
            <View style={{height: 65, width: 350, backgroundColor: '#F8F8FF'}}>
              <Text style={{fontWeight:'bold', fontSize:25, paddingTop: 7 }}>  Lagos</Text>
              <Text style={{ fontSize:13, paddingTop: 4 }}>  Centre of Excellence</Text>
              </View>
            </View>
            <View style={{flex:1, paddingHorizontal: 30, paddingTop: 5}}>
              <View style={{paddingTop: 10, height: 100, width: 350, backgroundColor: '#F8F8FF'}}>
                <Text style={{fontWeight:'bold', paddingBottom: 10 }}>   Governor: Babajide Sanwo-Olu</Text>
                <Text style={{fontWeight:'bold', paddingBottom: 10 }}>   Deputy Governor: Femi Hamzat</Text>
                <Text style={{fontWeight:'bold'}}>    Local Government Area: 37</Text>
              </View>
            </View>
          
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', paddingTop: 80, paddingHorizontal: 15 }}>

              <View style={{height: 260, width: 190, paddingRight:15}}>
                  <ImageBackground source={require('./imgs/8.jpg')} imageStyle={{borderRadius:30}} style={styles.imgContainer}>
                    <View style={styles.layout}>
                      <Text style={styles.imgTxt}>
                        Places
                      </Text>
                    </View>
                  </ImageBackground>
                </View>

                <View style={{height: 260, width: 190, paddingRight:15}}>
                  <ImageBackground source={require('./imgs/7.jpg')} imageStyle={{borderRadius: 30}} style={styles.imgContainer}>
                    <View style={styles.layout}>
                      <Text style={styles.imgTxt}>
                        Foods
                      </Text>
                    </View>
                  </ImageBackground>
                </View>

                <View style={{height: 260, width: 190, paddingRight:15}}>
                  <ImageBackground source={require('./imgs/6.jpg')} imageStyle={{borderRadius: 30}} style={styles.imgContainer}>
                    <View style={styles.layout}>
                      <Text style={styles.imgTxt}>
                        Culture
                      </Text>
                      </View>
                  </ImageBackground>
                </View>

              </View>
            </ScrollView>
          
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
imgContainer: {
  flex: 1, 
  height:null, 
  width: null, 
  resizeMode: 'cover'
},
layout: {
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, .2)',
  borderRadius: 30
},
imgTxt: {
  color: 'white',
  textAlign: 'center',
  fontSize: 30,
  fontWeight:"500",
  paddingTop: 120,
},
});