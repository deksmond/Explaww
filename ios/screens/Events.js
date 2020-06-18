import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native';

DATA = [
    {
        id: "1",
        title: "Nike fest",
        date: "12 October, 2020",
        image: require('./img/af1.jpg')
    },
    {
        id: "2",
        title: "Christmas fiesta",
        date: "25 September, 2020",
        image: require('./img/lag.jpg')
    },
    {
        id: "3",
        title: "Art festival",
        date: "12 October, 2020",
        image: require('./img/xmr.jpg')
    },
    {
        id: "4",
        title: "Vaporeta fest",
        date: "3 December, 2020",
        image: require('./img/ny.jpg')
    },
    {
        id: "5",
        title: "Apple Special Event",
        date: "16 March, 2021",
        image: require('./img/25.jpeg')
    },
    {
        id: "6",
        title: "Sneakers day",
        date: "5 April, 2021",
        image: require('./img/snkrs.jpg')
    },
    {
        id: "7",
        title: "Art exhibition",
        date: "05 July, 2021",
        image: require('./img/boats.jpg')
    },
    {
        id: "8",
        title: "GTA gaming competion",
        date: "10 July, 2021",
        image: require('./img/gta.jpg')
    },
    {
        id: "9",
        title: "Astroworld festival",
        date: "20 Septemnber, 2021",
        image: require('./img/astrwrld.jpg')
    },
    {
        id: "10",
        title: "Sprite cypher challenge",
        date: "20 September, 2021",
        image: require('./img/cy.jpg')
    }
];

class Events extends Component{

    renderPost = post => {
        return(
            <TouchableOpacity>
                <View style={styles.listItem}>
                    <Image source={post.image} style={styles.image} />
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start" }}>
                            <Text style={styles.title}>{post.title}</Text>
                            <Text style={styles.date}>{post.date}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={styles.header}>
                    <Text style={{ fontSize: 18, fontWeight:'700', marginTop: 5 }}>
                        Events
                    </Text>
                </View>
                    
                <FlatList 
                    style={styles.feed}
                    data={DATA}
                    renderItem={({item}) => this.renderPost(item)}
                    keyExtractor={item => item.id}
                />

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
