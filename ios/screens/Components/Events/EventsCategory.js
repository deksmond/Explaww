import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left } from 'native-base';

class EventsCategory extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <Card>
                        <CardItem>
                            <Left>
                                <Image source={this.props.imageUri}  style={{ width: 90, height: 90, marginRight: 16 }}/>
                                <Body>
                                    <Text style={{fontSize: 20}}>{this.props.name}</Text>
                                    <Text style={{fontSize: 15,fontWeight:'bold'}}>{this.props.date}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card>
                </ScrollView>
            </View>
            </SafeAreaView>
        );
    } 
}

export default EventsCategory;