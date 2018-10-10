import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './app/components/Counter';
import Address from './app/components/Address';
import Cart from './app/components/Cart';
import Home from './app/components/Home';
import ProductList from './app/components/ProductList';
import Checkout from './app/components/Checkout';

import { createStackNavigator } from 'react-navigation';

// returns a component
const StackNavigator = createStackNavigator({
  Home: { // 'Home' can write with qoute also
    screen: Home,
    // navigationOptions: {
    //   title: 'Home'
    // }
  },
  Cart: {
    screen: Cart
  },
  Checkout: {
    screen: Checkout
  }
});

export default class App extends React.Component {
  render() {
    return (
      <StackNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    // alignItems: 'center',
    //justifyContent: 'center',
  },
});
