import React from 'react';
import { View, Button, Text, Alert } from 'react-native';
import CartList from './CartList';

export default class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                {id: 1, name: 'Product 1', price: 100, qty: 1},
                {id: 2, name: 'Product 2', price: 100, qty: 1}
            ],
            amount: 0,
            totalItems: 0
        }

    }

   
    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        const item = {
            id: id,
            name: 'Prodcut' + id,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        //add item into array
        const items = [...this.state.items, item];
        this.setState({items: items});
    }

    empty = () => {
        const items = [];
        this.setState({items: items})
    }

    dummy = () => {
        this.setState({flag: true});
    }

    removeItem = (id) => {
        console.log('remove item from array', id);
        const items = this.state.items.filter(item => item.id != id);
        this.setState({items: items})
    }

    updateItem = (id, qty) => {
        console.log('update', id, qty);
    }

    render() {
        return (
            <View>
                <View>
                    <Button title="Add" onPress={this.addItem} />
                    <Button title="Empty" onPress={this.empty} />
                    <Button title="Press" onPress={this.dummy} />
                </View>
                <View>
                    <CartList items={this.state.items} removeItem={this.removeItem} updateItem={this.updateItem}/>
                </View>
            </View>
        )
    }
}