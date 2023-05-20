
import React, {
    memo
} from 'react';
import {
    StyleSheet
} from 'react-native';
import FastImage, {
    FastImageProps
} from 'react-native-fast-image';

import styles from './styles';
import { images } from '../../../assets/imgs';


export const Image = (props: FastImageProps) => {
    return (
        <FastImage
            style={StyleSheet.flatten([
                styles.container,
                props.style])}
            resizeMode={props.resizeMode}
            source={(typeof props.source === "number" || props.source?.uri) ? props.source : images.football100} />
    )
}

Image.defaultProps = {
    resizeMode: "contain"
}

export default memo(Image)