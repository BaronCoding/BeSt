import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AnalyticsComp = ({ data, fieldName }) => {
    const [selected, setSelected] = useState([]);

      const renderItem = (item) => {
        return (
          <View style={styles.item}>
            <Text style={styles.selectedTextStyle}>{item.label}</Text>
            <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
          </View>
        );
      };

    return (
        <View >
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ top: 30, width: 80 }}>{ fieldName }</Text>
                <View style={styles.container}>
                    <MultiSelect
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={ data }
                    labelField="label"
                    valueField="value"
                    placeholder="Select item"
                    value={selected}
                    search
                    searchPlaceholder="Search..."
                    onChange={item => {
                        setSelected(item);
                    }}
                    renderLeftIcon={() => (
                        <AntDesign
                        style={styles.icon}
                        color="black"
                        name="Safety"
                        size={20}
                        />
                    )}
                    renderItem={renderItem}
                    renderSelectedItem={(item, unSelect) => (
                        <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                        <View style={styles.selectedStyle}>
                            <Text style={styles.textSelectedStyle}>{item.label}</Text>
                            <AntDesign color="black" name="delete" size={17} />
                        </View>
                        </TouchableOpacity>
                    )}
                    />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: { 
        margin: 10
    },
    dropdown: {
      height: 50,
      width: 280,
      marginRight: 10,
      backgroundColor: 'white',
      borderRadius: 12,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
    },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 14,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    icon: {
      marginRight: 5,
    },
    item: {
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    selectedStyle: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderRadius: 14,
      backgroundColor: 'white',
      shadowColor: '#000',
      marginTop: 8,
      marginRight: 10,
      paddingHorizontal: 12,
      paddingVertical: 8,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    textSelectedStyle: {
      marginRight: 5,
      fontSize: 16,
    },
    // mainContainer: {
    //     margin: 10,
    //     alignItems: 'flex-start',
    //     backgroundColor: 'lightgrey'

    // },
    // dropdown: {
    //     margin: 10,
    //     height: 50,
    //     width: 280,
    //     borderBottomColor: 'gray',
    //     borderBottomWidth: 0.5
    //   },
    //   icon: {
    //     marginRight: 5,
    //   },
    //   placeholderStyle: {
    //     fontSize: 16,
    //   },
    //   selectedTextStyle: {
    //     fontSize: 16,
    //   },
    //   iconStyle: {
    //     width: 20,
    //     height: 20,
    //   },
    //   inputSearchStyle: {
    //     height: 40,
    //     fontSize: 16,
    //   },
    //   selectedStyle: {
    //     borderRadius: 12,
    //   }
});

export default AnalyticsComp;