import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

const PlayersEdit = ({ DATA, player }) => {
    
    return (
            <View style={ styles.container }>
                <View>
                    <Text style={ styles.header }>Players:</Text>
                </View>
                <View style={{ flexDirection: 'row', flex: 2 }}>
                    <FlatList 
                        style={ styles.flatlistContainer }
                        data={ DATA }
                        renderItem={({ item }) => { 
                            return <Text style={{ fontWeight: 'bold', marginTop: 10, borderBottomColor: 'black', borderBottomWidth: 0.4 }}>{ item.title }</Text> 
                        }}
                        keyExtractor={(item) => item.id}
                    />
                    <FlatList 
                        data={ player }
                        renderItem={ ({ item }) => { 
                            return (
                                <View>
                                    <Text style={ styles.flatListText }>{ item.active === true ? 'True' : 'False' }</Text> 
                                    <Text style={ styles.flatListText }>{ item.email }</Text> 
                                    <Text style={ styles.flatListText }>{ item.name }</Text> 
                                    <Text style={ styles.flatListText }>{ item.gameName }</Text> 
                                    <Text style={ styles.flatListText }>{ item.playerType }</Text> 
                                    <Text style={ styles.flatListText }>{ item.represented === true ? 'True' : 'False' }</Text> 
                                    <Text style={ styles.flatListText }>{ item.inChat === true ? 'True' : 'False' }</Text> 
                                </View>

                            )
                        }}
                        keyExtractor={(item) => item.id }
                    />
                </View>
            </View>
            
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 20
    },
    header: {
        fontWeight: 'bold',
        fontSize: 16
    },
    flatlistContainer: {
        height: 250
        
    },
    flatListText: {
        marginTop: 10,
        borderBottomColor: 'black', 
        borderBottomWidth: 0.4
    }
});

export default PlayersEdit;