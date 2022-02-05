/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Flatlist from '../Components/Flatlist';
import RecomandedWebsite from '../Components/RecomandedWebsite';
import Search from '../Components/Search';

const Nearloacation = () => {
  return (
    <View>
      <ScrollView>
        <Search />
        <Flatlist />
        <RecomandedWebsite />
        <RecomandedWebsite />
      </ScrollView>
    </View>
  );
};

export default Nearloacation;

const styles = StyleSheet.create({});
