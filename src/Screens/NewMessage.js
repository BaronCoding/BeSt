import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Keyboard } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import RecSelector from '../Components/RecSelector';

// import Ant Design... 


// import SearchableDropdown from 'react-native-searchable-dropdown'
// import { Picker } from '@react-native-picker/picker';
// import ModalFilterPicker from 'react-native-modal-filter-picker';

export default function newMessage() {
    const [from, setFrom] = useState('');
    // const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedRecTo, setSelectedRecTo] = useState([]);
    const [selectedRecCc, setSelectedRecCc] = useState([]);
    const [selectedRecBcc, setSelectedRecBcc] = useState([]);

    const [pickedTo, setPickedTo] = useState('');
    const [pickedCc, setPickedCc] = useState('');
    const [pickedBcc, setPickedBcc] = useState('');
    
    const [recipient, setRecipient] = useState([        //List of players
        { label: 'Admin', value: 'admin' },
        { label: 'Game Controller', value: 'controller' },
        { value: 'player1', label: 'Player1' },
        { value: 'player2', label: 'Player2' },
        { value: 'demo1', label: 'Demo Player1' },
        { value: 'demo2', label: 'Demo Player2' }
    ]);

 
    const onSelectTo = (x) => {
        setPickedTo(x);
        setSelectedRecTo([ ...selectedRecTo, x ]);
    
    };
    
    const onSelectCc = (x) => {
        setPickedCc(x);
        setSelectedRecCc([ ...selectedRecCc, x ]);
    
    };
    
    const onSelectBcc = (x) => {
        setPickedBcc(x);
        setSelectedRecBcc([ ...selectedRecBcc, x ]);
    
    };

    const removeRecTo = (index) => {
        let list = selectedRecTo.filter((val, ind) => ind !== index);
        setSelectedRecTo(list);

    };

    const removeRecCc = (index) => {
        let list = selectedRecCc.filter((val, ind) => ind !== index);
        setSelectedRecCc(list);

    };

    const removeRecBcc = (index) => {
        let list = selectedRecBcc.filter((val, ind) => ind !== index);
        setSelectedRecBcc(list);

    };

    return (
        <ScrollView>
            <View style={styles.mainContainer}>       
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ color: 'black', width: 60 }}>From: </Text>      
                    <Text style={{ width: 280, fontWeight: 'bold' }}>User Name</Text>
                </View>    
                <View style={{ flexDirection: 'row' }}>
                        <RecSelector 
                            rec='To:'
                            recipient={ recipient }
                            selectedRec={ selectedRecTo }
                            pickedTo={ pickedTo }
                            onSelect={ onSelectTo }
                            removeRec= { removeRecTo }
                        />
                    </View>
                <View style={{ flexDirection: 'row' }}>
                        <RecSelector 
                            rec='Cc:'
                            recipient={ recipient }
                            selectedRec={ selectedRecCc }
                            picked={ pickedCc }
                            onSelect={ onSelectCc }
                            removeRec= { removeRecCc }
                        />
                </View>     
                <View style={{ flexDirection: 'row' }}>
                        <RecSelector 
                            rec='Bcc:'
                            recipient={ recipient }
                            selectedRec={ selectedRecBcc }
                            picked={ pickedBcc }
                            onSelect={ onSelectBcc }
                            removeRec= { removeRecBcc }
                        />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>Event Affiliation:</Text> 
                    <Dropdown 
                        placeholder='Admin'
                    />   
                </View> 
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'black', top: 15, width: 80 }}>Subject:</Text>
                        <TextInput 
                            style={{ width: 280, height: 40, borderBottomColor: 'gray', borderBottomWidth: 0.5 }}
                            placeholder= ''
                            onBlur={ Keyboard.dismiss }
                        />
                </View>
                <View style={{ flexDirection: 'row', height: 40, marginTop: 12, marginBottom: 12 }}>
                    <Text>Attachments:</Text>
                    <TouchableOpacity>
                        <Text style={{ marginLeft: 20 }}>Add File</Text>
                    </TouchableOpacity>
                </View> 
                <View>
                    <TextInput 
                        style={ styles.inputField }
                        placeholder='Your message'
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
                    <TouchableOpacity style={ styles.buttonStyle }>
                        <Text style={{ color: 'white', padding: 12 }}>Save</Text>
                    </TouchableOpacity>    
                    <TouchableOpacity style={ styles.buttonStyle }>
                        <Text style={{ color: 'white', padding: 12 }}>Send</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={ styles.buttonStyle }>
                        <Text style={ styles.popUp }>PopUp</Text>
                    </TouchableOpacity>        
                    {/* change the style based on clicked or not */}
                </View>     
        </View>
        </ScrollView> 
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        margin: 10,
        flex: 1,
        flexDirection: 'column'
    },
    container: {
      margin: 20

    },
    inputField: {
        width: 365,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 5,
        borderBottomColor: 'grey'
    },
    buttonStyle: {
        borderColor: 'black',
        borderWidth: 0.5, 
        borderRadius: 10,
        height: 55,
        width: 60,
        backgroundColor: 'darkblue',
        color: 'white'
    },
    popUp: {
        color: 'white',
        paddingTop: 15,
        paddingLeft: 6
    }
    
  });