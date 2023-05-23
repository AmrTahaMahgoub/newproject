import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {images} from '../../../assets/imgs';
import styles from '../AdverList/styles';
import Text from '../../atoms/Text/Text';
import {AdverListImagesType} from '../../../redux/api/api';

const AdverListItem = ({item}: {item: AdverListImagesType}) => {
  return (
  
      <Image source={item.source} style={styles.image} />
 
  );
};

export default AdverListItem;
