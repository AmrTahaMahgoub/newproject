import React from 'react';
import {Image} from '../../atoms/Image/Image';
import {
  CategoriesDataType,
  CategoriesTemp3DataType,
} from '../../../redux/api/api';
import {View} from 'react-native';
import Text from '../../atoms/Text/Text';
import {getHeight, getWidth, scale} from '../../../styles/dimensions';
import {Colors, Spacing} from '../../../styles';

const CategoriesTemp3Item = ({item}: {item: CategoriesTemp3DataType}) => {
  return (
    <View
      style={{
        height: getHeight(84),
        width: getWidth(62),
        margin: Spacing.S4,
        justifyContent: 'space-between',
        alignItems: 'center',
        // alignContent: 'flex-start',
        // backgroundColor:"red"
      }}>
      <View
        style={{
            justifyContent:"center",
            alignItems:"center",
//#EFEFEF
          borderRadius: scale(8),
          borderColor: Colors.GRAY_EFEFEF,
          borderWidth: 1,
          height: getHeight(62),
          width: getWidth(62),
        }}>
        <Image
          source={item.image}
          style={{height: getHeight(28), width: getWidth(28)}}></Image>
      </View>

      <Text fontFamily="MEDIUMROBOTO" fontSize='FS14' style={{textAlign: 'center'}}>
        {item.title}
      </Text>
    </View>
  );
};

export default CategoriesTemp3Item;
