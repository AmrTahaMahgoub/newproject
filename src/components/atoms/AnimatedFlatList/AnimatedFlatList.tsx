import React, { FC } from 'react';
import {
    FlatListProps
} from 'react-native';
import Animated, {
    useAnimatedScrollHandler,
} from 'react-native-reanimated';


type AnimatedScrollViewProps = {
    y: Animated.SharedValue<number>
}
const AnimatedFlatList: FC<FlatListProps<any> & AnimatedScrollViewProps> = ({ y, ...props }) => {
    const onScroll = useAnimatedScrollHandler({
        onScroll(event:any) {
            y.value = event.contentOffset.y
        }
    })

    return (
        <Animated.FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            onScroll={onScroll}
            scrollEventThrottle={0.00015}
            {...props}
        />

    )
}

export default AnimatedFlatList
