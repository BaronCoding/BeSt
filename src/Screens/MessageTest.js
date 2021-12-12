import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
import ModalFilterPicker from 'react-native-modal-filter-picker';

export default function newMessage() {
    const [from, setFrom] = useState('');
    // const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedRec, setSelectedRec] = useState([]);
    const [visible, setVisible] = useState(false);
    const [picked, setPicked] = useState(null);
    const [recipient, setRecipient] = useState([
        { key: 'admin', label: 'Admin' },
        { key: 'controller', label: 'Game Controller' },
        { key: 'player1', label: 'Player1' },
        { key: 'player2', label: 'Player2' },
        { key: 'demo1', label: 'Demo Player1' },
        { key: 'demo2', label: 'Demo Player2' }
    ]);

    const onSelect = (x) => {
        setPicked(x);
        // setSelectedRec({ ...selectedRec }, [x])
        setVisible(false);
        console.log(x, picked);
        // console.log(selectedRec);
    
    };

    return (
        <View style={styles.container}>
                <View style={{ justifyContent: 'space-between', flex: 1 , flexDirection: 'row' }}>
                    <Text style={{ color: 'black' }}>From: </Text>
                    <Text>User Name</Text>
                </View>            
            
            {/* <TextInput 
                style={styles.inputField}
                placeholder='From'
            />
            <TextInput 
                style={styles.inputField}
                placeholder='To'
            /> */}
            {/* <Picker
                selectedValue={selectedRec}
                style={{ height: 20, width: '40%' }}
                onValueChange={((itemValue, itemIndex) => {
                    setSelectedRec(itemValue);
                })}
            >
                {recipient.map((x, y) => {
                    return ( 
                        <Picker.Item label={ x.label } value={ x.value } key={ y } />
                    )
                })}
            </Picker> */}
            <View >
                {/* <TouchableOpacity onPress={setVisible(true)}>
                    <Text>Select country</Text>
                </TouchableOpacity>      
                <Text>Selected:</Text>
                <Text>{picked}</Text>
                    <ModalFilterPicker
                        visible={visible}
                        onSelect={setPicked(picked), setVisible(false)}
                        onCancel={setVisible(false)}
                        options={recipient}
                    /> */}
                    <TouchableOpacity onPress={ () => setVisible(true) } style={ styles.recSelect }>
                        <Text>To:</Text>
                    </TouchableOpacity>
                    <Text>Selected:</Text>
                    <Text>{ picked }</Text>
                        <ModalFilterPicker 
                            visible={ visible }
                            options= { recipient }
                            onSelect={ () => onSelect() }
                            onCancel={ () => setVisible(false) }
                            
                            listContainerStyle={ styles.field }
                            optionTextStyle={ styles.fieldText }
                            cancelButtonStyle={ styles.cancelButton }
                            // cancelButtonTextStyle={ styles.cancelButtontext }
                        />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: 'darkgrey',
      alignItems: 'center',
    //   justifyContent: 'center',
    },
    inputField: {
        color: 'white',
        width: '40%',
        marginTop: 40
    },
    recSelect: {
        height: 60,
        width: 200,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1
    },
    field: {
        backgroundColor: '#00618b',
        width: 250,
        height: 500
    },
    fieldText: {
        color: 'white',
        fontWeight: 'bold',

    },
    cancelButton: {
        backgroundColor: '#00618b',
        width: 80,
        height: 35,
        marginTop: 50,
        borderRadius: 10
    },
    cancelButtontext: {
        fontWeight: 'bold'
        // padding: 25
    }
  });