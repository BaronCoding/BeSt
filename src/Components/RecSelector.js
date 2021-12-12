import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const RecSelector = ({ recipient, selectedRec, picked, onSelect, removeRec, rec }) => {

    return (
        <View>
        <View style={{ flexDirection: 'row' }}>
            <Text style={{ top: 30, width: 50, color: 'black' }}>{ rec }</Text>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={ recipient }
                    search={ true }
                    maxHeight={400}
                    labelField="label"
                    valueField="value"
                    placeholder="Select Recipient"
                    searchPlaceholder="Search..."
                    // value={value}
                    onChange={ item => {
                        // setSelectedRec(item.value)
                        onSelect(item)
                    }}
                    // onBlur={ () => placeholder=''}
                    // renderLeftIcon={() => (
                    //     <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                    // )}
                />
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        { picked !== '' 
            ? selectedRec.map((value, index) => {
                return (
                    <TouchableOpacity key={ index } onPress={ () => removeRec(index) } style={ styles.touchableStyle }>
                        <Text>{ value.label } </Text>
                    </TouchableOpacity>
                )
            }) 
            : null
        }
    </View>
    </View>
    )
};

const styles = StyleSheet.create({
    dropdown: {
        margin: 10,
        height: 50,
        width: 300,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5
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
      },
      touchableStyle: {
        borderColor: 'grey',
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 5,
        margin: 5,
        backgroundColor: 'white'
      }
});

export default RecSelector;