import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import AnalyticsComp from '../../Components/AnalyticsComp';
import AnalyticsSelector from '../../Components/AnalyticsSelector';

const AnalyticsScreen = () => {
    const [actions, setActrions] = useState([
        { value: 'incoming', label: 'Incoming Items'},
        {label: 'Sent Items', value: 'sent', message: '', sumOf: 0},
        {label: 'Chat Messages', value: 'Chat', message: '', sumOf: 0},
        {label: 'Challenges', value: 'challenges', message: '', sumOf: 0},
        {label: 'Pontential Solutins', value: 'solutions', message: '', sumOf: 0},
        {label: 'Decisions', value: 'decisions', message: '', sumOf: 0}
    ]);
    const [player, setPlayer] = useState([
        {label: 'Michael - Game Controller', value: 'GController'}
    ]);
    const [events, setEvents] = useState([
        {label: 'Admin', value: 'admin'}
    ]);
    const mode = [
        { label: 'Expected Interaction Map', value: 'interaction' },
        { label: 'Expected Intensity Map', value: 'intensity' },
        { label: 'Expected Heat Map', value: 'heat' }
    ];
    const [time, setTime] = useState([
        { label: 'All', value: 'all'},
        { label: '2 Minutes', value: '2'},
        { label: '5 Minutes', value: '5'},
        { label: '10 Minutes', value: '10'},
        { label: '15 Minutes', value: '15'},
        { label: '30 Minutes', value: '30'},
        { label: '60 Minutes', value: '60'},
        { label: '120 Minutes', value: '120'}
    ]);

    return (
        <View style={ styles.mainContainer }>
            <Text>Analytics Screen</Text>
                <AnalyticsComp 
                    data={ actions }
                    fieldName='By Action:'
                />
                <AnalyticsComp 
                    data={ player }
                    fieldName='By Players:'
                />
                <AnalyticsComp 
                    data={ events }
                    fieldName='By Event:'
                />
                <AnalyticsSelector 
                    data={ mode }
                    fieldName='Mode:'
                />
                <AnalyticsSelector 
                    data={ time }
                    fieldName='By Time Step:'
                />
                <TouchableOpacity style={styles.button}>
                    <Text>Export</Text>
                </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        margin: 10
    },
    button: {
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'black',
        height: 30,
        width: 80,
        alignItems: 'center'
    }
});

export default AnalyticsScreen;