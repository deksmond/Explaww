import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Text, TouchableOpacity, Image } from 'react-native';


export default class EventScreen extends React.Component{
    render(){
        return(
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <Image source={require('../img/artx.jpg')} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}