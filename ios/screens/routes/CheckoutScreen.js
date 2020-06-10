import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity, Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class CheckoutScreen extends React.Component{

    static navigationOptions = {
        headerShown: false
    };

    UNSAFE_componentWillMount(){
        this.startHeaderHeight = 10;
        if(Platform.OS == 'android'){
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    render(){
        return(
            <SafeAreaView style={styles.contianer}>
                    <View style={styles.header}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Icon name="md-close" size={24} color="#E9446A"/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 17, fontWeight: "500", color: 'red' }}>Checkout</Text>
                            </TouchableOpacity>
                    </View>
                    <ScrollView>
                        
                    </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    contianer: {
        flex: 1
    },
    header: {
        height: this.startHeaderHeight,
        borderBottomColor: "#dddddd",
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingVertical: 12
    }
});