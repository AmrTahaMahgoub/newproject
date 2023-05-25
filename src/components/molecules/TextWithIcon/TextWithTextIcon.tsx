import {View} from 'react-native';
import {Button, ViewRow} from '../../atoms';
import Text from '../../atoms/Text/Text';
import React from 'react';
import Svgs, {IconsName} from '../../../assets/svgs';
import {getHeight, getWidth} from '../../../styles/dimensions';
import { Spacing } from '../../../styles';
type TextwithTextIconType = {
  maintitle?: string;
  title: string;
  icon: IconsName;
};

const TextwithTextIcon = ({maintitle, title, icon}: TextwithTextIconType) => {
  return (
    <ViewRow
      style={{
        justifyContent: 'space-between',
        width: getWidth(345),
        height: getHeight(30),
        // backgroundColor:"red",
        alignItems: 'center',
      }}>
      <Text fontSize="FS14">{maintitle}</Text>
      <Button>
        <View
          style={{
          
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
      
          

          }}>
          <Text fontSize="FS12" color="WHITE_A8A8A8" style={{marginRight:Spacing.S8}}>
            {title}
          </Text>

        
             
            <Svgs
              name={icon}
              width={getWidth(10)}
              height={getHeight(16)}></Svgs>
          
        </View>
      </Button>
    </ViewRow>
  );
};
export default TextwithTextIcon;
