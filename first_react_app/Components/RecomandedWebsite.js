/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View ,FlatList ,Image ,Dimensions ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
const height = width * 0.50; //50%
const heigh1 = width * 0.18; //15%


const Data = [
    { id: '1', deal: '3', address: 'Surat Gujarat', title: "Domino's Pizza 50% Off", img: 'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/10/domino-s-pizza-1571307449.jpg' },
    { id: '2', deal: '2', address: 'Surat Gujarat', title: 'Get 35% off on any burger', img: 'https://www.wigrr.com/wp-content/uploads/2017/03/BK.jpg' },
    { id: '3', deal: '1', address: 'Surat Gujarat', title: 'Get 10% off on any pizza', img: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/20/dc/34/pizza-hut.jpg' },
    { id: '4', deal: '4', address: 'Surat Gujarat', title: "la pino'z pizza Offer:buy 1 get 1 free", img: 'https://content.jdmagicbox.com/comp/ahmedabad/c9/079pxx79.xx79.210621170215.d4c9/catalogue/la-pinoz-pizza-jodhpur-char-rasta-ahmedabad-pizza-outlets-0ep20vaomx.jpg' },
    { id: '5', deal: '7', address: 'Surat Gujarat', title: 'Woklee pizza', img: 'https://pbs.twimg.com/media/FFuuI16VIAgkrdd.png' },
    { id: '6', deal: '4', address: 'Surat Gujarat', title: 'Starbucks coffee', img: 'https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/Cxx-d099aSENnzklzNZ8pTP5lUk=/1660x934/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/CC2WCCSINFCEDEYUN6Z2BGVA6M.jpg' },
    { id: '7', deal: '5', address: 'Surat Gujarat', title: 'Mcdonalds', img: 'https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-06/shutterstock_1413709856.jpg' },
    { id: '8', deal: '9', address: 'Surat Gujarat', title: 'Dairy don', img: 'https://content3.jdmagicbox.com/comp/mumbai/26/022papp20081119iron1503326/catalogue/dairy-don-mumbai-1y0phpysk1.jpg' },
]

const RecomandedWebsite = () => {
    const renderItem = ({ item }) => {
        return (
            <View style={{ backgroundColor:"#FBFCF8",width:width-80 ,height:height*1.21 , borderRadius: 3, marginTop:10, marginRight:7,marginLeft:10 ,borderWidth:0.5 }}>
                <View >
                <Image style={{width:width-81, height:height-30,borderTopLeftRadius: 3, borderTopRightRadius: 3 ,marginEnd:200 }} source={{ uri: item.img }} />
                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ height: heigh1 }}>
                        <Text style={{ fontSize: 15, fontWeight: 'normal', color: 'black', marginLeft: 7, marginTop: 5 }}>{item.title}</Text>
                        <Text style={{ fontSize: 12, fontWeight: 'normal', color: 'black', marginLeft: 7 }}>{item.address}</Text>
                        <Text style={{ fontSize: 9, fontWeight: 'normal', color: 'black', marginLeft: 7 ,marginTop:2 }}><Icon name='pin-outline' size={14} />0.76 ml</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{ marginTop: 5, marginLeft: 42, }}>
                            <Icon name='heart-outline' size={22} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: 5, marginRight: 10, borderRadius: 5, backgroundColor: '#3bbf82', borderWidth: 0, width: width / 5.5, height: 30 }}>
                            <Text style={{ textAlign: 'center', marginTop: 3.5, color: "white" }}>{item.deal} deals</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

  return (
    <View style={{ backgroundColor: "#fff",paddingBottom:10 , marginBottom: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', paddingLeft: 5,margin:8 }}>Coupons Ending Soon</Text>
            <View style={{marginLeft:10}}>
                <FlatList data={Data} horizontal showsHorizontalScrollIndicator={false} renderItem={renderItem} />
            </View>
        </View>
  );
};

export default RecomandedWebsite;

const styles = StyleSheet.create({});
