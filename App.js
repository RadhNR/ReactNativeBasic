import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './app/components/Counter';
import Address from './app/components/Address';
import Cart from './app/components/Cart';
import Home from './app/components/Home';
import ProductList from './app/components/ProductList';
import Checkout from './app/components/Checkout';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

// returns a component
const StackNavigator = createStackNavigator({
  Home: { // 'Home' can write with qoute also
    screen: Home,
    // navigationOptions: {
    //   title: 'Home'
    // }
  },
  // Cart: { // keep it only in one place, else it will take localscope and we will get confuse
  //   screen: Cart
  // },

  //TODO: add Counter 
  Counter: {
    screen: Counter
  },
  Checkout: {
    screen: Checkout
  }
});


const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: StackNavigator //Home
  },
  ProductList: {
    screen: ProductList
  },
  Cart: {
    screen: Cart
  }
}, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Cart') {
          iconName = `ios-cart${focused ? '' : '-outline'}`;
        } else {
          iconName = `ios-list-box${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    },
  });

export default class App extends React.Component {
  render() {
    return (

      <TabNavigator />
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
