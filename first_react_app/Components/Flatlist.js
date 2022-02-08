/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const Data = [
    { id: 1, name: "Bar & Grill" ,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2pQfoZJGqumKzkqjit7eNRykZSPEqAANiIg&usqp=CAU" },
    { id: 2, name: "Food & Drink",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB51vU2qmqK76sl927Kc1UYccg5lQSVD-DCQ&usqp=CAU" },
    { id: 3, name: "Pratik Patoliya",img:"https://images.pexels.com/photos/545313/pexels-photo-545313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { id: 4, name: "Pratik Patoliya",img:"https://images.pexels.com/photos/545313/pexels-photo-545313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { id: 5, name: "Pratik Patoliya",img:"https://images.pexels.com/photos/545313/pexels-photo-545313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { id: 6, name: "Pratik Patoliya",img:"https://images.pexels.com/photos/545313/pexels-photo-545313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
]
// console.warn(Data);

const Flatlist = () => {

    const renderItem = ({ item }) => {
        return (
                <View style={{ flex: 1 }}>
                    <View style={styles.Grig}>
                          <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: item.img,
                            }}
                        />

                        <Text style={{ fontSize: 11 ,color:'black' ,fontWeight:'normal' ,marginTop:3 }}>{item.name}</Text>
                    </View>
                </View>
        )
    }
    return (
        <View>
            <View style={{backgroundColor:"#FFFFFF",marginBottom:10}}>
            <Text style={{margin:6 ,marginLeft:10 ,color:'black' ,fontWeight:"bold"}}>Explore deal near you</Text>
                <FlatList data={Data} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false} style={{ height: 90 ,marginLeft:8 ,marginRight:8}} />
            </View>
        </View>
    );
};

export default Flatlist;

const styles = StyleSheet.create({
    Grig: {
        borderWidth: 0.5,
        flex: 1,
        alignItems: "center",
        height: 75,
        width: 75,
        margin: 3,
        marginBottom:10,
        paddingTop: 10,
        backgroundColor: "#fff",
        borderRadius: 4,
    },
    tinyLogo: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },

});
