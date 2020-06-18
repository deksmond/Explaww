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
                            style={{ flex: 1, backgroundColor: 'white' }} 
                            clearButtonMode="always"
                            />
                        </View>                    
                    </View>
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{flex:1, backgroundColor:'white', paddingTop: 20}}>
                            <Text style={{fontSize: 24, fontWeight:'700', paddingHorizontal: 10}}>Daily Deals
                            </Text>
                            <View style={{height: 150, marginTop: 20}}>
                                <ScrollView 
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                 >

                                     <TouchableOpacity onPress={() => this.props.navigation.navigate("Item")}>
                                        <Category imageUri={require('./img/vgs.jpg')}
                                        price="Dzd 5,000" 
                                        name="Vans glasses"
                                        />
                                    </TouchableOpacity>

                                        <Category imageUri={require('./img/5.jpg')}
                                        price="Dzd 2,500"
                                        name="Dior cross bag"
                                        />

                                    <Category imageUri={require('./img/belt.jpeg')}
                                    price="Dzd 4,000"
                                    name="Mischf belt"
                                    />
                                    
                                    <Category imageUri={require('./img/vans.jpeg')}
                                    price="Dzd 300"
                                    name="Vans checkrs"
                                    />

                                    <Category imageUri={require('./img/ka.jpeg')}
                                    price="Dzd 1,000"
                                    name="Berhska shirt"
                                    />

                                    <Category imageUri={require('./img/glasses.jpeg')}
                                    price="Dzd 4,550"
                                    name="Square glasses"
                                    />

                                    <Category imageUri={require('./img/14.jpeg')}
                                    price="Dzd 2,950"
                                    name="Jucy cake"
                                    />
                                    
                                </ScrollView>
                            </View>
                            <View style={{marginTop: 40, paddingHorizontal: 20}}>
                                <Text style={{fontSize: 24, fontWeight: "700"}}>
                                Stores
                                </Text>

                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Store")}>
                                <View style={{width: width-40, height:200, marginTop:20}}>
                                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Nike</Text>
                                    <Image source={require('./img/7.jpg')} 
                                    style={{flex:1, height:null, width: null, resizeMode:'cover', borderRadius: 10, borderWidth:1, borderColor: '#dddddd'}}
                                    />
                                </View>
                                </TouchableOpacity>

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
                                Market place
                            </Text>
                                
                            <View style={{marginTop: 25, marginBottom: 100, paddingHorizontal: 20 ,flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            
                                <View style={{ width: width / 2 - 30, height: width / 2 - 30, paddingBottom: 5 }}>
                                    <View style={styles.imageSize}>
                                        <Image source={require('./img/tote.jpg')} 
                                            style={styles.img}
                                        />
                                    </View>
                                    <View style={{ alignItems: 'flex-start', justifyContent: 'space-evenly', paddingTop: 7 }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ fontSize: 15, fontWeight:"800" }}>Dzd 3,000</Text>
                                            <TouchableOpacity style={{ marginHorizontal: 60 }}>
                                                <Icon name="ios-heart-empty" size={24} />
                                            </TouchableOpacity>
                                        </View>
                                        <Text style={{fontSize: 15, paddingTop: 5 }}>Sesame Street women's luxury shoulder tote bag</Text>
                                    </View>
                                </View>

                                <View style={{ width: width / 2 - 30, height: width / 2 - 30, paddingBottom: 5 }}>
                                    <View style={styles.imageSize}>
                                        <Image source={require('./img/tj.jpg')} 
                                            style={styles.img}
                                        />
                                    </View>
                                    <View style={{ alignItems: 'flex-start', justifyContent: 'space-evenly', paddingTop: 7 }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ fontSize: 15, fontWeight:"800"}}>Dzd 500</Text>
                                            <TouchableOpacity style={{ marginHorizontal: 60 }}>
                                                <Icon name="ios-heart-empty" size={24} />
                                            </TouchableOpacity>
                                        </View>    
                                            <Text style={{fontSize: 14, paddingTop: 5 }}>Tom and Jerry leather passport cover</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{marginTop: 40, marginBottom: 100, paddingHorizontal: 20 ,flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>

                                <View style={{ width: width / 2 - 30, height: width / 2 - 30, paddingBottom: 5 }}>
                                    <View style={styles.imageSize}>
                                        <Image source={require('./img/AirMax.jpg')} 
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
                                        <Image source={require('./img/AF1B.jpg')} 
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

                            <View style={{marginTop: 40, marginBottom: 100, paddingHorizontal: 20 ,flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>

                                <View style={{ width: width / 2 - 30, height: width / 2 - 30, paddingBottom: 5 }}>
                                    <View style={styles.imageSize}>
                                        <Image source={require('./img/socks.jpg')} 
                                            style={styles.img}
                                        />
                                    </View>
                                    <View style={{ alignItems: 'flex-start', justifyContent: 'space-evenly', paddingTop: 7 }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ fontSize: 15, fontWeight:"800" }}>Dzd 1,500</Text>
                                            <TouchableOpacity style={{ marginHorizontal: 60 }}>
                                                <Icon name="ios-heart-empty" size={24} />
                                            </TouchableOpacity>
                                        </View>
                                        <Text style={{fontSize: 15, paddingTop: 5 }}>Van Gogh desgin mural socks</Text>
                                    </View>
                                </View>

                                <View style={{ width: width / 2 - 30, height: width / 2 - 30, paddingBottom: 5 }}>
                                    <View style={styles.imageSize}>
                                        <Image source={require('./img/joker.jpg')} 
                                            style={styles.img}
                                        />
                                    </View>
                                    <View style={{ alignItems: 'flex-start', justifyContent: 'space-evenly', paddingTop: 7 }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ fontSize: 15, fontWeight:"800" }}>Dzd 2,500</Text>
                                            <TouchableOpacity style={{ marginHorizontal: 60 }}>
                                                <Icon name="ios-heart-empty" size={24} />
                                            </TouchableOpacity>
                                        </View>
                                        <Text style={{fontSize: 14, paddingTop: 5 }}>Joker Behance silicone cover</Text>
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
    },
    imageSize: {
        width: 170,
        height: 200
    },
    img: {
        flex: 1, 
        height:null, 
        width: null, 
        resizeMode: 'cover'
    }
});