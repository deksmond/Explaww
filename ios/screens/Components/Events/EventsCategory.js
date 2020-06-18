import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left } from 'native-base';

class EventsCategory extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex:1 }}>
            <View style={{ flex:1 }}>
                <ScrollView>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={this.props.imageUri} />
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