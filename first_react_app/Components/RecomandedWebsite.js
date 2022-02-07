/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View ,FlatList ,Image ,Dimensions} from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.50; //50%

const Data = [
    { id: 1, img:"https://images.pexels.com/photos/545313/pexels-photo-545313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { id: 2, img:"https://images.pexels.com/photos/545313/pexels-photo-545313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { id: 3, img:"https://images.pexels.com/photos/545313/pexels-photo-545313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { id: 4, img:"https://images.pexels.com/photos/545313/pexels-photo-545313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { id: 5, img:"https://images.pexels.com/photos/545313/pexels-photo-545313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { id: 6, img:"https://images.pexels.com/photos/545313/pexels-photo-545313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
]

const RecomandedWebsite = () => {
    const renderItem = ({ item }) => {
        return (
            <View style={{ backgroundColor:"#FBFCF8",width:width-80 , borderRadius: 3, marginTop:10, marginRight:7,marginLeft:10 ,borderWidth:0.5 }}>
                <View>
                <Image style={{width:width-81, height,borderTopLeftRadius: 3, borderTopRightRadius: 3 ,marginEnd:200 }} source={{ uri: item.img }} />
                </View>

                <View>
                    {/* <Text style={{fontSize:15,fontWeight:"300" ,marginLeft:7 ,marginTop:10 ,}}>{item.id}</Text> */}
                    {/* <Text style={{fontSize:12 ,fontWeight:"100" ,marginLeft:7}}>{item.address}</Text> */}
                </View>
            </View>
        )
    }

  return (
    <View style={{ backgroundColor: "#fff",paddingBottom:10 , marginBottom: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'greeen', paddingLeft: 5,margin:8 }}>Hot Deals</Text>
            <View style={{marginLeft:10}}>
                <FlatList data={Data} horizontal showsHorizontalScrollIndicator={false} renderItem={renderItem} />
            </View>
        </View>
  );
};

export default RecomandedWebsite;

const styles = StyleSheet.create({});
