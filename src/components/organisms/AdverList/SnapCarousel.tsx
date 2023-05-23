import React from 'react';
import {View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {AdverListImages, AdverListImagesType} from '../../../redux/api/api';
import AdverListItem from './AdverList';
import {getHeight, getWidth, scale} from '../../../styles/dimensions';

type SnapCarouselProps = {
  data: AdverListImagesType[];

};

const SnapCarousel = ({data}: SnapCarouselProps) => {
  const RenderAdverItem = ({item}: any) => <AdverListItem item={item} />;
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  
  return (
    <View>
      <Carousel
      
        vertical={false}
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={AdverListImages}
        renderItem={RenderAdverItem}
        sliderWidth={getWidth(342)}
        itemWidth={getWidth(342)}
        onSnapToItem={index => setIndex(index)}
        useScrollView={true}
   
      />
      <Pagination
     delayPressInDot={0}
     containerStyle={{margin:getHeight(-20)}}

        dotsLength={AdverListImages.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: getWidth(8),
          height: getHeight(8),
          borderRadius: scale(4),
           marginVertical: 0,
          backgroundColor: 'rgba(0, 157, 151, 1.0)',
        }}
        inactiveDotOpacity={0.1}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

export default SnapCarousel;
