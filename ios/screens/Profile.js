import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView, Dimensions, ImageBackground, StyleSheet, TouchableOpacity, Linking } from 'react-native';
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

                        <View style={{ flex: 1, flexDirection: 'row', marginTop: 50, paddingHorizontal: 30, justifyContent: 'space-around' }}>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate("order")}>
                                <View style={{ width: width - 280 ,height: 130, backgroundColor: 'white', borderColor: '#dddddd', borderWidth: 1, borderRadius: 10 }}>
                                    <View style={{ flex: 1, alignItems: 'center', paddingTop: 20}}>
                                            <Icon name="ios-cube" size={60} color='rgba(246, 36, 89, 5)' />
                                            <Text style={styles.cardText}>Orders</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => Linking.openURL('mailto: support@eureka.com')} title="support@eureka.com">
                            <View style={{ width: width - 280 ,height: 130, backgroundColor: 'white', borderColor: '#dddddd', borderWidth: 1, borderRadius: 10 }}>
                                <View style={{ flex: 1, alignItems: 'center', paddingTop: 20}}>
                                        <Icon name="ios-desktop" size={60} color='rgba(246, 36, 89, 5)'/>
                                        <Text style={styles.cardText}>Customer Service</Text>
                                </View>
                            </View>
                            </TouchableOpacity>

                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', marginTop: 40, paddingHorizontal: 30, justifyContent: 'space-around'}}>

                            <TouchableOpacity onPress={this.signOutUser}>
                            <View style={{ width: width - 280 ,height: 130, backgroundColor: 'white', borderColor: '#dddddd', borderWidth: 1, borderRadius: 10 }}>
                                <View style={{ flex: 1, alignItems: 'center', paddingTop: 20}}>
                                        <Icon name="ios-arrow-back" size={60} color='rgba(246, 36, 89, 5)'/>
                                        <Text style={styles.cardText}>Sign out</Text>
                                </View>
                            </View>
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
        fontSize: 24,
        fontWeight: '700'
    },
    cardText: {
        fontWeight: '500',
    },
});