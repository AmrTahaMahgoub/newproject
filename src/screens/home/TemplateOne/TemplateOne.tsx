// import React from "react";

// import { View } from "react-native";

// import Text from "../../../components/atoms/Text/Text";
// import { Header } from "../../../components/molecules";
// import { getWidth } from "../../../styles/dimensions";
// import { Image } from "../../../components/atoms";
// import Card from "../../../components/atoms/Card/Card";





// function TemplateOne (){
//   return (<View style={{paddingHorizontal:getWidth(16), paddingTop:getWidth(16)}}>
//     <Header title={null} icon={null} ></Header>
//     {/* <Image></Image> */}
//     <Card style={{height:200}}>
//     <Image ></Image>
//     </Card>
//   </View>)
// }
// export default TemplateOne
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Dimensions } from 'react-native';
import { Image } from '../../../components/atoms/Image/Image';
import { images } from '../../../assets/imgs';

const { width, height } = Dimensions.get('window');

const image = [
  { id: '1', source:images.football50 },
  { id: '2', source:images.football100 },
 
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageScroll = (event:any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(offsetX / width);
    setActiveIndex(index);
  };

  const renderImageItem = ({ item }:any) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={item.source} style={styles.image} />
      </View>
    );
  };

  const renderDotIndicator = ({ item, index }:any) => {
    return (
      <View
        style={[
          styles.dot,
          { backgroundColor: index === activeIndex ? 'white' : 'rgba(255, 255, 255, 0.5)' },
        ]}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={image}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleImageScroll}
        renderItem={renderImageItem}
      />
      <View style={styles.dotIndicator}>{image.map(renderDotIndicator)}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width,
    height,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  dotIndicator: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
});

export default ImageCarousel;