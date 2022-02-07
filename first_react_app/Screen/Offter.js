/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabViewExample from './TabViewExample';

const { width } = Dimensions.get("window");
const height = width / 2;

const data = [
  { id: "1", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu8G_PW5FZw4TOrbF1-cXFq7gF3VP2L-7YWgRScSH1-oiKpm-ssM1abDuj2FKb1yuaN6c&usqp=CAU" },
  { id: "2", img: "https://cloudfront-us-east-1.images.arcpublishing.com/gray/7AUVEGEREZJSHAND5H5DVZDAIE.jpg" },
  { id: "3", img: "https://www.thesportsexaminer.com/wp-content/uploads/2019/02/tsx-pix-2019-214-burger-king-logo-750.jpg" },
  { id: "4", img: "https://www.saraswatbank.com/images/Real-Paprika.jpg" },
]

const Offter = () => {
  const renderItem = ({ item }) => {
    return (
      // <ScrollView>
      <View style={{ marginBottom: 10 }}>
        {/* <Text>{item.id}</Text> */}
        <Image style={{ width: width - 45 , height, borderRadius: 10 }} source={{ uri: item.img }} />
      </View>
      // </ScrollView>
    )
  }

  return (
    <View>
      <ScrollView>
        <View style={{ backgroundColor: "skyblue", height: height / 1.6,  justifyContent: 'flex-end' }} >
          <View style={{ paddingLeft: 20 }}>
            <Icon size={24} color="black" name="notifications" style={{ left: width / 1.15, top: 23,color:"white" }} />
            <Text style={{ fontSize: 15 ,color:"white"}}>Total Points</Text>
            <Text style={{ fontSize: 30 ,color:"white"}}>50,000</Text>
          </View>
        </View>
        <TabViewExample />
        <View style={{ marginRight: 20, marginLeft: 20, marginBottom: 10, marginTop: 10 }}>
          {/* <Text style={{fontSize:50}}>Offer set Card </Text> */}
          <FlatList data={data} renderItem={renderItem} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Offter;

const styles = StyleSheet.create({});
