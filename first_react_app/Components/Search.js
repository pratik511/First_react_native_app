/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');
const height = width / 10;
import Icon from 'react-native-vector-icons/MaterialIcons';


const Search = () => {
    return (
        <View style={styles.new}>
            <View style={styles.ser}>
                <Icon name="search" size={20} color={'black'} style={styles.icon} />
                <TextInput style={styles.search} placeholder="Search place near you" placeholderTextColor="#3bbf82" />
            </View>
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    new:{
        backgroundColor:'#fff',
        marginBottom:10,
    },
    search: {
        flex: 1,
        color: '#3bbf82',
        backgroundColor: '#fff',
        height,
        marginLeft:6,
        borderColor: 'black',
    },
    ser: {
        flex: 1,
        marginTop: width / 30,
        marginBottom: width / 30,
        marginLeft: width / 40,
        marginRight: width / 40,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: 3,
    },
    icon: {
        paddingLeft: 10,
    },
});
