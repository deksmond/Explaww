import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Category extends Component{
    render(){
        return (
            <View style={{height: 150, width: 130, marginLeft: 20 }} >
                <View style={{width: 130, height: 100}}>
                    <Image source={this.props.imageUri} 
                        style={{flex: 1, width: null, height: null, resizeMode: 'cover'}} 
                    />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                </View>
                <View style={{ paddingTop: 10 }}> 
                    <Text style={{ fontWeight: "800" }}>{this.props.price}</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ paddingTop: 4 }}>{this.props.name}</Text>
                        <TouchableOpacity style={{ marginHorizontal: 20, marginTop: -20 }}>
                            <Icon name="ios-heart-empty" size={24} />
                        </TouchableOpacity>
                    </View>
                </View>
                                        
            </View>
        );
    }
}

export default Category;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});