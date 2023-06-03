/*
 * @Author: Ender-Zhang 102596313+Ender-Zhang@users.noreply.github.com
 * @Date: 2023-03-24 11:36:37
 * @LastEditors: Ender-Zhang 102596313+Ender-Zhang@users.noreply.github.com
 * @LastEditTime: 2023-06-03 00:57:04
 * @FilePath: \mobile-end\interaction\screens\EventPage.tsx
 */

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { VStack, Center, NativeBaseProvider, Box, useDisclose, Button, Text, View, HStack, Image,  SectionList, Container } from 'native-base';
import {ScrollView } from 'react-native';
import {Form_item} from '../components/Form_item';
import userdata from '../assets/data/user.json';
import listdata from '../assets/data/list.json';
import * as FileSystem from 'expo-file-system';
import ActionSheet from '../components/ActionSheet';
import Portocol_Setting from '../components/Main_ProtococlSetting'
import practicedata from '../assets/data/Practice.json';



// thd data displayed on the home page is from the list.json file
var id = 0;

function DetailsScreen({ route, navigation } : any) {
  const { userId } = route.params;
  userdata["user"].id = userId;
  id = userId;

  console.log("DetailScreen");
  
  return (
    <NativeBaseProvider >
      <Text>Main</Text>
    </NativeBaseProvider>
  );


}

export default DetailsScreen;




