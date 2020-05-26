import React, { Component } from 'react';
import { Text, View, Image, ScrollView, StyleSheet, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class ItemScreen extends Component {
  static navigationOptions = {
    headerShown: false
  };

  render() {
    return (    
          <ScrollView>
            <View>
              <Image 
                style={{width: '100%', height: '120%'}}
                source={require('./img/vgs.jpg')}
              />

            <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.navigate("Home")}>
                <Icon name="ios-arrow-round-back" size={32} color="#FFF" />
            </TouchableOpacity>

            </View>

            <View style={styles.text}>
              <Text style={{ fontSize: 22, paddingHorizontal: 5 }}>Camouflag military street wear jacket</Text>
              <Text style={{ fontSize: 22, fontWeight: '700', paddingTop: 10, paddingHorizontal: 5 }}>DZD 9000</Text>
              <Text style={{ fontSize: 22, fontWeight: '500', paddingTop: 10, paddingHorizontal: 5 }}>Delivery fee: DZD 900</Text>
              <Text style={{ fontSize: 22, paddingTop: 10, paddingHorizontal: 5}}>Sold by "SELLER"</Text>
           </View>

           <View style={{flex: 1, flexDirection: 'row', justifyContent:'center', paddingTop: 20}}>
              <TouchableOpacity style={{borderRadius: 5,justifyContent:'center', height: 30, width: 150, margin: 10, backgroundColor:'gold'}}>
                <Text style={{color: 'black', textAlign:'center', fontSize: 24}}>Order</Text>
              </TouchableOpacity>
           </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    backButton: {
        position: "absolute",
        top: 48,
        height: 32,
        width: 32,
        left: 15,
        borderRadius: 16,
        backgroundColor: "rgba(21, 22, 48, 0.3)",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
      marginTop: 35,
      paddingTop: 45
    }
});