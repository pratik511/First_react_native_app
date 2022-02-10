/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, FlatList, Image, ScrollView, Button, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
const height = width * 0.50; //50%
const heigh1 = width * 0.18; //15%
const heigh2 = width * 0.47; //15%

const data = [
    { id: 1, name: "restaurant-outline", title: "Menu" },
    { id: 2, name: "information-outline", title: "Website" },
    { id: 3, name: "call-outline", title: "Phone" },
    { id: 4, name: "map-sharp", title: "Map" },
    { id: 5, name: "globe-outline", title: "Social" },
];
const Data = [
    { id: '1', deal: '3', address: 'Surat Gujarat', title: "Domino's Pizza 50% Off", img: 'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/10/domino-s-pizza-1571307449.jpg' },
    { id: '2', deal: '2', address: 'Surat Gujarat', title: 'Get 35% off on any burger', img: 'https://www.wigrr.com/wp-content/uploads/2017/03/BK.jpg' },
    { id: '3', deal: '1', address: 'Surat Gujarat', title: 'Get 10% off on any pizza', img: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/20/dc/34/pizza-hut.jpg' },
    { id: '4', deal: '4', address: 'Surat Gujarat', title: "la pino'z pizza Offer:buy 1 get 1 free", img: 'https://content.jdmagicbox.com/comp/ahmedabad/c9/079pxx79.xx79.210621170215.d4c9/catalogue/la-pinoz-pizza-jodhpur-char-rasta-ahmedabad-pizza-outlets-0ep20vaomx.jpg' },
    { id: '5', deal: '7', address: 'Surat Gujarat', title: 'Woklee pizza', img: 'https://pbs.twimg.com/media/FFuuI16VIAgkrdd.png' },
    { id: '6', deal: '4', address: 'Surat Gujarat', title: 'Starbucks coffee', img: 'https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/Cxx-d099aSENnzklzNZ8pTP5lUk=/1660x934/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/CC2WCCSINFCEDEYUN6Z2BGVA6M.jpg' },
    { id: '7', deal: '5', address: 'Surat Gujarat', title: 'Mcdonalds', img: 'https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-06/shutterstock_1413709856.jpg' },
    { id: '8', deal: '9', address: 'Surat Gujarat', title: 'Dairy don', img: 'https://content3.jdmagicbox.com/comp/mumbai/26/022papp20081119iron1503326/catalogue/dairy-don-mumbai-1y0phpysk1.jpg' },
];

const Offer = [
    { id: 1, title: "Get 50% off on Pizza", item: 200, val: "Buy any medium size pizz from Dominos and get 50% flat off. This offer is valid only for the first time users." },
    { id: 2, title: "Free Garlic Bread", item: 300, val: "Buy two regular size pizzas from dominos and get a free stuffed garlic bread." },
    { id: 3, title: "Get 50% off on Pizza", item: 200, val: "Buy any medium size pizz from Dominos and get 50% flat off. This offer is valid only for the first time users." },
    { id: 4, title: "Free Garlic Bread", item: 300, val: "Buy two regular size pizzas from dominos and get a free stuffed garlic bread." },
];

const Hotdealmenu = () => {

    const [model, setModel] = useState(false);

    const renderItem = ({ item }) => {
        return (
            <View style={{ paddingTop: 6, justifyContent: 'center', alignItems: 'center', height: heigh2 / 3, width: width / 6, marginLeft: 10, marginBottom: 10, backgroundColor: '#63c99a', borderRadius: 5 }}>
                <Text><Icon name={item.name} size={22} color={'#006400'} /></Text>
                <Text style={{ fontSize: 9, fontWeight: '100', color: '#006400' }}>{item.title}</Text>
            </View>
        )
    }

    const card = ({ item }) => {
        return (
            <View style={{ backgroundColor: "#FBFCF8", width: width / 2.5, height: height / 2, marginRight: 5, marginLeft: 5 }}>
                <View >
                    <Image style={{ width: width / 2.52, height: height / 1.9, borderRadius: 3 }} source={{ uri: item.img }} />
                </View>
            </View>
        )
    }
    const offer = ({ item }) => {
        return (
            <View style={{ width, height: height / 1.1, marginBottom: 10, backgroundColor: "#fff" }}>
                <Text style={{ marginLeft: 20, color: 'black', fontSize: 16, marginTop: 10, marginBottom: 10 }}>{item.title}</Text>
                <Text style={{ marginLeft: 15, marginRight: 15, marginTop: 5, marginBottom: 5, fontSize: 13.5, color: 'black' }}>{item.val}</Text>
                <Text style={{ marginLeft: 25, marginBottom: 7, color: '#63c99a', fontWeight: 'bold' }}>Used {item.item} times</Text>
                <View style={{ width: width / 1.07, marginLeft: 12, marginRight: 12, marginTop: 10 }}>
                    <Button title='Redeem Offer' color={'#3bbf82'} onPress={() => setModel(true)} />
                </View>
            </View>
        )
    }

    return (
        <View>
            <ScrollView>
                <View style={styles.centerdView}>
                    <Modal transparent={true}
                        visible={model}
                        onRequestClose={() => {
                            alert("Modal has been closed.")
                            setModel(!model);
                        }}>
                        <View style={styles.centerdView}>

                            <View style={styles.modelView}>
                                <View style={{ flex: 1, flexDirection: 'row', }}>
                                    <View style={{flex:0.3, flexDirection: 'row',justifyContent:'flex-start'}}>
                                        {/* <Text style={{}}>Hello</Text> */}
                                        <Image style={{height:30,width:30}} source={{uri :'https://www.mystateline.com/wp-content/uploads/sites/17/2015/10/Domino27s_1444922267440_5187236_ver1.0.jpg'}} />
                                    </View>
                                    <View style={{flex:1, flexDirection: 'row',justifyContent:'center'}}>
                                        <Text style={{fontSize:15 ,color:'black' ,fontWeight:'700'}}>Get 50% off on Pizza</Text>
                                    </View>
                                    <View style={{flex:0.3,flexDirection: 'row',justifyContent:'flex-end'}}>
                                        <TouchableOpacity onPress={() => setModel(false)}><Icon name='close-outline' size={30} /></TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{flex:1,justifyContent:'flex-start'}}>
                                    <Text style={{fontSize:11}}>Buy any medium size pizz from Dominos and get 50% flat off. This offer is valid only for the first time users.</Text>
                                </View>
                                <View style={{flex:1,fontSize:10,paddingTop:15,paddingBottom:15,borderTopWidth:0.5,borderBottomWidth:0.5}}>
                                    <Text style={{width:width/1.4 ,fontSize:13}}>Valid Till</Text>
                                    <Text style={{color:"#3bbf82" ,fontSize:13}}>25 July, 2022</Text>
                                </View>
                                <View style={{borderRadius:80,borderWidth:1 ,height:120,width:120,marginTop:15 ,alignItems:'center',justifyContent:'center'}}>
                                    <Text>Hold To Redeem</Text>
                                </View>
                            </View>
                        </View>
                    </Modal>

                </View>
                <View>
                    <View style={{ backgroundColor: "#fff", width, height: heigh2 }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 0, marginLeft: 0, marginRight: 10 }}>
                            <View style={{ height: heigh1 }}>
                                <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#3bbf82', marginLeft: 7, marginTop: 10 }}>Open Now</Text>
                                <Text style={{ fontSize: 15, fontWeight: '800', color: 'black', marginLeft: 7 }}>Dominos Pizza Outlet</Text>
                                <Text style={{ fontSize: 10, fontWeight: 'normal', color: 'black', marginLeft: 7, marginTop: 2 }}><Icon name='pin-outline' size={14} />The great Texas street 44</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={{ marginTop: 10, borderRadius: 2, backgroundColor: '#3bbf82', borderWidth: 0, width: width / 5.5, height: 23 }}>
                                    <Text style={{ textAlign: 'center', marginTop: 3.5, color: "white", fontSize: 12 }}>Add Status</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginTop: 14, marginLeft: 5, }}>
                                    <Text style={{ fontSize: 10, color: 'black' }}><Icon name='map-sharp' color={'black'} size={16} />  0.76 mi</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ borderBottomWidth: 0.5 }}></View>
                        <View>
                            <Text style={{ fontSize: 15, fontWeight: '700', color: 'black', marginLeft: 10, marginTop: 10, marginBottom: 10 }}>Business Info</Text>
                            <FlatList data={data} horizontal renderItem={renderItem} />
                        </View>
                    </View>
                    {/* See All Experiences */}
                    <View style={{ marginTop: 7, backgroundColor: '#fff', height: heigh2 / 1.2, paddingLeft: 10, paddingRight: 10 }}>
                        <View style={{ flex: 1, display: 'flex', flexDirection: 'row', marginBottom: 10, justifyContent: 'space-between', marginTop: 10, paddingLeft: 10 }}>
                            <Text style={{ color: 'black', fontSize: 14, fontWeight: '600' }}>See All Experiences</Text>
                            <Text style={{ marginRight: 10 }}><Icon name='arrow-forward-outline' size={20} color={'black'} /></Text>
                        </View>
                        <FlatList data={Data} horizontal showsHorizontalScrollIndicator={false} renderItem={card} />
                    </View>
                    {/* Add a Image */}
                    <View style={{ width, height: heigh1, backgroundColor: '#fff', marginTop: 7, paddingLeft: 15, borderLeftColor: '#3bbf82', borderLeftWidth: 3 }}>
                        <Text style={{ color: "#3bbf82", marginTop: 5, fontSize: 12 }}>Add a Image</Text>
                        <Text style={{ color: 'black', fontWeight: 'normal', fontSize: 14 }}>Share details of your experience at this place</Text>
                        <Icon name='add-outline' color={'#3bbf82'} size={24} />
                    </View>
                    {/* offer */}
                    <View style={{ marginTop: 7 }}>
                        <FlatList data={Offer} renderItem={offer} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Hotdealmenu;

const styles = StyleSheet.create({
    centerdView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    modelView: {
        // margin: 20,
        backgroundColor: "white",
        borderRadius: 8,
        padding: 10,
        width: width/1.25,
        height: width*0.85,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 20,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
})