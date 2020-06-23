import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Select image',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

export default class SellScreen extends React.Component{

    static navigationOptions = {
        headerShown: false
    };

/*    chooseImage = () => {

        let options = {
          title: 'Select Image',
          customButtons: [
            { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
          ],
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };     
        ImagePicker.launchCamera(options, (response) => {
            console.log('Response = ', response);
    
            if (response.didCancel) {
            console.log('User cancelled image picker');
            } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
            } else {
            const source = { uri: response.uri };
            console.log('response', JSON.stringify(response));
            this.setState({
                filePath: response,
                fileData: response.data,
                fileUri: response.uri
            });
            }
        });
  
    }
*/

launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        this.setState({
            filePath: response,
            fileData: response.data,
            fileUri: response.uri
        });
        this.setState({
            avatarSource: source,
          });
        }
    });

  }

    render(){
        return(
            <SafeAreaView>

                <View style={styles.header}>
                    <Text style={{ fontSize: 18, fontWeight:'700', marginTop: 5 }}>
                        Sell
                    </Text>
                    <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.navigate("Home")}>
                        <Icon name="ios-arrow-round-back" size={38} color="#E9446A" />
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress={this.launchImageLibrary} style={styles.camera}>
                            <Icon name="ios-camera" size={50} />
                            <Text style={{ paddingTop: 15, paddingLeft: 10, fontSize: 18 }}>Upload image</Text>
                        </TouchableOpacity>
                        <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
                    </View>
                </ScrollView>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 40, 
        alignItems: 'center', 
        borderBottomColor:'#dddddd', 
        borderBottomWidth: 1
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
    camera: {
        marginHorizontal: 30,
        marginTop: 30,
        flexDirection: "row"
    }
});