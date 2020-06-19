import React from 'react';
import { View, StyleSheet, Text, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const {height, width} = Dimensions.get('window')

export default class StoreScreen extends React.Component{

    static navigationOptions = {
        headerShown: false
    };

    render(){
        return(
            <SafeAreaView style={styles.container}>
                
                <View style={styles.header}>
                    <Text style={{ fontSize: 18, fontWeight:'700', marginTop: 5 }}>
                        Nike
                    </Text>
                    <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.navigate("Home")}>
                        <Icon name="ios-arrow-round-back" size={38} color="#E9446A" />
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View style={{marginTop: 25, marginBottom: 110, paddingHorizontal: 15 ,flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        
                        <View style={{ width: width / 2 - 30, height: width / 2 - 30, paddingBottom: 5 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Product")}>
                            <View style={styles.imageSize}>
                                <Image source={require('../img/AJ1.jpg')} 
                                    style={styles.img}
                                />
                            </View>
                            </TouchableOpacity>
                            <View style={{ alignItems: 'flex-start', justifyContent: 'space-evenly', paddingTop: 7 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontSize: 15, fontWeight:"800" }}>Dzd 31,500</Text>
                                    <TouchableOpacity style={{ marginHorizontal: 60 }}>
                                        <Icon name="ios-heart-empty" size={24} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{fontSize: 15, paddingTop: 5 }}>Air Jordan 1 Retro High OG 'Obsidian'</Text>
                            </View>
                        </View>

                        <View style={{ width: width / 2 - 30, height: width / 2 - 30, paddingBottom: 5 }}>
                            <View style={styles.imageSize}>
                                <Image source={require('../img/Trav.jpg')} 
                                    style={styles.img}
                                />
                            </View>
                            <View style={{ alignItems: 'flex-start', justifyContent: 'space-evenly', paddingTop: 7 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontSize: 15, fontWeight:"800" }}>Dzd 72,000</Text>
                                    <TouchableOpacity style={{ marginHorizontal: 60 }}>
                                        <Icon name="ios-heart-empty" size={24} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{fontSize: 14, paddingTop: 5 }}>Travis Scott x Air Max 720 React ENG 'Cactus Trails'</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{marginTop: 40, marginBottom: 110, paddingHorizontal: 15 ,flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>

                        <View style={{ width: width / 2 - 30, height: width / 2 - 30, paddingBottom: 5 }}>
                            <View style={styles.imageSize}>
                                <Image source={require('../img/AirMax.jpg')} 
                                    style={styles.img}
                                />
                            </View>
                            <View style={{ alignItems: 'flex-start', justifyContent: 'space-evenly', paddingTop: 7 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontSize: 15, fontWeight:"800" }}>Dzd 65,000</Text>
                                    <TouchableOpacity style={{ marginHorizontal: 60 }}>
                                        <Icon name="ios-heart-empty" size={24} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{fontSize: 15, paddingTop: 5 }}>Nike Air Max 95 leather trainers in white</Text>
                            </View>
                        </View>

                        <View style={{ width: width / 2 - 30, height: width / 2 - 30, paddingBottom: 5 }}>
                            <View style={styles.imageSize}>
                                <Image source={require('../img/AF1B.jpg')} 
                                    style={styles.img}
                                />
                            </View>
                            <View style={{ alignItems: 'flex-start', justifyContent: 'space-evenly', paddingTop: 7 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontSize: 15, fontWeight:"800" }}>Dzd 25,500</Text>
                                    <TouchableOpacity style={{ marginHorizontal: 60 }}>
                                        <Icon name="ios-heart-empty" size={24} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{fontSize: 14, paddingTop: 5 }}>Nike Air Force 1 LV8 Utility SL trainers in black</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{marginTop: 40, paddingHorizontal: 15 ,flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>

                        <View style={{ width: width / 2 - 30, height: width / 2 - 30, paddingBottom: 5 }}>
                            <View style={styles.imageSize}>
                                <Image source={require('../img/14.jpeg')} 
                                    style={styles.img}
                                />
                            </View>
                            <View style={{ alignItems: 'flex-start', justifyContent: 'space-evenly', paddingTop: 7 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontSize: 15, fontWeight:"800" }}>Dzd 24,840</Text>
                                    <TouchableOpacity style={{ marginHorizontal: 60 }}>
                                        <Icon name="ios-heart-empty" size={24} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{fontSize: 15, paddingTop: 5 }}>Nike Air Force 1 LV8 '07 4SP20 trainers in black</Text>
                            </View>
                        </View>

                        <View style={{ width: width / 2 - 30, height: width / 2 - 30, paddingBottom: 5 }}>
                            <View style={styles.imageSize}>
                                <Image source={require('../img/af1.jpg')} 
                                    style={styles.img}
                                />
                            </View>
                            <View style={{ alignItems: 'flex-start', justifyContent: 'space-evenly', paddingTop: 7 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontSize: 15, fontWeight:"800" }}>Dzd 24,840</Text>
                                    <TouchableOpacity style={{ marginHorizontal: 60 }}>
                                        <Icon name="ios-heart-empty" size={24} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{fontSize: 14, paddingTop: 5 }}>Nike Air Force 1 LV8 '07 4SP20 trainers in black</Text>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 40, 
        alignItems: 'center', 
        borderBottomColor:'#dddddd', 
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
    imageSize: {
        width: 180,
        height: 200
    },
    img: {
        flex: 1, 
        height:null, 
        width: null, 
        resizeMode: 'cover'
    }
});