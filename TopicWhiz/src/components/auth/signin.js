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

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style= {styles.button}> Sign In</Text>
        </TouchableOpacity>
        <View style={styles.links}>
        <TouchableOpacity>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigator.push({name: 'signUp'})}>
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: 'teal'
  },
  input: {
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    margin: 2,
    backgroundColor: 'white',
    textAlign: 'center'
  },
  buttonContainer: {
    height: 50,
    justifyContent: 'center',
    borderColor: 'teal',
    backgroundColor: 'gold',
    borderWidth: 1,
    borderRadius: 15,
    margin: 2
  },
  button: {
    textAlign: 'center'
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  link: {
    color: '#0000FF'
  }
})
