import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './src/Screens/Login';

import PreGame from './src/Tab/PreGame';
import Game from './src/Tab/Game';
import PostGame from './src/Tab/PostGame';
import newMessage from './src/Screens/NewMessage';
import PlayersEdit from './src/Components/PlayersEdit';

import logo from './src/img/best_logo250.png'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const isLogged = true;

const StackNav = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Players'>
            <Stack.Screen name='Players' component={ PlayersEdit } />
        </Stack.Navigator>
      </NavigationContainer>    
  );
};

const RootNavigation = () => {
  return ( 
    <NavigationContainer>
      {isLogged 
        ? (
        <Tab.Navigator 
              screenOptions={{ 
                tabBarIconStyle: { display: "none" },  
                tabBarStyle: { backgroundColor: '#00618b' },
                // tabBarLabel: { color: 'white' }
                // tabBarItemStyle: {  },
                tabBarLabelStyle: { fontSize: 20, color: 'white', margin: 10 },
                headerShown: true,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold'
                },
                headerStyle: {
                  backgroundColor: '#00618b'
                }
                // headerBackground: (<Image source={ logo } />)
              }}
        >
           <Tab.Screen name='Pre' component={ PreGame } options={ StackNav } />
           <Tab.Screen name='Game' component={ Game } />
           <Tab.Screen name='Post' component={ PostGame } />
           <Tab.Screen name='+' component={ newMessage } options={{ title: 'New Message' }} />
        </Tab.Navigator>
        )
        : ( <Login />)
      }
    </NavigationContainer>
  )

};

export default function App() {
  return (
      <RootNavigation StackNav={ StackNav } />

  )
};