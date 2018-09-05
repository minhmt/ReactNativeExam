/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';


import {
  createStackNavigator,
} from 'react-navigation';

import { 
  StatePropScreen,
} from './screens/StateProps.js';


// Hello Screen
class HelloScreen extends React.Component {

   static navigationOptions = {
    title: 'Welcome',
  };

  render() {

    const { navigate } = this.props.navigation;


    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>

        <Button
          title="Go to PropsStateSceen"
          onPress={() =>
            navigate('PropsStateSceen', { name: 'MinhMT' })
          }
        />
      </View>
    );
  }
}

//



const App = createStackNavigator({
  HelloScreen: { screen: HelloScreen },
  PropsStateSceen: { screen: StatePropScreen },
});



export default App;


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


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
    color: 'red'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
