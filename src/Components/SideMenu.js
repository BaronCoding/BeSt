import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const SideMenu = () => {
    return (
        <View style={ styles.container }>
            <Text>The Side Menu</Text>
            <Text>Logo</Text>
            <Text>Name</Text>
            <Button title='+ New Message' />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '40%',
        height: '100%',
        backgroundColor: '#00618b',
        color: 'white'
    }
});

export default SideMenu;