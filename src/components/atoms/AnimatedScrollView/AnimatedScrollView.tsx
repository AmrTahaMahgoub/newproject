import React, { FC } from 'react';



import Animated, {
 
    useAnimatedScrollHandler
} from 'react-native-reanimated';
import { ScrollView, ScrollViewProps } from 'react-native';



type AnimatedScrollViewProps = {
    y: Animated.SharedValue<number>
}
const AnimatedScrollView: FC<ScrollViewProps & AnimatedScrollViewProps> = ({ y, ...props }) => {
    const onScroll = useAnimatedScrollHandler({
        onScroll(event:any) {
            y.value = event.contentOffset.y
        }
    })

    return (
      
        <ScrollView
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    onScroll={onScroll}
    scrollEventThrottle={0.00015}
    {...props}
/> 
    )
}

export default AnimatedScrollView
