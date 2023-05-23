import React from 'react';
import {  AdverListImagesType,  Section} from '../../../redux/api/api';
import {Image, View} from 'react-native';
//import Image from '../../atoms/Image/Image';
import {getHeight, getWidth, scale} from '../../../styles/dimensions';
import Text from '../../atoms/Text/Text';
import { Colors, Spacing } from '../../../styles';
//  export type EducationAndHealthItemType = {
//     item:EducationAndHealthType[],
//     index?:number
// }

const EducationAndHealthItem = ({item}: {item: Section}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        width: getWidth(124),
        height: getHeight(129),
        borderRadius: scale(20),
       marginVertical:Spacing.S4,
       marginRight:Spacing.S8,
       borderColor:Colors.GRAY_00000029,
       borderWidth:1
      }}>
      <Image  source={item.image} style={{height:getHeight(90), width:getWidth(122), borderRadius: scale(18),}}></Image>
      <View style={{height:getHeight(39), justifyContent:"center"}}><Text fontFamily='MEDIUMROBOTO'>{item.text} </Text></View>
    </View>
  );
};

export default EducationAndHealthItem;
