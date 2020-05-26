import React, { Component } from 'react';
import { View, 
        Text, 
        StyleSheet, 
        SafeAreaView, 
        TextInput, 
        Platform, 
        StatusBar, 
        ScrollView, 
        Image, 
        Dimensions,
        TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import Category from './Components/Home/Category'

//Screen resolution fix (all devices)
const {height, width} = Dimensions.get('window')
class Home extends Component{
    UNSAFE_componentWillMount(){
        this.startHeaderHeight = 50
        if(Platform.OS == 'android'){
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }
    render(){
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1}}>
                    <View style={{height: this.startHeaderHeight, 
                                  backgroundColor: 'white', 
                                  borderBottomWidth: 1, borderBottomColor: '#dddddd'}}>
                        <View style={{flexDirection:'row', 
                                      padding: 10, 
                                      backgroundColor:'white',
                                      borderRadius: 10, 
                                      marginHorizontal: 20, 
                                      shadowOffset:{ width:0, height:0}, 
                                      shadowColor:'black', 
                                      shadowOpacity:0.2, 
                                      elevation: 1, 
                                      marginTop:Platform.OS=='android' ? 30 : null}}>
                            <Icon name="ios-search" size={20} style={{ marginRight:10 }}/>
                            <TextInput 
                            underlineColorAndroid="transparent"
                            placeholder="Search a product"
                            placeholderTextColor="grey"
                            style={{ flex:1, backgroundColor: 'white' }} 
                            clearButtonMode="always"
                            />
                        </View>                    
                    </View>
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{flex:1, backgroundColor:'white', paddingTop: 20}}>
                            <Text style={{fontSize:24, fontWeight:'700', paddingHorizontal: 10}}>Daily Deals
                            </Text>
                            <View style={{height: 130, marginTop: 20}}>
                                <ScrollView 
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                 >
                                     <TouchableOpacity onPress={() => this.props.navigation.navigate("Item")}>
                                    <Category imageUri={require('./img/vgs.jpg')}
                                    price="Dzd 5000" 
                                    name="Vans glasses"
                                    />
                                    </TouchableOpacity>
                                    <Category imageUri={require('./img/5.jpg')}
                                    price="Dzd 2500"
                                    name="Dior cross bag"
                                    />
                                    <Category imageUri={require('./img/belt.jpeg')}
                                    price="Dzd 4000"
                                    name="Mischf belt"
                                    />
                                    <Category imageUri={require('./img/vans.jpeg')}
                                    price="Dzd 300"
                                    name="Vans checkrs"
                                    />
                                    <Category imageUri={require('./img/ka.jpeg')}
                                    price="Dzd 1000"
                                    name="Berhska shirt"
                                    />
                                    <Category imageUri={require('./img/glasses.jpeg')}
                                    price="Dzd 4550"
                                    name="Square glasses"
                                    />
                                    <Category imageUri={require('./img/14.jpeg')}
                                    price="Dzd 2950"
                                    name="Jucy cake"
                                    />
                                </ScrollView>
                            </View>
                            <View style={{marginTop: 40, paddingHorizontal: 20}}>
                                <Text style={{fontSize:24, fontWeight: "700"}}>
                                Stores
                                </Text>
                                <View style={{width: width-40, height:200, marginTop:20}}>
                                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Nike</Text>
                                    <Image source={require('./img/7.jpg')} 
                                    style={{flex:1, height:null, width: null, resizeMode:'cover', borderRadius: 10, borderWidth:1, borderColor: '#dddddd'}}
                                    />
                                </View>
                                <View style={{width: width-40, height:200, marginTop:20}}>
                                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>PYREX</Text>
                                    <Image source={require('./img/15.jpg')} 
                                    style={{flex:1, height:null, width: null, resizeMode:'cover', borderRadius: 10, borderWidth:1, borderColor: '#dddddd'}}
                                    />
                                </View>
                                <View style={{width: width-40, height:200, marginTop:20}}>
                                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Adidas</Text>
                                    <Image source={require('./img/3.jpg')} 
                                    style={{flex:1, height:null, width: null, resizeMode:'cover', borderRadius: 10, borderWidth:1, borderColor: '#dddddd'}}
                                    />
                                </View>
                                <View style={{width: width-40, height:200, marginTop:20}}>
                                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Dior</Text>
                                    <Image source={require('./img/dior.jpg')} 
                                    style={{flex:1, height:null, width: null, resizeMode:'cover', borderRadius: 10, borderWidth:1, borderColor: '#dddddd'}}
                                    />
                                </View>
                                <View style={{width: width-40, height:200, marginTop:20}}>
                                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Canon</Text>
                                    <Image source={require('./img/21.jpeg')} 
                                    style={{flex:1, height:null, width: null, resizeMode:'cover', borderRadius: 10, borderWidth:1, borderColor: '#dddddd'}}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={{marginTop: 40}}>
                            <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Explore
                            </Text>

                            <View style={{marginTop: 20, paddingHorizontal: 20 ,flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                <View style={{ width: width / 2 - 30, height: width / 2 - 30, borderWidth: 0.5, borderColor: '#dddddd', paddingBottom: 5, marginTop: 20 }}>
                                    <View style={{ flex: 4 }}>
                                        <Image source={require('./img/socks.jpg')} 
                                            style={{flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                        />
                                    </View>
                                    <View style={{ flex: 3, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
                                        <Text style={{ fontSize: 15, fontWeight:'bold'}}>Dzd 1500</Text>
                                        <Text style={{fontSize: 14}}>Van Gogh mural socks</Text>
                                    </View>
                                </View>

                                <View style={{ width: width / 2 - 30, height: width / 2 - 30, borderWidth: 0.5, borderColor: '#dddddd', marginTop: 20 }}>
                                    <View style={{ flex: 4 }}>
                                        <Image source={require('./img/tj.jpg')} 
                                            style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}
                                        />
                                    </View>
                                    <View style={{ flex: 3, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
                                        <Text style={{ fontSize: 15, fontWeight:'bold'}}>Dzd 500</Text>
                                        <Text style={{fontSize: 14}}>Tom and Jerry leather passport cover</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{marginTop: 20, paddingHorizontal: 20 ,flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>

                                <View style={{ width: width / 2 - 30, height: width / 2 - 30, borderWidth: 0.5, borderColor: '#dddddd'}}>
                                    <View style={{ flex: 4 }}>
                                        <Image source={require('./img/joker.jpg')} 
                                            style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}
                                        />
                                    </View>
                                    <View style={{ flex: 3, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
                                        <Text style={{ fontSize: 15, fontWeight:'bold'}}>Dzd 2500</Text>
                                        <Text style={{fontSize: 14}}>Joker behance silicone cover</Text>
                                    </View>
                                </View>

                                <View style={{ width: width / 2 - 30, height: width / 2 - 30, borderWidth: 0.5, borderColor: '#dddddd'}}>
                                    <View style={{ flex: 4 }}>
                                        <Image source={require('./img/tote.jpg')} 
                                            style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}
                                        />
                                    </View>
                                    <View style={{ flex: 3, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
                                        <Text style={{ fontSize: 15, fontWeight:'bold'}}>Dzd 3000</Text>
                                        <Text style={{fontSize: 14}}>Sesame Street women's luxury shoulder bag</Text>
                                    </View>
                                </View>

                            </View>

                        </View>


                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});