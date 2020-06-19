import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class EventScreen extends React.Component{

    static navigationOptions = {
        headerShown: false
    };

    render(){
        return(
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View>
                        <Image source={require('../img/women.jpg')} style={styles.image} />
                        <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.navigate("Events")}>
                            <Icon name="ios-arrow-round-back" size={45} color="#E9446A" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.text}>
                        <Text style={{ marginBottom: 25, fontSize: 24, fontWeight:"500", alignSelf: "center" }}>Day of the black woman</Text>
                        <Text style={{ fontSize: 16 }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </Text>
                    </View>
                
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 450
    },
    backButton: {
        position: "absolute",
        top: -5,
        height: 32,
        width: 32,
        left: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        marginTop: 15,
        marginHorizontal: 10
    }
});