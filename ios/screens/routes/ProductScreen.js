import React, { Component } from 'react';
import { Text, View, Image, SafeAreaView, ScrollView, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Dropdown } from 'react-native-material-dropdown'

export default class ItemScreen extends Component {

  static navigationOptions = {
    headerShown: false
  };

  state = {
      counter: 1,
  }

  incrementCounter = () => {
    this.setState({
        counter: this.state.counter + 1,
    })
}

decrementCounter = () => {
    this.setState({
        counter: this.state.counter - 1,
    })
}

  render(){

    const counter = this.state.counter;

    return(
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView>
            <View>
                <Image 
                  style={{ width: '100%', height: '120%' }}
                  source={require('../img/AJ1.jpg')}
                />

              <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.navigate("Store")}>
                  <Icon name="ios-arrow-round-back" size={45} color="#E9446A" />
              </TouchableOpacity>

            </View>

            <View style={styles.text}>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>Dzd 31,500</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 18, paddingTop: 10 }}>Air Jordan 1 Retro High OG 'Obsidian'</Text>
                <TouchableOpacity style={{ marginHorizontal: 30, marginTop: -20  }}>
                    <Icon name="ios-heart-empty" size={30} />
                </TouchableOpacity>
              </View>
                  <Dropdown
                    label='Obsidian'
                  />
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 17, paddingTop: 10 }}>Qty:</Text>
                    <TouchableOpacity style={{ marginTop: 8, marginHorizontal: 15 }} onPress={this.incrementCounter}>
                        <Icon name="md-add" size={25} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 ,marginTop: 8, marginHorizontal: 15 }}>{counter}</Text>
                    <TouchableOpacity style={{ marginTop: 8, marginHorizontal: 15 }} onPress={this.decrementCounter}>
                        <Icon name="md-remove" size={25} />
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 17, paddingTop: 10, fontWeight: "600" }}>Delivery fee: DZD 2,550</Text>
              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Checkout")}>
                <Text style={{color: '#FFF', textAlign:'center', fontSize: 20}}>BUY NOW</Text>
              </TouchableOpacity>

            </View>

        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
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
      marginTop: 25,
      paddingTop: 65,
      paddingHorizontal: 15
    },
    button: {
        backgroundColor:'#E9446A',
        marginTop: 30,
        marginHorizontal: 30,
        borderRadius: 5,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center'
    }
});