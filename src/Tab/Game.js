import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from '../Navigators/GameNav/Dashboard';
import Inbox from '../Navigators/GameNav/Inbox';
import SentItems from '../Navigators/GameNav/SentItems';
import injectScreen from '../Navigators/PreNav/injectScreen';
import Actions from '../Navigators/GameNav/Actions';
import Docs from '../Navigators/GameNav/Docs';
import Analytics from '../Navigators/GameNav/Analytics';

const Drawer = createDrawerNavigator();

const Game = () => {
    return (
        <Drawer.Navigator 
            screenOptions={{ 
                // drawerStyle: { backgroundColor: 'lightgrey' },
                drawerType: 'slide',
                headerShown: false,
                // overlayColor: 'transparent' 
            }}
        >
            <Drawer.Screen name='Dashboard' component={ Dashboard } />
            <Drawer.Screen name='Inbox' component={ Inbox } />
            <Drawer.Screen name='Sent Items' component={ SentItems } />
            <Drawer.Screen name='Injects' component={ injectScreen } />
            <Drawer.Screen name='Actions' component={ Actions } />
            <Drawer.Screen name='Docs' component={ Docs } />
            <Drawer.Screen name='Analytics' component={ Analytics } />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({});

export default Game;