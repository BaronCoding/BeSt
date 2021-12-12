import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, TextInput } from 'react-native';

const AddPlayer = ({ DATA, player }) => {
    const [newPlayer, setNewPlayer] = useState([
        {   active: Boolean,
            email: '', 
            name: '', 
            gameName: '', 
            playerType: '', 
            represented: Boolean, 
            inChat: Boolean,
            id: 1
        }
    ]);
    
    const checkForm = () => {
        console.log(newPlayer);

    };
    const listHeader = <View style={{ marginBottom: 20 }}>
        <TouchableOpacity style={{ height: 40, width: 130, borderRadius: 10, alignItems: 'center', backgroundColor: '#00618b' }}>
            <Text style={{ top: 8, fontWeight: 'bold', color: 'white' }} onPress={ () => checkForm() }>Create Player</Text>
        </TouchableOpacity>
    </View>;

    return (
        <SafeAreaView style={{ flexDirection: 'row' }}>
            <FlatList 
                ListHeaderComponent={ listHeader }
                data={ DATA }
                // style={ styles.flatlistContainer }
                renderItem={({ item }) => { 
                    return (
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={ styles.gameFontStyle }>{ item.title }</Text> 
                            <TextInput 
                                style={ styles.inputStyle }
                                placeholder={ `Insert ${ item.title }` }
                                value={ setNewPlayer(newPlayer[item.title]) }
                                
                            />
                        </View>
                    )
                }}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 2
    },
    gameFontStyle: {
        width: 140,
        fontWeight: 'bold',
        marginTop: 10,
        borderBottomColor: 'black', 
        borderBottomWidth: 0.4
    },
    inputStyle: {
        flex: 1,
        borderBottomColor: 'black', 
        borderBottomWidth: 0.4
    }
});

export default AddPlayer;