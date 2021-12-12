import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Inbox from '../Navigators/GameNav/Inbox'; 
import Actions from '../Navigators/PostGamenav/Actions'
import Analytics from '../Navigators/PostGamenav/Analytics';
import Reports from '../Navigators/PostGamenav/Reports';

const Drawer = createDrawerNavigator();

const PostGame = () => {
    return (
        <Drawer.Navigator 
            screenOptions={{ 
                drawerType: 'slide',
                headerShown: false,
            }}  
        >
            <Drawer.Screen name='Inbox' component={ Inbox } />
            <Drawer.Screen name='Actions' component={ Actions } />
            <Drawer.Screen name='Analytics' component={ Analytics } />
            <Drawer.Screen name='Reports' component={ Reports } />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({});

export default PostGame;