import React, {
    FC,
    memo
} from 'react';
import {
    View,
    ListRenderItem,
    ScrollViewProps
} from 'react-native';
import Animated from 'react-native-reanimated';
import {
    Spacing
} from '../../../styles';
type RandomListProps = {
    renderItem: ListRenderItem<any>,
    data?: Array<any>
}

const RandomList: FC<ScrollViewProps & RandomListProps> = ({
    renderItem,
    data, ...props
}) => {
    let oddList = data?.filter((item, index) => index % 2 !== 1)
    let evenList = data?.filter((item, index) => index % 2 !== 0)
    return (
        <Animated.ScrollView
            {...props}
            style={{ width: "100%" }}
            contentContainerStyle={[{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                paddingRight: Spacing.S8,
                paddingLeft: Spacing.S16,

            }, props.contentContainerStyle]}>
            <View >
                {oddList?.map(
                    (item: any,
                        index: number,
                        separators: any
                    ) => renderItem({ item, index, separators }))}
            </View>
            <View >
                {evenList?.map((item: any, index: number, separators: any) => renderItem({ item, index, separators }))}
            </View>
        </Animated.ScrollView>
    )
}


export default memo(RandomList)
