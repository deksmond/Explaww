import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, ImageBackground } from 'react-native';

class Location extends Component{    
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>
               
                <View style={styles.header}>
                        <Text style={{ fontSize: 18, fontWeight:'700', marginTop: 5 }}>
                            Location
                        </Text>
                </View>

                <ScrollView>
                        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10, paddingTop: 25, justifyContent: 'space-between'}}>

                            <View style={{ height: 150, width: 125, borderRadius: 10}}>
                                <ImageBackground source={require('./img/alger.jpg')} imageStyle={{borderRadius: 20}} style={styles.imgContainer}>
                                    <View style={styles.layout}>
                                        <Text style={styles.imgTxt}>
                                        Alger
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>

                            <View style={{ height: 150, width: 125, borderRadius: 10}}>
                                <ImageBackground source={require('./img/annaba.jpg')} imageStyle={{borderRadius: 20}} style={styles.imgContainer}>
                                    <View style={styles.layout}>
                                        <Text style={styles.imgTxt}>
                                        Annaba
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>

                            <View style={{ height: 150, width: 125, borderRadius: 10}}>
                                <ImageBackground source={require('./img/blida.jpg')} imageStyle={{borderRadius: 20}} style={styles.imgContainer}>
                                    <View style={styles.layout}>
                                        <Text style={styles.imgTxt}>
                                        Blida
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>

                        </View>

                        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10, paddingTop: 25, justifyContent: 'space-between'}}>

                            <View style={{ height: 150, width: 125, borderRadius: 10}}>
                                <ImageBackground source={require('./img/tizi.jpg')} imageStyle={{borderRadius: 20}} style={styles.imgContainer}>
                                    <View style={styles.layout}>
                                        <Text style={styles.imgTxt}>
                                        Tizi
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>

                            <View style={{ height: 150, width: 125, borderRadius: 10}}>
                                <ImageBackground source={require('./img/setif.jpg')} imageStyle={{borderRadius: 20}} style={styles.imgContainer}>
                                    <View style={styles.layout}>
                                        <Text style={styles.imgTxt}>
                                        Setif
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>

                            <View style={{ height: 150, width: 125, borderRadius: 10}}>
                                <ImageBackground source={require('./img/mostaganem.jpg')} imageStyle={{borderRadius: 20}} style={styles.imgContainer}>
                                    <View style={styles.layout}>
                                        <Text style={styles.imgTxt}>
                                        Mostaganem
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>

                        </View>

                        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10, paddingTop: 25, justifyContent: 'space-between'}}>

                            <View style={{ height: 150, width: 125, borderRadius: 10}}>
                                <ImageBackground source={require('./img/sidi-bel-abbes.jpg')} imageStyle={{borderRadius: 20}} style={styles.imgContainer}>
                                    <View style={styles.layout}>
                                        <Text style={styles.imgTxt}>
                                        Sidi-bel-abbes
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>

                            <View style={{ height: 150, width: 125, borderRadius: 10}}>
                                <ImageBackground source={require('./img/oran.jpg')} imageStyle={{borderRadius: 20}} style={styles.imgContainer}>
                                    <View style={styles.layout}>
                                        <Text style={styles.imgTxt}>
                                        Oran
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>

                            <View style={{ height: 150, width: 125, borderRadius: 10}}>
                                <ImageBackground source={require('./img/consta.jpg')} imageStyle={{borderRadius: 20}} style={styles.imgContainer}>
                                    <View style={styles.layout}>
                                        <Text style={styles.imgTxt}>
                                        Constantine
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>

                        </View>

                        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10, paddingTop: 25, justifyContent: 'space-between'}}>
                            
                            <View style={{ height: 150, width: 125, borderRadius: 10}}>
                                <ImageBackground source={require('./img/tlemcen.jpg')} imageStyle={{borderRadius: 20}} style={styles.imgContainer}>
                                    <View style={styles.layout}>
                                        <Text style={styles.imgTxt}>
                                            Tlemcen
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>


                        </View>

                    </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 40, 
        alignItems: 'center', 
        borderBottomColor:'#dddddd', 
        borderBottomWidth: 1
    },
    imgContainer: {
      flex: 1, 
      height:null, 
      width: null, 
      resizeMode: 'cover'
    },
    layout: {
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, .4)',
      borderRadius: 20,
    },
    imgTxt: {
      color: 'white',
      textAlign: 'center',
      fontSize: 23,
      fontWeight:'bold',
      paddingTop: 60,
    },
    });

export default Location;