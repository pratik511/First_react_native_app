/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TextInput, Button } from 'react-native';

const { width } = Dimensions.get('window');
const height = width / 0.7;


const Login = () => {
    return (
        // <ScrollView >
        <View style={styles.background}>
            <TextInput style={[styles.input, styles.height]} keyboardType="email-address" placeholder="Username" />
            <TextInput style={styles.input} placeholder="Password" />
            <View style={styles.button}>
                <Button style={styles.button1} title="Login" />
            </View>
        </View>
        // </ScrollView>
    );
};

export default Login;

const styles = StyleSheet.create({
    input: {
        borderWidth: 0.5,
        backgroundColor: '#fff',
        marginTop: height / 45,
        borderRadius: 2,
        marginRight: 20,
        marginLeft: 20,
        paddingLeft: 10,
    },
    height: {
        marginTop: height / 4,
    },
    background: {
        // marginLeft:20,
        marginRight: 40,
        // backgroundColor: "",
        width, height,
    },
    button: {
        marginTop: 20,
        marginRight: width / 16,
        marginLeft: width / 16,
    },
    button1: {
        fontWeight: 'bold',
    },
});
