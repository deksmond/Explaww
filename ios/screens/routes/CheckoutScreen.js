import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

data = [
    {
        id: "1",
        icon: require('../img/vgs.jpg'),
        productName: "Air Jordan 1 Retro High OG 'Obsidian' ",
        price: "Dzd 31500",
        colour: "Colour: Obsidian",
        quantity: "Qty: 1",
        deliveryFee: "Delivery fee: Dzd 2,550"
    },
    {
        id: "2",
        fullName: "Chiroma Adekunle Ebuka",
        adress: "Delivery adress",
        home: "Cite des etudiants 03, CUBE 03",
        street: "Bab-Ezzouar",
        city: "Algiers, Alger",
        phoneNumber: "079836456"
    }
];

export default class CheckoutScreen extends React.Component{

    static navigationOptions = {
        headerShown: false
    };

    renderPost = post => {
        return(
            <View style={styles.feedItem}>
                <Image source={post.icon} style={styles.icon} />
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <Text style={styles.productName}>{post.productName}</Text>
                        <Text style={styles.price}>{post.price}</Text>
                        <Text style={styles.copy}>{post.colour}</Text>
                        <Text style={styles.copy}>{post.quantity}</Text>
                        <Text style={styles.copy}>{post.deliveryFee}</Text>
                    </View>
                    <View style={{ marginTop: -100, marginHorizontal: -150 }}>
                        <Text style={styles.adress}>{post.adress}</Text>
                        <Text style={styles.reUsable}>{post.fullName}</Text>
                        <Text style={styles.reUsable}>{post.home}</Text>
                        <Text style={styles.reUsable}>{post.street}</Text>
                        <Text style={styles.reUsable}>{post.city}</Text>
                        <Text style={styles.reUsable}>{post.phoneNumber}</Text>
                    </View>
                </View>
            </View>
        );
    };

    checkoutConfirmation = () => Alert.alert(
        'Alert',
        'Are you sure you want to checkout?',
        [
            { text: 'No', onPress: () => console.log('Cancel pressed'), style: 'cancel' },
            { text: 'Yes', onPress: () => {this.props.navigation.navigate("Home")} }
        ],
        { cancelable: true }
    )

    render(){
        return(
            <SafeAreaView style={styles.contianer}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Icon name="md-close" size={24} color="#E9446A"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.checkoutConfirmation}>
                        <Text style={{ fontSize: 17, fontWeight: "500", color: 'red' }}>Checkout</Text>
                    </TouchableOpacity>
                </View>

                <FlatList 
                    style={styles.feed}
                    data={data}
                    renderItem={({item}) => this.renderPost(item)}
                    keyExtractor={item => item.id}
                />

                <View style={{ flex: 1, alignSelf: "center" }}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 17, fontWeight: "500", color: 'red' }}>Change</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    contianer: {
        flex: 1
    },
    header: {
        height: this.startHeaderHeight,
        borderBottomColor: "#dddddd",
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingVertical: 12
    },
    feed: {
        marginHorizontal: 15
    },
    feedItem: {
        backgroundColor: "#FFF",
        padding: 8,
        paddingTop: 25,
        marginTop: 15,
        flexDirection: "row",
        marginVertical: 8,
        height: 250
    },
    icon: {
        width: 150, 
        height: 180,
        marginRight: 16
    },
    productName: {
        fontSize: 16
    },
    price: {
        fontSize: 18,
        paddingTop: 7,
        fontWeight: 'bold'
    }, 
    copy: {
        fontSize: 16,
        paddingTop: 7
    },
    adress: {
        fontSize: 24,
        fontWeight: "500",
        paddingBottom: 40
    },
    reUsable: {
        fontSize: 18,
        paddingBottom: 7
    }
});