import React from 'react';

import Text from '../../atoms/Text/Text';
import {
  AdverListImagesWithDateType,
  FeaturesAndAnalysisType,
} from '../../../redux/api/api';
import {View} from 'react-native';
import {getHeight, getWidth, scale} from '../../../styles/dimensions';
import Image from '../../atoms/Image/Image';
import {Spacing} from '../../../styles';
const FeaturesAndAnalysis = ({item}: {item: FeaturesAndAnalysisType}) => {
  return (
    <View
      style={{
        height: getHeight(212),
        width: getWidth(106),
        margin: Spacing.S4,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
       // backgroundColor:"red"
      }}>
      <Image
        source={item.image}
        style={{ height: getHeight(138)}}></Image>
      <Text fontFamily="MEDIUMROBOTO" style={{textAlign: 'left'}}>
        {item.title}{' '}
      </Text>
      <Text fontFamily="THINLATO" style={{textAlign: 'left'}}>
        {item.name}
      </Text>
    </View>
  );
};

export default FeaturesAndAnalysis;
