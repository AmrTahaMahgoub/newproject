
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { Colors } from '../../../styles';
import styles from './styles';


type LineProps = {
    type?: 'horizontal' | 'vertical',
    marginTop?: number,
    style?: StyleProp<ViewStyle> | undefined;
}
export const Line = ({
    type,
    marginTop,
    style
}: LineProps) => {
    return (
        <View style={[type === "vertical" ? styles.vertical : styles.horizontal, { marginTop: marginTop },style]} />
    )
}

Line.DefaultProps = {
    type: "horizontal"
}