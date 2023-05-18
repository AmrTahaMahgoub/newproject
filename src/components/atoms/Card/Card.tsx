import React, {
    FC,
    memo
} from 'react';
import {
    TouchableOpacityProps,

} from 'react-native/types';

import styles from './styles';
import { Button } from '../Button/Button';

const Card: FC<TouchableOpacityProps> = ({ style, onPress, ...props }) => {
    return (
        <Button
           // onPress={onPress}
            style={[styles.cardContainer, style]}
            {...props}
        />
    )
}
export default memo(Card)
