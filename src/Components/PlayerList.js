import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Add clickable so that the selected player can be edited
const PlayerList = ({ player }) => {
    return (
        <View style={{ marginTop: 20 }}>
            <Text style={ styles.header }>Player List</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                { player.map((item) => {
                    return(
                        <View key={ item.id } style={{ borderRightColor: 'black', borderRightWidth: 1 }}>
                            {/* <Text style={ styles.flatListText }>{ item.active === true ? 'True' : 'False' }</Text>   */}
                            <Text style={{ fontWeight: 'bold' }}>Player no { item.id }</Text>
                            <Text style={ styles.flatListText }>{ item.name }</Text> 
                            <Text style={ styles.flatListText }>{ item.gameName }</Text> 
                            <Text style={ styles.flatListText }>{ item.playerType }</Text>
                            <Text style={ styles.flatListText }>{ item.email }</Text> 
                            {/* <Text style={ styles.flatListText }>{ item.represented === true ? 'True' : 'False' }</Text>  */}
                            {/* <Text style={ styles.flatListText }>{ item.inChat === true ? 'True' : 'False' }</Text>  */}
                        </View>
                    )
                })}
            </View>
            
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10
    },
    flatListText: {
        marginTop: 10,
        borderBottomColor: 'black', 
        borderBottomWidth: 0.4,
        width: 180
    }
});

export default PlayerList;