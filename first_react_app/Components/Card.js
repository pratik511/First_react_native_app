/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Image, Button } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.50; //50%
const heigh1 = width * 0.18; //15%

const Data = [
    { id: "1", address:"Surat Gujarat", title: "Domino's Pizza 50% Off", img: "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/10/domino-s-pizza-1571307449.jpg" },
    { id: "2", address:"Surat Gujarat", title: "Get 35% off on any burger", img: "https://www.wigrr.com/wp-content/uploads/2017/03/BK.jpg" },
    { id: "3", address:"Surat Gujarat", title: "Get 10% off on any pizza", img: "https://media-cdn.tripadvisor.com/media/photo-s/0e/20/dc/34/pizza-hut.jpg" },
    { id: "4", address:"Surat Gujarat", title: "la pino'z pizza Offer:buy 1 get 1 free", img: "https://content.jdmagicbox.com/comp/ahmedabad/c9/079pxx79.xx79.210621170215.d4c9/catalogue/la-pinoz-pizza-jodhpur-char-rasta-ahmedabad-pizza-outlets-0ep20vaomx.jpg" },
    { id: "5", address:"Surat Gujarat", title: "Woklee pizza", img: "https://pbs.twimg.com/media/FFuuI16VIAgkrdd.png" },
    { id: "6", address:"Surat Gujarat", title: "Starbucks coffee", img: "https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/Cxx-d099aSENnzklzNZ8pTP5lUk=/1660x934/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/CC2WCCSINFCEDEYUN6Z2BGVA6M.jpg" },
    { id: "7", address:"Surat Gujarat", title: "Mcdonalds", img: "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-06/shutterstock_1413709856.jpg" },
    { id: "8", address:"Surat Gujarat", title: "Dairy don", img: "https://content3.jdmagicbox.com/comp/mumbai/26/022papp20081119iron1503326/catalogue/dairy-don-mumbai-1y0phpysk1.jpg" },
];
// console.warn(Data);

const Card = () => {

    const renderItem = ({ item }) => {
        return (
            <View style={{ backgroundColor:"#FBFCF8" , borderRadius: 3, marginTop:10, marginLeft:17,marginRight:17 ,borderWidth:0.5 }}>
                <View style={{width, height,}}>
                <Image style={{width: width - 35, height,borderTopLeftRadius: 3, borderTopRightRadius: 3 ,marginEnd:200 }} source={{ uri: item.img }} />
                </View>

                <View style={{ height: heigh1 }}>
                    <Text style={{fontSize:15,fontWeight:"300" ,marginLeft:7 ,marginTop:10 ,}}>{item.title}</Text>
                    <Text style={{fontSize:12 ,fontWeight:"100" ,marginLeft:7}}>{item.address}</Text>
                </View>
            </View>
        )
    }


    return (
        <View style={{ backgroundColor: "#fff", marginBottom: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'greeen', paddingLeft: 5,margin:8 }}>Hot Deals</Text>
            <View>
                <FlatList data={Data} renderItem={renderItem} />
            </View>
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({});
