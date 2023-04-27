
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import styles from './styles';
export type justifyContentTypes =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | undefined;
type ViewBoxProps = {
    children?: React.ReactNode,
    style?: StyleProp<ViewStyle>,
    shadow?: boolean,
    border?: boolean,
    justifyContent?: justifyContentTypes

}
export const ViewBox = ({
    children,
    style,
    shadow,
    border,
    justifyContent,
    alignItems,
    borderRadius,
    flexDirection
}: ViewBoxProps & ViewStyle) => {
    return (
        <View
            style={
                StyleSheet.flatten([
                    styles.container,
                    shadow && styles.shadow,
                    border && styles.border,
                    {
                        justifyContent,
                        alignItems,
                        borderRadius,
                        flexDirection
                    },
                    style,
                ])}>
            {children}
        </View>
    )
}
ViewBox.defaultProps = {
    ...styles.container

}