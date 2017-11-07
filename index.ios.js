/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

import { Client, Configuration } from 'rollbar-react-native'

const rollbar = new Client(new Configuration('2278da7931544933a58892af16c5d78f', {
  endpoint: 'https://api.rollbar.com/api/1/item'/*'http://10.0.0.3:8000/api/1/item'*/
}));

export default class reactnativebar extends Component {
  componentDidMount() {
    console.log('I AM MOUNTED!');
    rollbar.error('Hello from React Native');
  }

  someFunction() {
    throw new Error('I am thrown from JS');
    this.someOtherFunction()
  }

  someOtherFunction() {
    rollbar.error(new Error('React Native Error'))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Button
          onPress={ () => { this.someFunction() }}
          title="Trigger JS error"
          color="#841584"
          accessibilityLabel="error"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('reactnativebar', () => reactnativebar);
