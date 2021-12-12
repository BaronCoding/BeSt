import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const Header = [
    {
        id: 1,
        title: 'Type'
    },
    {
        id: 2,
        title: 'Subject'
    },
    {
        id: 3,
        title: 'Related Event'
    },
    {
        id: 4,
        title: 'From'
    },
    {
        id: 5,
        title: 'To'
    }
];

const injectScreen = () => {
    
    return (
        <View style={ styles.container }>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Injects </Text>
                <View style={{ flexDirection: 'row' }}>
                    {Header.map((item) => {
                        return (
                            <View key={ item.id } style={ styles.headerStyle }>
                                <Text>{ item.title }</Text>
                            </View>
                        )
                    })}
                </View>         
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    headerStyle: {
        flex: 5,
        justifyContent: 'space-evenly',
        justifyContent: 'center',
        flexDirection: 'row', 
        backgroundColor: '#00618b',
        color: 'white'
    }
});

export default injectScreen;