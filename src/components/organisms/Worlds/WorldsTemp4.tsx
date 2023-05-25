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
  WorldsTemp4DataType,
} from '../../../redux/api/api';
import {Image, ViewBox, ViewRow} from '../../atoms';
import {getHeight, getWidth} from '../../../styles/dimensions';
import {Spacing} from '../../../styles';

const WorldsTemp4Item = ({item}: {item: WorldsTemp4DataType}) => {
  return (
    <View
      style={{
        marginRight: Spacing.S4,
        flexDirection: 'column',
        // backgroundColor: 'red',
        height: getHeight(182),
        width: getWidth(151),
        justifyContent: 'space-between',
      }}>
      <Image
        source={item.image}
        style={{width: getWidth(151), height: getHeight(105)}}></Image>
      <View
        style={{
          //backgroundColor: 'yellow',
         // justifyContent: 'space-between',
          alignContent: 'center',
          alignItems: 'center',
          height: getHeight(77),

        }}>
     <View style={{width:getWidth(94), height:getHeight(30), marginBottom:Spacing.S8}}>
     <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          fontSize="FS11"
          fontFamily="MEDIUMROBOTO"
         // style={{textAlign: 'left'}}
          >
          {item.title}
        </Text>
     </View>
     <View style={{width:getWidth(94), height:getHeight(22)}}>
     <Text fontSize="FS8" fontFamily="MEDIUMROBOTO">
          {item.subtitle}
        </Text>
        <Text fontSize="FS8" fontFamily="MEDIUMROBOTO">
          {item.date}
        </Text>
     </View>
      </View>
    </View>
  );
};

export default WorldsTemp4Item;
