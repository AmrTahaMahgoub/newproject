import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

import styles from './styles';
export type TextTypes =
  | `bold12`
  | 'bold11'
  | 'regular14'
  
interface TextProps {
  children?: string;
  style?: StyleProp<TextStyle>;
  type?: TextTypes;
  color?: string;
}
const TextBold12 = ({children, style, type, color}: TextProps & TextStyle) => {
  return (
    <Text
      style={[styles[type || 'bold12'], color ? {color: color} : {}, style]}>
      {children}
    </Text>
  );
};

export default TextBold12;