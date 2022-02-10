/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const { width } = Dimensions.get('window');
const height = width * 0.5;
const height1 = width * 0.68;

const ShareExperience = () => {
    const [count ,setCount] = useState('');
    return (
        <View>
            <Text>ShareExperience</Text>
            <Image style={{ width, height }} source={{ uri: 'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/10/domino-s-pizza-1571307449.jpg' }} />
            <View style={{ backgroundColor: "#fff", marginTop: 10, paddingLeft: 20, width, height: height / 1.25 }}>
                <Text style={{ fontSize: 15, color: "black", fontWeight: '700', marginTop: 4, marginBottom: 5 }}>Add a Video</Text>
                <Text style={{ fontSize: 11, color: "black" }}>Your review will be posted publicly.</Text>
                <Text style={{ fontSize: 11, color: "black", marginTop: 12, marginBottom: 12 }}>Make a review video to share your experience.</Text>
                <TouchableOpacity style={{ backgroundColor: '#3bbf82',flex:1,flexDirection:'row', borderRadius: 3, width: width / 2.5,marginBottom:22, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name='caret-forward-outline' size={22} color={'#fff'} />
                    <Text style={{ color: "#fff", fontSize: 12, fontWeight: '700' }}> Uplod Video Review</Text>
                </TouchableOpacity>
            </View>
            <View style={{ width, height:height1, marginTop: 10,paddingLeft:20,paddingRight:20, backgroundColor: '#fff' }}>
                <Text style={{marginTop:10,marginBottom:10,color:'black', fontWeight:"600"}}>Write Your Experience</Text>
                <TextInput multiline={true} numberOfLines={7} style={{borderColor:"black" ,borderWidth:0.5,borderRadius:3,paddingLeft:15,paddingRight:15,textAlignVertical:'top'}} maxLength={200} value={count} onChangeText={(value) => setCount(value)}/>
                <Text style={{flex:1,alignSelf:'flex-end',fontSize:12,color:'black'}}>{count.length}/200</Text>
                <TouchableOpacity style={{backgroundColor:"#3bbf82",marginBottom:10,height:height/4.5,borderRadius:4,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#fff' ,fontSize:15 ,fontWeight:'500'}}>Add Experience</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ShareExperience

const styles = StyleSheet.create({})