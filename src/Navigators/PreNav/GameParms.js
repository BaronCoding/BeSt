import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Button, SafeAreaView } from 'react-native';
import { Checkbox } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import GameParmsSelc from '../../Components/GameParmsSelc';
import PlayersEdit from '../../Components/PlayersEdit';
import AddPlayer from '../../Components/AddPlayer';
import PlayerList from '../../Components/PlayerList';

const GameParms = () => {
    //checkboxes states
    const [isCheckedList, setCheckedList] = useState(true);
    const [isCheckedDemo, setCheckedDemo] = useState(true);
    const [isCheckedTrial, setCheckedTrial] = useState(true);
    const [isCheckedWaiting, setCheckedWaiting] = useState(true);

    // editing and adding states
    const [edit, setEdit] = useState(false);
    const [addPlayer, setAddPlayer] = useState(false);

    const [fieldName, setFieldName] = useState([
        { label: 'Game Name:', value: 'name', box: true, newValue: '' },
        { label: 'Schedule Start Time:', value: 'start', box: true },
        { label: 'Main Game TZ:', value: 'tz', box: true },
        { label: 'Game Language:', value: 'language', box: true },
        { label: 'Show in Game List:', value: 'list', box: true },
        { label: 'Demo Game:', value: 'demo', box: true },
        { label: 'Trial Game:', value: 'trial', box: true },
        { label: 'Add Waiting List:', value: 'waiting', box: true },
    ]);
    const [language, setLanguage] = useState([
        { label: 'English', value: 'english' },
        { label: 'Italian', value: 'italian' },
        { label: 'French', value: 'french' },
        { label: 'Hebrew', value: 'hebrew' },
        { label: 'Spanish', value: 'spanish' },
        { label: 'German', value: 'german' }
        
    ]);
    const DATA = [
        { title: 'Active', id: 1 },
        { title: 'Email', id: 2 },
        { title: 'Name', id: 3 },
        { title: 'Game Name', id: 4 },
        { title: 'Player Type', id: 5 },
        { title: 'Represented', id: 6 },
        { title: 'Show in chat', id: 7 },
    ];
    const [player, setPlayer] = useState([
        {   active: true,
            email: 'Mike@be-strategic.solutions', 
            name: 'Mike', 
            gameName: 'Michael', 
            playerType: 'Game Controller', 
            represented: false, 
            inChat: true,
            id: 1
        }
    ]);
    const [gameName, setGameName] = useState('Michael - Game Shell');
    const [gameLang, setGameLang] = useState('English');
    
    //date and time changes
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showTimepicker = () => {
        showMode('time');
      };

    const changeGameName = edit !== false 
                                ? <TextInput 
                                        placeholder={ gameName } 
                                        editable={ true }
                                        value={ gameName } 
                                        style={{ 
                                            width: 200, 
                                            borderBottomWidth: 0.5, 
                                            borderBottomColor: 'black', 
                                            padding: 5 
                                        }} 
                                        onChangeText={ setGameName }
                                    />
                            : <Text style={ styles.gameFontStyle }>{ gameName }</Text>;

    const updateLang = (lan) => {
        setGameLang(lan);
    };

    return (
        <SafeAreaView>
            <ScrollView style={ styles.main }>
            {/* Screen header */}
            <View style={ styles.headerStyle }>
                <Text style={ styles.headerFontStyle }>Game Information</Text>
                <TouchableOpacity>
                    <Text style={ styles.headerFontStyle } onPress={ () => setEdit(!edit) }>{ edit === true ? 'Done' : 'Edit' }</Text>
                </TouchableOpacity>
            </View>

            {/* Screen components */}
            <View>
                {/* Game name comp */}
                <View style={{ flexDirection: 'row', marginTop: 10, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                    <Text style={ styles.gameFontStyle }>Game Name:</Text>
                        { changeGameName }
                </View>

                {/* Game time comp */}
                <View style={{ flexDirection: 'row', marginTop: 10, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                    <Text style={ styles.gameFontStyle }>Schedule Start Time:</Text>
                    <View>
                        <Text style={{ marginTop: 9 }}>{ date.toString().slice(0, 24) }</Text>
                    </View>
                        {edit === true 
                            ? (
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ marginTop: 5, marginRight: 5 }}>
                                        <Button onPress={showDatepicker} title="Edit Date" />
                                    </View>
                                    <View style={{ marginTop: 5, marginRight: 5 }}>
                                        <Button onPress={showTimepicker} title="Edit Time" />
                                    </View>
                                </View>
                            )
                            : null
                        }
                        
                        <View>
                            {show && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={mode}
                                    is24Hour={true}
                                    display="default"
                                    onChange={onChange}
                                />
                        )}
                        </View>                
                </View>
                {/* Timezone comp ===>>> add the time zone change in prev comp */}
                <View style={{ flexDirection: 'row', marginTop: 10, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                    <Text style={ styles.gameFontStyle }>Main Game TZ:</Text>
                        <View>
                            <Text style={{ marginTop: 9 }}>{ date.toTimeString().slice(9, 23) }</Text>
                        </View>
                </View>

                {/* Language comp */}
                
                    {/* <Text style={ styles.gameFontStyle }>Game Language:</Text> */}
                    {edit === true 
                                    ? (
                                        <View style={{ flexDirection: 'row', marginTop: 10, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                                            <GameParmsSelc
                                                data={ language }
                                                fieldName='Game Language:'
                                                lang={ updateLang }
                                           />
                                        </View>
                                        )
                                    : ( 
                                        <View style={{ flexDirection: 'row', marginTop: 10, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                                            <Text style={ styles.gameFontStyle }>Game Language:</Text>
                                            <Text style={{ marginTop: 9 }}>{ gameLang }</Text>
                                        </View>
                                    )
                    }
                    
                
                
                {/* In game list comp */}
                <View style={{ flexDirection: 'row', marginTop: 10, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                    <Text style={ styles.gameFontStyle }>Show in Game List:</Text>
                    {edit === true 
                                    ?   (
                                            <Checkbox
                                                status={isCheckedList ? 'checked' : 'unchecked'}
                                                disabled={false}
                                                onPress={() => {
                                                    setCheckedList(!isCheckedList);
                                                }}
                                            />
                                        )
                                    :   (
                                            <Checkbox
                                                status={isCheckedList ? 'checked' : 'unchecked'}
                                                disabled={true}
                                                onPress={() => {
                                                    setCheckedList(!isCheckedList);
                                                }}
                                        /> 
                                        )
                    }
                    
                </View>
                
                {/* Demo comp */}
                <View style={{ flexDirection: 'row', marginTop: 10, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                    <Text style={ styles.gameFontStyle }>Demo Game:</Text>
                    {edit === true 
                                    ?   (
                                            <Checkbox
                                                status={isCheckedDemo ? 'checked' : 'unchecked'}
                                                disabled={false}
                                                onPress={() => {
                                                    setCheckedDemo(!isCheckedDemo);
                                                }}
                                            />
                                        )
                                    :   (
                                            <Checkbox
                                                status={isCheckedDemo ? 'checked' : 'unchecked'}
                                                disabled={true}
                                                onPress={() => {
                                                    setCheckedDemo(!isCheckedDemo);
                                                }}
                                        /> 
                                        )
                    }
                </View>
                
                {/* Trial comp */}
                <View style={{ flexDirection: 'row', marginTop: 10, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                    <Text style={ styles.gameFontStyle }>Trial Game:</Text>
                    {edit === true 
                                    ?   (
                                            <Checkbox
                                                status={isCheckedTrial ? 'checked' : 'unchecked'}
                                                disabled={false}
                                                onPress={() => {
                                                    setCheckedTrial(!isCheckedTrial);
                                                }}
                                            />
                                        )
                                    :   (
                                            <Checkbox
                                                status={!isCheckedTrial ? 'checked' : 'unchecked'}
                                                disabled={true}
                                                onPress={() => {
                                                    setCheckedTrial(!isCheckedTrial);
                                                }}
                                        /> 
                                        )
                    }
                </View>

                {/* Waiting List comp */}
                <View style={{ flexDirection: 'row', marginTop: 10, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                    <Text style={ styles.gameFontStyle }>Add Waiting List:</Text>
                    {edit === true 
                                    ?   (
                                            <Checkbox
                                                status={isCheckedWaiting ? 'checked' : 'unchecked'}
                                                disabled={false}
                                                onPress={() => {
                                                    setCheckedWaiting(!isCheckedWaiting);
                                                }}
                                            />
                                        )
                                    :   (
                                            <Checkbox
                                                status={!isCheckedWaiting ? 'checked' : 'unchecked'}
                                                disabled={true}
                                                onPress={() => {
                                                    setCheckedWaiting(!isCheckedWaiting);
                                                }}
                                        /> 
                                        )
                    }
                </View>

                {/* Game goal comp */}
                <View style={{ marginTop: 10, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                    <Text style={ styles.gameFontStyle }>Game Goal:</Text>
                    {edit === true 
                                    ?   (
                                            <TextInput 
                                                style={{ backgroundColor: '#ececec', height: 250, textAlignVertical: "top", padding: 10 }}
                                                editable={ true }
                                            />
                                    )
                                    :   (
                                            <TextInput 
                                                style={{ backgroundColor: '#ececec', height: 250, textAlignVertical: "top", padding: 10 }}
                                                editable={ false }
                                            />
                                    )
                    }
                </View>

                {/* Game goal comp */}
                <View style={{ marginTop: 10, borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                    <Text style={ styles.gameFontStyle }>Game Objectives:</Text>
                    {edit === true 
                                    ?   (
                                            <TextInput 
                                                style={{ backgroundColor: '#ececec', height: 250, textAlignVertical: "top", padding: 10 }}
                                                editable={ true }
                                            />
                                    )
                                    :   (
                                            <TextInput 
                                                style={{ backgroundColor: '#ececec', height: 250, textAlignVertical: "top", padding: 10 }}
                                                editable={ false }
                                            />
                                    )
                    }
                </View>
                <View style={ styles.headerStyle }>
                    <TouchableOpacity>
                        {/* Add the stack navigator for the screen or add a different conponent */}
                        <Text style={ styles.headerFontStyle } onPress={ () => setAddPlayer(!addPlayer) }>Add Player +</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={ styles.headerFontStyle } onPress={ () => setEdit(!edit) }>{ edit === true ? 'Done' : 'Edit Game' }</Text>
                    </TouchableOpacity>
            </View>
            </View>
                <PlayersEdit DATA={ DATA } player={ player }/>
                { addPlayer === true 
                    ? (
                        <AddPlayer DATA={ DATA } player={ player }/>    
                    )
                    : null
                }
                <PlayerList player={ player } />
                
            </ScrollView>           
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    main: {
        margin: 10
    },
    headerStyle: {
        padding: 10,
        justifyContent: 'space-between',
        flexDirection: 'row', 
        borderColor: 'black', 
        borderWidth: 0.5,
        backgroundColor: '#00618b'
        
    },
    headerFontStyle: {
        color: 'white',
        fontWeight: 'bold'

    },
    gameFontStyle: {
        width: 180,
        fontWeight: 'bold',
        marginTop: 10

    },
    checkbox: {
        margin: 9
    }
});

export default GameParms;