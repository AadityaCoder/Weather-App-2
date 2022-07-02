import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class Location extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundImage={require('../download.png')}
          centerComponent={{
            text: 'Location',
            style: { color: '#fff', fontSize: 30 },
          }}
        />

        <Image
          style={styles.imageIcon}
          source={{
            uri: 'https://www.pngitem.com/pimgs/m/77-775832_sun-behind-rain-cloud-icon-cartoon-cloud-and.png',
          }}
        />

        <Image
          style={styles.addButton}
          source={require('../add.png')}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.setState.text}
        />

        <TouchableOpacity>
          style={styles.goButton}
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 100,
  },
  addButton: {
    width: 50,
    height: 50,
    marginHorizontal: 135,
    marginEnd: 10
  }
});
