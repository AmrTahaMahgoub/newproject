import {View, Image} from 'react-native';
import {
  AdverListImagesType,
  AdverListImagesWithDateType,
} from '../../../redux/api/api';
import React from 'react';
import styles from './styles';
import Text from '../../atoms/Text/Text';
import {ViewRow} from '../../atoms';
import Svgs from '../../../assets/svgs';
import {getHeight, getWidth} from '../../../styles/dimensions';
import { Colors, Spacing } from '../../../styles';

//import { Image } from "../../atoms";

const AdverListWithDate = ({item}: {item: AdverListImagesWithDateType}) => {
  return (
    <View
      style={
        {
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }
      }>
      <Image source={item.source} style={styles.imagewithdate} />
      <View style={{position: 'absolute',
    top:getHeight(120)}}>
      
        <Text  fontFamily="MEDIUMROBOTO" color='SEMIWHITE_F9F9F9' style={{marginBottom:Spacing.S8}}>{item.title}</Text>
        <ViewRow>
          <Svgs name="Calender" stroke={"white"} ></Svgs>
          <Text fontFamily="REGULARLATO" fontSize="FS8" color='SEMIWHITE_F9F9F9'>
            {item.date}
          </Text>
        </ViewRow>
        <ViewRow>
          <Svgs name="Location" stroke={"white"}></Svgs>
          <Text fontFamily="REGULARLATO" fontSize="FS8" color='SEMIWHITE_F9F9F9'>
            {item.location}
          </Text>
        </ViewRow>
      </View>
    </View>
  );
};

export default AdverListWithDate;
