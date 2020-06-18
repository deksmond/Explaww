import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, SafeAreaView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

info = [
    {
        id: "1",
        item: "Bershka white sweatshirt with Chinese Ramen design",
        price: "Dzd 1000",
        image: require('../img/ka.jpeg')
    },
    {
        id: "2",
        item: "Square glasses with gold rims",
        price: "Dzd 4550",
        image: require('../img/glasses.jpeg')
    },
    {
        id: "3",
        item: "Fuji instamax camera",
        price: "Dzd 8950",
        image: require('../img/fuji.jpg')
    }
];

export default class OrderScreen extends React.Component{

    static navigationOptions = {
        headerShown: false
    };

    renderPost = post => {
        return(
            <TouchableOpacity>
                <View style={styles.feedItem}>
                    <Image source={post.image} style={styles.image} />
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: "column", justifyContent: "space-between", alignItems:"flex-start" }}>
                            <Text style={styles.item}>{post.item}</Text>
                            <Text style={styles.price}>{post.price}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    render(){
        return(
            <SafeAreaView style={{ flex: 1 }}>

                <View style={styles.header}>
                        <Text style={{ fontSize: 18, fontWeight: '700', marginTop: 5 }}>
                            My Orders
                        </Text>

                        <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.navigate("Profile")}>
                            <Icon name="ios-arrow-round-back" size={38} color="#E9446A" />
                        </TouchableOpacity>
                </View>

                <FlatList
                    style={styles.itemList}
                    data={info}
                    renderItem={({item}) => this.renderPost(item)}
                    keyExtractor={item => item.id}
                />

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 40, 
        alignItems: 'center',
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1
    },
    backButton: {
        position: "absolute",
        top: -5,
        height: 32,
        width: 32,
        left: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    itemList: {
        marginHorizontal: 15
    },
    feedItem: {
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
    item: {
        fontSize: 18,
    },
    price: {
        fontSize: 16,
        fontWeight: "700",
        paddingTop: 7
    }
});
