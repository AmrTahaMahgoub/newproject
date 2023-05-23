import React from "react";

import Text from "../../atoms/Text/Text";
import { AdverListImagesWithDateType, FeaturesAndAnalysisType } from "../../../redux/api/api";
import { View } from "react-native";
import { getHeight, getWidth } from "../../../styles/dimensions";
import Image from "../../atoms/Image/Image";
const FeaturesAndAnalysis = ({item}: {item: FeaturesAndAnalysisType}) => {
    return (
    
<View style={{height:getHeight(212), width:getWidth(106), backgroundColor:"gray"}}>
    <Image source={item.image} ></Image>
    <Text>{item.title} </Text>
    <Text>{item.name}</Text>
</View>
   
    );
  };
  
  export default FeaturesAndAnalysis;