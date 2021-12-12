import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SideMenu from '../Components/SideMenu';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyDrawer from '../Components/MyDrawer';

const MainPage = () => {
    return (
        <View >
            {/* <Text>Main page</Text> */}
                <SideMenu style={styles.sideMeun} />
                {/* <MyDrawer /> */}
            <MyDrawer />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
      sideMeun: {
          alignContent: 'flex-end'
      }
});

export default MainPage;