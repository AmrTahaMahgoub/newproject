import React from 'react';
import {Image} from '../../atoms/Image/Image';
import {
  CategoriesDataType,
  PopularTemp3DataType,
  PopularTemp4DataType,
} from '../../../redux/api/api';
import {View} from 'react-native';
import Text from '../../atoms/Text/Text';
import {getHeight, getWidth, scale} from '../../../styles/dimensions';
import {Colors, Spacing} from '../../../styles';
import {Line, ViewBox, ViewRow} from '../../atoms';
import {TextWithIcon} from '../../molecules';
import Svgs from '../../../assets/svgs';

const PopularTemp4Item = ({item}: {item: PopularTemp4DataType}) => {
  return (
    <ViewBox
      
      style={{
        margin: Spacing.S4,
        height: getHeight(115),
        width: getWidth(98),
        justifyContent: 'flex-start',
        //alignItems: 'flex-start',
        // alignContent: 'flex-start',
        paddingHorizontal: getWidth(0),
       // backgroundColor: 'gray',
        borderColor:Colors.GRAY_00000029,
        borderWidth:1,
      }}>
      <Image
        style={{
          width: getWidth(98),

          height: getHeight(49),
        }}
        source={item.image}></Image>
      <View
        style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            // alignContent: 'flex-start',
          backgroundColor: Colors.WHITE,
          height: getHeight(66),
          width: getWidth(98),
          padding: Spacing.S8,
        }}>
        <Text  numberOfLines={2} ellipsizeMode="tail" fontFamily="REGULARROBOTO" fontSize="FS10">
          {item.title}
        </Text>
        <Text fontFamily="REGULARROBOTO" fontSize="FS7" color="GRAY_00000029">
          {item.subtitle}
        </Text>

        <Text fontFamily="REGULARROBOTO" fontSize="FS7" color="GRAY_00000029">
          {item.duration}
        </Text>
      </View>
    </ViewBox>
  );
};

export default PopularTemp4Item;
