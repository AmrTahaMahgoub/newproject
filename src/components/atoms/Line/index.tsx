
// import React from 'react';
// import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

// import { Colors } from '../../../styles';
// import styles from './styles';


// type LineProps = {
//     type?: 'horizontal' | 'vertical',
//     marginTop?: number,
//     style?: StyleProp<ViewStyle> | undefined;
// }
// export const Line = ({
//     type,
//     marginTop,
//     style
// }: LineProps) => {
//     return (
//         <View style={[type === "vertical" ? styles.vertical : styles.horizontal, { marginTop: marginTop },style]} />
//     )
// }

// Line.DefaultProps = {
//     type: "horizontal"
// }
import React, {
    memo,
    FC
} from "react";
import {
    View,
    ViewProps
} from "react-native";
import styles from "./styles";
export type LineProps = {
    type?: "horizontal" | "vertical"
}


const Line: FC<ViewProps & LineProps> = ({ type,style, ...props }) => {
    return (
        <View
            style={[styles[type || "horizontal"],style]}
            {...props}
        />
    )
}

export default memo(Line)