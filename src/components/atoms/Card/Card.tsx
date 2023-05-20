import React, {
    FC,
    memo
} from 'react';
import {
    TouchableOpacityProps

} from 'react-native';

import styles from './styles';
import { Button } from '../Button/Button';





const Card: FC<TouchableOpacityProps> = ({ style,children }) => {
    return (
        <Button

            style={[styles.cardContainer, style]}
             
        >
         {children}  
        </Button>
    )
}
export default memo(Card)
