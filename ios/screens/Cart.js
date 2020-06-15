import React, { Component } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { Card, CardItem, Body, Left } from 'native-base';


class Cart extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>
                
                <View style={styles.header}>
                        <Text style={{ fontSize: 18, fontWeight:'700', marginTop: 5 }}>
                            Cart
                        </Text>
                </View>

                <ScrollView>
                    <Card style={{ height: 130, paddingTop: 5, borderRadius: 20 }}>
                        <CardItem>
                            <Left>
                                <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 5}}>
                                    <View style={{ width: 90, height: 90 }}>
                                        <Image source={require('../screens/img/tote.jpg')} 
                                            style={{flex:1, width:null, height: null, resizeMode: 'cover'}} 
                                         />
                                    </View>
                                    <Body>
                                        <Text style={{ fontSize: 18, paddingHorizontal: 15, fontWeight: 'bold'}}>Dzd 3,000</Text>
                                        <Text style={{ fontSize: 16, paddingHorizontal: 15, paddingTop: 5}}>Sesame Street women's luxury shoulder tote bag</Text>
                                    </Body>
                                </View>
                            </Left>
                        </CardItem>
                    </Card>
                                
                    <Card style={{ height: 130, paddingTop: 5, borderRadius: 20 }}>
                        <CardItem>
                            <Left>
                                <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 5}}>
                                    <View style={{ width: 90, height: 90 }}>
                                        <Image source={require('../screens/img/mascara.jpg')} 
                                            style={{flex:1, width:null, height: null, resizeMode: 'cover'}} 
                                        />
                                    </View>
                                     <Body>
                                         <Text style={{ fontSize: 18, paddingHorizontal: 15, fontWeight: 'bold'}}>Dzd 2,271</Text>
                                        <Text style={{ fontSize: 16, paddingHorizontal: 15, paddingTop: 5}}>Rimmel London Volume Colourist Mascara Black</Text>
                                    </Body>
                                </View>
                            </Left>
                        </CardItem>
                    </Card>

                    <Card style={{ height: 130, paddingTop: 5, borderRadius: 20 }}>
                        <CardItem>
                            <Left>
                                <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 5}}>
                                    <View style={{ width: 90, height: 90 }}>
                                        <Image source={require('../screens/img/face.jpg')} 
                                            style={{flex:1, width:null, height: null, resizeMode: 'cover'}} 
                                        />
                                    </View>
                                    <Body>
                                        <Text style={{ fontSize: 18, paddingHorizontal: 15, fontWeight: 'bold'}}>DZD 995</Text>
                                        <Text style={{ fontSize: 16, paddingHorizontal: 15, paddingTop: 5}}>Yes to Coconuts Ultra Hydrating Paper Mask</Text>
                                    </Body>
                                </View>
                            </Left>
                        </CardItem>
                    </Card>

                    <Card style={{ height: 130, paddingTop: 5, borderRadius: 20 }}>
                        <CardItem>
                            <Left>
                                <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 5}}>
                                    <View style={{ width: 90, height: 90 }}>
                                        <Image source={require('../screens/img/adidas.jpeg')} 
                                            style={{flex:1, width:null, height: null, resizeMode: 'cover'}} 
                                        />
                                    </View>
                                    <Body>
                                        <Text style={{ fontSize: 18, paddingHorizontal: 15, fontWeight: 'bold'}}>DZD 17,000</Text>
                                        <Text style={{ fontSize: 16, paddingHorizontal: 15, paddingTop: 5}}>Adidas Net EQT sneakers</Text>
                                    </Body>
                                </View>
                            </Left>
                        </CardItem>
                    </Card>

                    <Card style={{ height: 130, paddingTop: 5, borderRadius: 20 }}>
                        <CardItem>
                            <Left>
                                <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 5}}>
                                    <View style={{ width: 90, height: 90 }}>
                                        <Image source={require('../screens/img/glasses.jpeg')} 
                                            style={{flex:1, width:null, height: null, resizeMode: 'cover'}} 
                                        />
                                    </View>
                                    <Body>
                                        <Text style={{ fontSize: 18, paddingHorizontal: 15, fontWeight: 'bold'}}>DZD 2,500</Text>
                                        <Text style={{ fontSize: 16, paddingHorizontal: 15, paddingTop: 5}}>Bershka transparent glasses</Text>
                                    </Body>
                                </View>
                            </Left>
                        </CardItem>
                    </Card>                   

                    <Card style={{ height: 130, paddingTop: 5, borderRadius: 20 }}>
                        <CardItem>
                            <Left>
                                <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 5}}>
                                    <View style={{ width: 90, height: 90 }}>
                                        <Image source={require('../screens/img/14.jpeg')} 
                                            style={{flex:1, width:null, height: null, resizeMode: 'cover'}} 
                                        />
                                    </View>
                                    <Body>
                                        <Text style={{ fontSize: 18, paddingHorizontal: 15, fontWeight: 'bold'}}>DZD 25,000</Text>
                                        <Text style={{ fontSize: 16, paddingHorizontal: 15, paddingTop: 5}}>Black Nike Air Force 1</Text>
                                    </Body>
                                </View>
                            </Left>
                        </CardItem>         
                    </Card>

                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Cart;

const styles = StyleSheet.create({
    header: {
        height: 40, 
        alignItems: 'center', 
        borderBottomColor:'#dddddd', 
        borderBottomWidth: 1
    }
});