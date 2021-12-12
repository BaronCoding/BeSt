import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { useDrawerStatus } from '@react-navigation/drawer';

import injectScreen from '../Navigators/PreNav/injectScreen';
import Flow from '../Navigators/PreNav/Flow';
import AnalyticsScreen from '../Navigators/PreNav/AnalyticsScreen';
import GameParms from '../Navigators/PreNav/GameParms';

const Drawer = createDrawerNavigator();


const MyDrawer = () => {
    const isDrawerOpen = useDrawerStatus() === 'open';

    return (
        <Drawer.Navigator screenOptions={{ overlayColor: 'transparent' }}>
            <Drawer.Screen name='Injects' component={ injectScreen } />
            <Drawer.Screen name='Analytics' component={ AnalyticsScreen } />
            <Drawer.Screen name='Game Parameters' component={ GameParms } />
            <Drawer.Screen name='Flow' component={ Flow } />
            {/* <Drawer.Screen name='Homepage' component= { MainPage } /> */}
            {/* screenOptions={{ drawerType: 'permanent', drawerStyle: {width: '50%'} }} /// overlayColor       drawer styling */}

        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({})

export default MyDrawer;