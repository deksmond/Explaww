import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

import EventsCategory from './Components/Events/EventsCategory'

class Events extends Component{
    UNSAFE_componentWillMount(){
        this.starterHeaderHeight = 10
        if(Platform.OS == 'android'){
            this.starterHeaderHeight = 100 + StatusBar.currentHeight
        }
    }
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 ,paddingTop: 5 }}> 
                    <View style={{alignItems: 'center'}}>
                        <Text style={{ fontSize: 18, fontWeight:'700' }}>
                            "Events"
                        </Text>
                    </View>
                    <View style={{height:this.starterHeaderHeight, backgroundColor:'white', borderBottomColor:'#dddddd', borderBottomWidth: 1}}>
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
                        name="Art festival, Rome"
                        date="5 November, 2020"
                        />
                        <EventsCategory imageUri={require('../screens/img/ny.jpg')} 
                        name="Vaporeta trip, New York"
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
                </View>
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
    }
});