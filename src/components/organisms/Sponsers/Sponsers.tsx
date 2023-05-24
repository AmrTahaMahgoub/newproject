import React from 'react';
import {Image} from '../../atoms/Image/Image';
import {CategoriesDataType, SponsersDataType} from '../../../redux/api/api';
import {View} from 'react-native';
import Text from '../../atoms/Text/Text';
import {getHeight, getWidth} from '../../../styles/dimensions';
import {Spacing} from '../../../styles';

const SponsersItem = ({item}: {item: SponsersDataType}) => {
  return (
    <View
      style={{
        height: getHeight(113),
        width: getWidth(82),
        margin: Spacing.S20,
       // justifyContent: 'space-between',
        alignItems: 'center',
        // alignContent: 'flex-start',
        // backgroundColor:"red"
      }}>
      <Image source={item.image} style={{height: getHeight(82), width:getWidth(82),marginBottom:Spacing.S8}}></Image>

      <Text  fontSize='FS12' style={{textAlign: 'center'}}>
        {item.name}
      </Text>
    </View>
  );
};

export default SponsersItem;
