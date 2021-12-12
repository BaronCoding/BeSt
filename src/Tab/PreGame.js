import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import injectScreen from '../Navigators/PreNav/injectScreen';
import AnalyticsScreen from '../Navigators/PreNav/AnalyticsScreen';
import GameParms from '../Navigators/PreNav/GameParms';
import Flow from '../Navigators/PreNav/Flow';

const Drawer = createDrawerNavigator();

const PreGame = () => {
    return (
        <Drawer.Navigator 
            screenOptions={{ 
                drawerType: 'slide',
                headerShown: false,
            }}
        >
            <Drawer.Screen name='Injects' component={ injectScreen } />
            <Drawer.Screen name='Analytics' component={ AnalyticsScreen } />
            <Drawer.Screen name='Game Parameters' component={ GameParms } />
            <Drawer.Screen name='Flow' component={ Flow } />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({});

export default PreGame;