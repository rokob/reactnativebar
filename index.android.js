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

import { Client } from 'rollbar-react-native'

const rollbar = new Client('2278da7931544933a58892af16c5d78f');

export default class reactnativebar extends Component {
  componentDidMount() {
    rollbar.error('Hello from React Native');
  }

  someFunction() {
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
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
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
