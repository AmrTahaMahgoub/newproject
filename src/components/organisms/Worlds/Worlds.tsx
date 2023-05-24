import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';

import styles from '../AdverList/styles';
import Text from '../../atoms/Text/Text';
import {
  AdverListImagesType,
  SponsersDataType,
  UsersDataType,
  WorldsDataType,
} from '../../../redux/api/api';
import {Image, ViewBox, ViewRow} from '../../atoms';
import {getHeight, getWidth} from '../../../styles/dimensions';
import { Spacing } from '../../../styles';

const WorldsItem = ({item}: {item: WorldsDataType}) => {
  return (
    <View
      style={{
        marginRight:Spacing.S4,
        flexDirection:"column",
       // backgroundColor: 'red',
        height: getHeight(100),
        width: getWidth(151),
        justifyContent: 'space-between',


      }}>
      <Image
        source={item.image}
        style={{width: getWidth(151), height: getHeight(130)}}></Image>
      <View
        style={{
          //backgroundColor:"yellow",
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          height: getHeight(30)
        }}>
       
        <Text fontSize="FS11" fontFamily='MEDIUMROBOTO'>
          {item.title}
        </Text>
      </View>
    </View>
  );
};

export default WorldsItem;
