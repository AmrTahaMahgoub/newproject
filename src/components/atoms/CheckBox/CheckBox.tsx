import React, {
    FC,
    memo,
    useState
} from 'react';
import {
    TouchableOpacityProps,
} from 'react-native';
import {
    IconsName
} from '../../../assets/svgs';

import styles from './styles';
import { Button } from '../Button/Button';


const CheckBox: FC<TouchableOpacityProps & {
    checkIcon?: IconsName,
    unCheckIcon?: IconsName,
    text?: string,
    isChecked?: boolean
}> = ({
    checkIcon,
    unCheckIcon,
    text,
    isChecked, ...props
}) => {
        let [_isChecked, setChecked] = useState(isChecked)
        const _checkIcon = checkIcon || "ArrowBack"
        const _unCheckIcon = unCheckIcon || "ArrowForward"
        const onCheck = () => {
            setChecked(!_isChecked)
        }
        return (
            <Button
            type='standard'
               
                onPress={onCheck}
               textContainerStyle={styles.textStyle}
                iconContainerStyle={{ marginLeft: 0 }}
                iconStyle={styles.icon}
                icon={_isChecked ? _checkIcon : _unCheckIcon}
                text={text}
                style={[styles.button, props.style]}
                 textstyle={{}} 
                />
        )
    }

export default memo(CheckBox)
