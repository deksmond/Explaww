import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Platform, StatusBar } from 'react-native';

import EventsCategory from './Components/Events/EventsCategory'

class Events extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={styles.header}>
                        <Text style={{ fontSize: 18, fontWeight:'700', marginTop: 5 }}>
                            Events
                        </Text>
                </View>
                    

                <ScrollView>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Event")}>
                    <EventsCategory imageUri={require('../screens/img/af1.jpg')} 
                        name="Nike fest"
                        date="12 October, 2020"
                    />
                    </TouchableOpacity>
                    <EventsCategory imageUri={require('../screens/img/lag.jpg')} 
                        name="Christmas fiesta"
                        date="25 September, 2020"
                    />

                    <EventsCategory imageUri={require('../screens/img/xmr.jpg')} 
                        name="Art festival"
                        date="5 November, 2020"
                    />

                    <EventsCategory imageUri={require('../screens/img/ny.jpg')} 
                        name="Vaporeta trip"
                        date="3 December, 2020"
                    />

                    <EventsCategory imageUri={require('../screens/img/25.jpeg')} 
                        name="Apple Special Event"
                        date="16 March, 2021"
                    />

                    <EventsCategory imageUri={require('../screens/img/snkrs.jpg')} 
                        name="Sneakers day"
                        date="5 April, 2021"
                    />

                    <EventsCategory imageUri={require('../screens/img/artx.jpg')} 
                        name="Art Exhibition"
                        date="05 July, 2021"
                    />

                    <EventsCategory imageUri={require('../screens/img/gta.jpg')} 
                        name="GTA playoffs"
                        date="10 July, 2021"
                    />

                    <EventsCategory imageUri={require('../screens/img/astrwrld.jpg')} 
                        name="Astroworld festival"
                        date="20 July, 2021"
                    />

                    <EventsCategory imageUri={require('../screens/img/cy.jpg')} 
                        name="Cypher challenge"
                        date="20 September, 2021"
                    />

                    </ScrollView>
            </SafeAreaView>
        );
    } 
}

export default Events;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        height: 40, 
        alignItems: 'center', 
        borderBottomColor:'#dddddd', 
        borderBottomWidth: 1
    }
});