import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import GameParms from '../Navigators/PreNav/GameParms';

const GameParmsSelc = ({ data, fieldName, lang }) => {
    const [value, setValue] = useState(null);

    return (
        <View style={{ flexDirection: 'row' }}>
                    <Text style={{ top: 30, width: 80 }}>{ fieldName }</Text>
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={ data }
                            search={ false }
                            // maxHeight={400}
                            labelField="label"
                            valueField="value"
                            placeholder="Select Mode"
                            searchPlaceholder="Search..."
                            value={value}
                            onChange={ item => {
                                setValue(item.value);
                                lang(item.label);
                            }}
                            renderLeftIcon={() => (
                                <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                              )}
                        />
                </View>
    )
}

const styles = StyleSheet.create({
    dropdown: {
        margin: 16,
        height: 50,
        width: 280,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
      },
      icon: {
        marginRight: 5,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      }
});

export default GameParmsSelc;