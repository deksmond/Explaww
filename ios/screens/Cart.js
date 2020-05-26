import React, { Component } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Card, CardItem, Body, Left, Right } from 'native-base';


class Cart extends Component{
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
                            "Cart"
                        </Text>
                    </View>
                    <View style={{height:this.starterHeaderHeight, backgroundColor:'white', borderBottomColor:'#dddddd', borderBottomWidth: 1}}>
                    </View>
                    
                    <ScrollView>
                        <Card style={{ height: 130, paddingTop: 5 }}>
                            <CardItem>
                                <Left>
                                    <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 5}}>
                                        <View style={{ width: 90, height: 90 }}>
                                            <Image source={require('../screens/img/7.jpg')} 
                                            style={{flex:1, width:null, height: null, resizeMode: 'cover'}} 
                                            />
                                        </View>
                                        <Body>
                                            <Text style={{ fontSize: 18, paddingHorizontal: 15, fontWeight: 'bold'}}>DZD 41000</Text>
                                            <Text style={{ fontSize: 16, paddingHorizontal: 15, paddingTop: 5}}>Nike Air Force 1</Text>
                                        </Body>
                                    </View>
                                </Left>
                            </CardItem>
                        </Card>
                                
                            <Card style={{ height: 130, paddingTop: 5 }}>
                                <CardItem>
                                    <Left>
                                        <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 5}}>
                                            <View style={{ width: 90, height: 90 }}>
                                                <Image source={require('../screens/img/5.jpg')} 
                                                style={{flex:1, width:null, height: null, resizeMode: 'cover'}} 
                                                />
                                            </View>
                                            <Body>
                                                <Text style={{ fontSize: 18, paddingHorizontal: 15, fontWeight: 'bold'}}>DZD 19000</Text>
                                                <Text style={{ fontSize: 16, paddingHorizontal: 15, paddingTop: 5}}>Dior cross-body bag</Text>
                                            </Body>
                                        </View>
                                    </Left>
                                </CardItem>
                            </Card>

                            <Card style={{ height: 130, paddingTop: 5 }}>
                                <CardItem>
                                    <Left>
                                        <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 5}}>
                                            <View style={{ width: 90, height: 90 }}>
                                                <Image source={require('../screens/img/ka.jpeg')} 
                                                style={{flex:1, width:null, height: null, resizeMode: 'cover'}} 
                                                />
                                            </View>
                                            <Body>
                                                <Text style={{ fontSize: 18, paddingHorizontal: 15, fontWeight: 'bold'}}>DZD 4000</Text>
                                                <Text style={{ fontSize: 16, paddingHorizontal: 15, paddingTop: 5}}>Bershka white sweatshirt</Text>
                                            </Body>
                                        </View>
                                    </Left>
                                </CardItem>
                            </Card>

                            <Card style={{ height: 130, paddingTop: 5 }}>
                                <CardItem>
                                    <Left>
                                        <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 5}}>
                                            <View style={{ width: 90, height: 90 }}>
                                                <Image source={require('../screens/img/adidas.jpeg')} 
                                                style={{flex:1, width:null, height: null, resizeMode: 'cover'}} 
                                                />
                                            </View>
                                            <Body>
                                                <Text style={{ fontSize: 18, paddingHorizontal: 15, fontWeight: 'bold'}}>DZD 17000</Text>
                                                <Text style={{ fontSize: 16, paddingHorizontal: 15, paddingTop: 5}}>Net EQT sneakers</Text>
                                            </Body>
                                        </View>
                                    </Left>
                                </CardItem>
                            </Card>

                            <Card style={{ height: 130, paddingTop: 5 }}>
                                <CardItem>
                                    <Left>
                                        <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 5}}>
                                            <View style={{ width: 90, height: 90 }}>
                                                <Image source={require('../screens/img/glasses.jpeg')} 
                                                style={{flex:1, width:null, height: null, resizeMode: 'cover'}} 
                                                />
                                            </View>
                                            <Body>
                                                <Text style={{ fontSize: 18, paddingHorizontal: 15, fontWeight: 'bold'}}>DZD 2500</Text>
                                                <Text style={{ fontSize: 16, paddingHorizontal: 15, paddingTop: 5}}>Bershka transparent glasses</Text>
                                            </Body>
                                        </View>
                                    </Left>
                                </CardItem>
                            </Card>                   

                            <Card style={{ height: 130, paddingTop: 5 }}>
                                <CardItem>
                                    <Left>
                                        <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 5}}>
                                            <View style={{ width: 90, height: 90 }}>
                                                <Image source={require('../screens/img/14.jpeg')} 
                                                style={{flex:1, width:null, height: null, resizeMode: 'cover'}} 
                                                />
                                            </View>
                                            <Body>
                                                <Text style={{ fontSize: 18, paddingHorizontal: 15, fontWeight: 'bold'}}>DZD 25000</Text>
                                                <Text style={{ fontSize: 16, paddingHorizontal: 15, paddingTop: 5}}>Black Nike Air Force 1</Text>
                                            </Body>
                                        </View>
                                    </Left>
                                </CardItem>         
                        </Card>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

export default Cart;