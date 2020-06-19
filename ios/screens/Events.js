import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

import EventsCategory from '../screens/Components/Events/EventsCategory'

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

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("event")}>
                        <EventsCategory imageUri={require('../screens/img/women.jpg')} 
                            name="Day of the Black Woman"
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
            </SafeAreaView>
        );
    } 
}

export default Events;

const styles = StyleSheet.create({
    header: {
        height: 40, 
        alignItems: 'center', 
        borderBottomColor:'#dddddd', 
        borderBottomWidth: 1
    },
    feed: {
        marginHorizontal: 15
    },
    listItem: {
        backgroundColor: "#FFF",
        padding: 8,
        flexDirection: "row",
        marginVertical: 8
    },
    image: {
        width: 90, 
        height: 90,
        marginRight: 16
    },
    title: {
        fontSize: 18
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 7
    }
});
