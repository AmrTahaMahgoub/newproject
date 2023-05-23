import React, {
    FC,
    memo
} from 'react';
import {
    Button
} from '../../atoms';
import {
    scale
} from '../../../styles/dimensions';
import {
    View, ViewProps
} from 'react-native';

const Rating: FC<ViewProps & {
    rate?: number,
    disabled?: boolean,
    size?: number,
    onChangeValue?: (value: string) => void
}> = ({
    disabled = true,
    rate = 1,
    size = scale(7),
    onChangeValue = () => { }, ...props
     
}) => {
        return (
            <View

                style={[{ flexDirection: "row" }, props.style]}>
                {Array(5).fill({}).map((item, index) => <Button
                    onPress={() => onChangeValue(`${index + 1}`)}
                    key={`rating_${index}`}
                    style={{ paddingVertical: 0 }}
                    disabled={disabled}
                    icon='RightArrow'
                    iconContainerStyle={{
                        marginLeft: 0
                    }}
                    iconStyle={{
                        color: index < rate ? "yellow" : "red",
                        width: size,
                        height: size
                    }} />)}
            </View>

        )
    }

export default memo(Rating)
