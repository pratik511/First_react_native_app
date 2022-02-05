/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from '../Components/Card';
import Flatlist from '../Components/Flatlist';
import RecomandedWebsite from '../Components/RecomandedWebsite';
import Search from '../Components/Search';

const Home = () => {
  return (
    <View>
      {/* <Text>Home</Text> */}
          <View>
              <ScrollView>
              <Search />
              <Flatlist />
              <Card />
              <RecomandedWebsite />
              </ScrollView>
          </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
