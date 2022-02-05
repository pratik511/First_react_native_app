/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');
const height = width / 10;
import Icon from 'react-native-vector-icons/MaterialIcons';


const Search = () => {
    return (
        <View style={styles.ser}>
            <Icon name='search' size={25} style={styles.icon} />
            <TextInput style={styles.search} placeholder='Search place near you' placeholderTextColor="skyblue"/>
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    search: {
        flex:1,
        borderWidth: 0.5,
        borderRadius: 3,
        paddingLeft: 30,
        color:"skyblue",
        marginTop: width / 30,
        marginBottom: width / 30,
        marginLeft: 0,
        marginRight: width / 40,
        backgroundColor: "#fff",
        height,
        borderColor:"black"
    },
    ser: {
        flex:1,
        backgroundColor: "#fff",
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        paddingLeft:10,
    },
});
