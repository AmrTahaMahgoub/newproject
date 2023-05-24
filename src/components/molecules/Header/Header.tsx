import React, {FC, memo} from 'react';
import {StyleProp, View} from 'react-native';
import {Colors, Typography} from '../../../styles';
import {Button} from '../../atoms';

import Svgs, {IconsName} from '../../../assets/svgs';
import Text from '../../atoms/Text/Text';
import Card from '../../atoms/Card/Card';
import {getHeight, getWidth, scale} from '../../../styles/dimensions';
type RightIcons =
  "Search"|
  "Notifications"|
  "withoutRightIcon"|
  "Listalignleft"

type HeaderProps = {
  title?: string | null,
  icon?: IconsName | undefined,
  onpress?: () => void,
  type:RightIcons
};

const Header: FC<HeaderProps> =({title, icon , onpress,type}) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
       
      }}>
    <Button onPress={onpress}>
        <Svgs name="Listalignleft"></Svgs>
      </Button>
      <Text fontFamily="BOLDROBOTO" fontSize="FS16">
        {title}
      </Text>

    
  {type==="Notifications" &&     <View>
         <Button
            onPress={() => {
              console.log('searched');
            }}>
            <Svgs name={"Bell"}></Svgs>
          </Button>
          <View
            style={{
              height: getHeight(12),
              width: getWidth(12),
              borderRadius: scale(6),
              backgroundColor: 'red',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              left: getWidth(8),
            }}>
            <Button>
              <Text fontSize="FS7" color="WHITE">
                {'2'}
              </Text>
            </Button>
          </View>
        </View>}
     
        {type==="Search" &&<Button
          onPress={() => {
            console.log('searched');
          }}>
          <Svgs name={'Search'}></Svgs>
        </Button>}
      
    </View>
  );
};

export default memo(Header);
