/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, Image, ScrollView } from 'react-native';

const { width } = Dimensions.get("window");
const height = width / 2.3;

const data = [
  { id: "1", img: "https://pbs.twimg.com/media/FFuuI16VIAgkrdd.png" },
  { id: "2", img: "https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/Cxx-d099aSENnzklzNZ8pTP5lUk=/1660x934/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/CC2WCCSINFCEDEYUN6Z2BGVA6M.jpg" },
  { id: "3", img: "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/10/domino-s-pizza-1571307449.jpg" },
  { id: "4", img: "https://pbs.twimg.com/media/FFuuI16VIAgkrdd.png" },
]

const Offter = () => {
  const renderItem = ({ item }) => {
    return (
      <ScrollView>
        <View>
          <Text>{item.id}</Text>
          <Image style={{ width:width-40, height,borderRadius:10 }} source={{ uri: item.img }} />
        </View>
      </ScrollView>
    )
  }

  return (
    <View>
      <View style={{width,height:height-50,  backgroundColor: "red", marginBottom: 10 }} >
        <Text style={{ fontSize: 50 }}>Img set this area</Text>
      </View>
      <View style={{ marginRight:20,marginLeft:20,marginBottom: 10 }} >
        {/* <Text style={{fontSize:50}}>Offer set Card </Text> */}
        <FlatList data={data} renderItem={renderItem} />
      </View>
    </View>
  );
};

export default Offter;

const styles = StyleSheet.create({});
