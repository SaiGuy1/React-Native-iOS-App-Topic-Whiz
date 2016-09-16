import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

module.exports = React.createClass({
  getInitialState() {
    return({
          email: '',
          password: '',
    })
  },

  render() {
    return(
      <View style={styles.container}>
        <Text> Sign In </Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={(text) => this.setState({email: text})}
        />

        <TextInput
          placeholder="Password"
          style={styles.input}
          onChangeText={(text) => this.setState({password: text})}
        />
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40
  },
  input: {
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    margin: 2,
    textAlign: 'center'
  }
})
