/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Hotdealmenu from './Hotdealmenu';
import ShareExperience from './ShareExperience';

const Location = () => {
  return (
    <View>
      {/* <Text>Location</Text> */}
      <ScrollView>
        <Hotdealmenu />
        <ShareExperience />
      </ScrollView>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({});
