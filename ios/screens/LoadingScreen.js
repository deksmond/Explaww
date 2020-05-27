import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator } from 'react-native';

import * as firebase from 'firebase'

export default class App extends React.Component {
    
    componentDidMount(){
        firebase.auth().onAuthStateChanged( user => {
            this.props.navigation.navigate( user ? "App" : "Auth" );
        });
    }

  render() {
    return (
      <ImageBackground source={require('./img/bg.jpg')} style={styles.container}>
        <View style={styles.inner}>
          <Text style={styles.paragraph}>
            EUREKA
          </Text>
          <ActivityIndicator size="large"></ActivityIndicator>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inner: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(246, 36, 89, .2)'
  },
  paragraph: {
    textAlign: 'center',
    paddingTop: '79%',
    fontSize: 45
  },
});