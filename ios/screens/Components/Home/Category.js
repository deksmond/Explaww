import React, { Component } from 'react';
import { View, Text, StyleSheet, Image  } from 'react-native';

class Category extends Component{
    render(){
        return (
            <View style={{height: 130, width: 130, marginLeft: 20, borderRadius: 5, borderWidth: 0.5, borderColor: '#dddddd'}} >
                <View style={{flex: 4}}>
                    <Image source={this.props.imageUri} 
                        style={{flex: 1, width: null, height: null, resizeMode: 'cover'}} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                </View>
                <View style={{flex: 3, paddingLeft: 10, paddingTop: 10 }}> 
                    <Text style={{fontWeight: 'bold'}}>{this.props.price}</Text>
                    <Text style={{paddingTop: 4}}>{this.props.name}</Text>
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