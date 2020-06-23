import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView, Dimensions, ImageBackground, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

import * as firebase from 'firebase'

const {height, width} = Dimensions.get('window')

class Profile extends Component{

    state = {
        email: "",
        displayName: ""
    }
    
    componentDidMount(){
        const{email, displayName} = firebase.auth().currentUser;
    
        this.setState({ email, displayName });
    }
    
    signOutUser = () => {
        firebase.auth().signOut();
    }
    
    
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>

                    <View style={styles.header}>
                        <Text style={{ fontSize: 18, fontWeight:'700', marginTop: 5 }}>
                            Profile
                        </Text>
                    </View>

                    <ScrollView> 
                        <View style={{ paddingHorizontal: 10 }}>
                            <View style={{ width: width -20, height: 200, marginTop: 40 }}>
                                <ImageBackground
                                    style={{ flex: 1, height: null, width: null, resizeMode:'cover' }}
                                    source={require('./img/artx.jpg')}>
                                    <View style={{width: '100%', height:'100%', backgroundColor: 'rgba(246, 36, 89, .3)', paddingTop: 70 }}>
                                        <Text style={styles.txt}>Hello,</Text>
                                        <Text style={styles.title}>{this.state.email}</Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        </View>

                        <View style={{ flex: 1, marginTop: 25 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("order")}>
                                <Card>
                                    <CardItem>
                                        <Left>
                                            <Icon name="ios-cube" size={36} color='rgba(246, 36, 89, 5)' />
                                            <Body>
                                                <Text style={{fontSize: 17}}>Orders</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate("sell")}>
                                <Card>
                                    <CardItem>
                                        <Left>
                                            <Icon name="ios-cash" size={36} color='rgba(246, 36, 89, 5)' />
                                            <Body>
                                                <Text style={{fontSize: 17}}>Sell</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => Linking.openURL('mailto: support@eureka.com')} title="support@eureka.com">
                                <Card>
                                    <CardItem>
                                        <Left>
                                            <Icon name="ios-desktop" size={36} color='rgba(246, 36, 89, 5)' />
                                            <Body>
                                                <Text style={{fontSize: 17}}>Customer Service</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.signOutUser}>
                                <Card>
                                    <CardItem>
                                        <Left>
                                            <Icon name="ios-arrow-back" size={36} color='rgba(246, 36, 89, 5)' />
                                            <Body>
                                                <Text style={{fontSize: 17}}>Sign out</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>

                        </View>

                    </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Profile;

const styles = StyleSheet.create ({
    header: {
        height: 40, 
        alignItems: 'center', 
        borderBottomColor:'#dddddd', 
        borderBottomWidth: 1
    },
    txt: {
        color: 'white',
        textAlign: 'center',
        fontSize: 17,
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '700'
    },
    cardText: {
        fontWeight: '500',
    },
});