// ProductList.js
import React from 'react';

import {View, Text, Button, Alert} from 'react-native';
 
export default class ProductList extends React.Component{
    constructor(props) {
        super(props);
    }
   
    render() {
        console.log('ProductList render');

        return (
            <View>
                <Text style={ {fontSize: 30}}> Product List </Text>
 
            </View>
        )
    }
}