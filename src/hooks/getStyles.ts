import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

import { scale } from '../styles/dimensions';


type props = {
  type?: 'circle' | undefined;
  width?: number | undefined;
  height?: number | undefined;
};
export const getStyles = ({
  width,
  height,
  type,
  justifyContent,
  alignItems,
  borderRadius,
  color,
}: ViewStyle & ImageStyle & props & TextStyle) => {
  const condation = StyleSheet.create({
    customStyle: {
      width: width,
      height: height,
      borderRadius:
        type == 'circle'
          ? scale(width || 0 / 2)
          : borderRadius
          ? borderRadius
          : 0,
      justifyContent: justifyContent,
      alignItems: alignItems,
      color: color,
    },
  });

  return condation.customStyle;
};
