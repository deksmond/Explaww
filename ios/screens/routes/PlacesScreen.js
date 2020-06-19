import React from 'react';
import { View, StyleSheet, Text, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const {height, width} = Dimensions.get('window')

export default class PlacesScreen extends React.Component{

    static navigationOptions = {
        headerShown: false
    };

    render(){
        return(
            <SafeAreaView style={styles.container}>
                
                <View style={styles.header}>
                    <Text style={{ fontSize: 18, fontWeight:'700', marginTop: 5 }}>
                        Alger
                    </Text>
                    <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.navigate("Location")}>
                        <Icon name="ios-arrow-round-back" size={38} color="#E9446A" />
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View style={{marginTop: 20, marginBottom: 110, paddingHorizontal: 20 ,flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        
                        <View style={{ width: width / 2 - 30, height: width / 2 - 30, paddingBottom: 5 }}>

                            <View style={styles.imageSize}>
                                <Image source={require('../img/mascara.jpg')} 
                                    style={styles.img}
                                />
                            </View>

                            <View style={{ alignItems: 'flex-start', justifyContent: 'space-evenly', paddingTop: 7 }}>
                                <Text style={{ fontSize: 15, fontWeight:"800" }}>Dzd 2,271</Text>
                                <Text style={{fontSize: 15, paddingTop: 5 }}>Rimmel London Volume Colourist Mascara Black</Text>
                            </View>
                        </View>

                        <View style={{ width: width / 2 - 30, height: width / 2 - 30, paddingBottom: 5 }}>
                            <View style={styles.imageSize}>
                                <Image source={require('../img/hat.jpg')} 
                                    style={styles.img}
                                />
                            </View>
                            <View style={{ alignItems: 'flex-start', justifyContent: 'space-evenly', paddingTop: 7 }}>
                                <Text style={{ fontSize: 15, fontWeight:"800"}}>DZD 6,253</Text>
                                <Text style={{fontSize: 14, paddingTop: 5 }}>Large straw hat with size adjuster in brown</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{marginTop: 40, marginBottom: 110, paddingHorizontal: 20 ,flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>

                        <View style={{ width: width / 2 - 30, height: width / 2 - 30, paddingBottom: 5 }}>
                            <View style={styles.imageSize}>
                                <Image source={require('../img/face.jpg')} 
                                    style={styles.img}
                                />
                            </View>
                            <View style={{ alignItems: 'flex-start', justifyContent: 'space-evenly', paddingTop: 7 }}>
                                <Text style={{ fontSize: 15, fontWeight:"800" }}>DZD 995</Text>
                                <Text style={{fontSize: 15, paddingTop: 5 }}>Yes to Coconuts Ultra Hydrating Paper Mask</Text>
                            </View>
                        </View>

                        <View style={{ width: width / 2 - 30, height: width / 2 - 30, paddingBottom: 5 }}>
                            <View style={styles.imageSize}>
                                <Image source={require('../img/rings.jpg')} 
                                    style={styles.img}
                                />
                            </View>
                            <View style={{ alignItems: 'flex-start', justifyContent: 'space-evenly', paddingTop: 7 }}>
                                <Text style={{ fontSize: 15, fontWeight:"800"}}>Dzd 1,704</Text>
                                <Text style={{fontSize: 14, paddingTop: 5 }}>Pack of 3 rings with colour bands and crystal stones</Text>
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