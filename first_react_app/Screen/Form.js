/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, Dimensions, TextInput, View, Button, ScrollView } from 'react-native';

const { width } = Dimensions.get("window");
const height = width / 0.7;

const Form = () => {
    return (
        // <View style={{width ,height}}>
            // <ScrollView >
                <View style={styles.background}>
                    <TextInput style={[styles.input, styles.height]} placeholder='Name' />
                    <TextInput style={styles.input} keyboardType='email-address' placeholder='Email' />
                    <TextInput style={styles.input} keyboardType='phone-pad' placeholder='Phone Number' />
                    <TextInput style={styles.input} placeholder='Password' />
                    <TextInput style={styles.input} placeholder='Confirm Password' />
                    <View style={styles.button}>
                        <Button style={styles.button1} title='Sign up' />
                    </View>
                </View>
            // </ScrollView>
        // </View>
    );
};

export default Form;

const styles = StyleSheet.create({
    input: {
        borderWidth: 0.5,
        backgroundColor: "#fff",
        marginTop: height / 45,
        borderRadius: 2,
        marginRight: 20,
        marginLeft: 20,
        paddingLeft:10,
    },
    height: {
        marginTop: height / 7,
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
        borderRadius:5,
    },
    button1: {
        fontWeight:'bold',
        borderRadius:5,
    }
});
