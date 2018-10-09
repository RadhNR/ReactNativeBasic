import React from 'react';
import { View, Button, Text, Alert } from 'react-native';

//PureComponent - it has shouldComponent already implemented
// shallow compare: check 2 references
// Deep compare: check the each properties 
// compare nextProps with this.props
// compare nectState with this.state
// return true if any difference , then call render
// return false, doesnt call render

export default class CartItem extends React.PureComponent {
    constructor() {
        super();
        console.log('CartItem const')
    }

    componentWillMount() {
        console.log("will componentWillMount")
    }

    componentDidMount() {
        console.log("will componentDidMount")
    }


    componentWillUnmount() {
        console.log("..............will componentWillunMount")
    }



    render() {
        const { item } = this.props;
        console.log('CartItem render', item.id)
        return (
            <View>
                <View>
                    <Text>Product Name: {item.name}</Text>
                    <Text>Price: ${item.price}</Text>
                    <Text>Qty: {item.qty}</Text>
                </View>
                <View>
                    <Button onPress={() => this.props.removeItem(item.id)} title="Remove"/>
                </View>
            </View>
        )
    }
}