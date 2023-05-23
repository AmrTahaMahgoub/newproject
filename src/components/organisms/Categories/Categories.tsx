import React from 'react';
import { Image } from '../../atoms/Image/Image';
import { CategoriesDataType } from '../../../redux/api/api';
import { View } from 'react-native';
import Text from '../../atoms/Text/Text';
import { getHeight, getWidth } from '../../../styles/dimensions';
import { Spacing } from '../../../styles';

const CategoriesItem = ({item}: {item: CategoriesDataType}) => {
    return (
    
      <View
      style={{
        height: getHeight(163),
        width: getWidth(106),
        margin: Spacing.S4,
        justifyContent: 'space-between',
        alignItems: 'center',
       // alignContent: 'flex-start',
       // backgroundColor:"red"
      }}>
      <Image
        source={item.image}
        style={{ height: getHeight(138)}}></Image>
     
      <Text fontFamily="MEDIUMROBOTO" style={{textAlign: 'center'}}>
        {item.title}
      </Text>
    </View>
   
    );
  };
  
  export default CategoriesItem;