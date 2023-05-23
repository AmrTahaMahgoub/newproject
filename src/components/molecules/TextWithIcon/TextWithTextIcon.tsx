import { View } from "react-native"
import { Button, ViewRow } from "../../atoms"
import Text from "../../atoms/Text/Text"
import React from "react"
import Svgs, { IconsName } from "../../../assets/svgs"
import { getWidth } from "../../../styles/dimensions"
 type TextwithTextIconType={
    maintitle:string,
    title:string,
    icon:IconsName


}

const TextwithTextIcon =({maintitle,title,icon}:TextwithTextIconType )=>{
    return (
        <ViewRow style={{ justifyContent:"space-between", width:getWidth(345)}} >
        <Text fontSize="FS14">{maintitle}</Text>
        <Button>
          <View style={{width:getWidth(50),flexDirection:"row", justifyContent:"space-between"}} >
            <Text fontSize="FS12" color='WHITE_A8A8A8'>{title}</Text>
            <Svgs name={icon} width={getWidth(10)} ></Svgs>
          </View>
        </Button>
      </ViewRow>
    )
}
export default TextwithTextIcon