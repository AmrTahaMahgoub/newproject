import React, { FC, memo } from 'react';
import { View } from 'react-native';
import { Colors, Typography } from '../../../styles';
import { Button } from '../../atoms';

import Svgs, { IconsName } from '../../../assets/svgs';
import Text from '../../atoms/Text/Text';
import Card from '../../atoms/Card/Card';
type HeaderProps ={
    title :string | null,
    icon: IconsName 

}

const Header :FC<HeaderProps>= (props)=>{
    return (<View style={{justifyContent:"space-between", flexDirection:"row",backgroundColor:Colors.WHITE}}>
        <Button onPress={()=>{console.log("filtered")}}>
            <Svgs name='Listalignleft'></Svgs>
        </Button>
        <Text fontFamily='BOLDROBOTO' fontSize='FS16' >{props.title}</Text>
      <Button onPress={()=>{console.log("searched")}}>
            <Svgs name= {props.icon}></Svgs>
        </Button>
       
    </View>
    )
}

export default memo(Header)