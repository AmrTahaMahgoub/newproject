import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';
import {images} from '../../../assets/imgs';
import styles from '../AdverList/styles';
import Text from '../../atoms/Text/Text';
import {
  AdverListImagesType,
  AdverListTemp4DataType,
} from '../../../redux/api/api';
import {Image} from '../../atoms/Image/Image';
import {TextWithIcon} from '../../molecules';
import {getHeight, getWidth} from '../../../styles/dimensions';
import {Colors, Spacing} from '../../../styles';

const AdverListTEmp4Item = ({item}: {item: AdverListTemp4DataType}) => {
  return (
    <View style={{
        
        height: getHeight(260)
    
    , width: getWidth(375),
    //backgroundColor: "red"
    }}>
      <Image
        resizeMode="cover"
        style={{
          width: getWidth(375),
          height: getHeight(180),
        }}
        source={item.image}></Image>
      <View
        style={{
          height: getHeight(80),
          backgroundColor: Colors.WHITE,
          padding: Spacing.S8,
          justifyContent: 'flex-start',
          alignContent: 'flex-start',
          alignItems: 'flex-start',
          
        }}>
        <Text>{item.title}</Text>
        <TextWithIcon
          text={item.date}
          icon="Calender"
          size={'small'}
          fontsize={'FS8'}
        />
        <TextWithIcon
          text={item.location}
          icon="Location"
          size={'small'}
          fontsize={'FS8'}
        />
      </View>
    </View>
  );
};

export default AdverListTEmp4Item;
