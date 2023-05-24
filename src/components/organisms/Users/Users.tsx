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
} from '../../../redux/api/api';
import {Image, ViewBox, ViewRow} from '../../atoms';
import {getHeight, getWidth} from '../../../styles/dimensions';

const UsersItem = ({item}: {item: UsersDataType}) => {
  return (
    <ViewRow
      style={{
       // backgroundColor: 'red',
        height: getHeight(48),
        width: getWidth(181),
        justifyContent: 'space-between',


      }}>
      <Image
        source={item.image}
        style={{width: getWidth(48), height: getHeight(48)}}></Image>
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'flex-start',
          alignItems: 'flex-start',
        }}>
        <Text color="BLACK" fontSize="FS16" fontFamily="MEDIUMROBOTO">
          Good afternoon{' '}
        </Text>
        <Text fontSize="FS18" color="GREEN_009D97">
          {item.name}
        </Text>
      </View>
    </ViewRow>
  );
};

export default UsersItem;
