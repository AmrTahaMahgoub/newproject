import React, {memo} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import SvgIcon, {IconsName} from '../../../assets/svgs';

import {ViewRow} from '../../atoms';
import {getHeight, getWidth, scale} from '../../../styles/dimensions';
import Text from '../../atoms/Text/Text';
import {TextTypes} from '../../atoms/Button/Button';
import {
  FontFamilyTypes,
  FontSizeTypes,
  TextFontTypes,
} from '../../../styles/typography';
import {Typography} from '../../../styles';

type sizeTypes = `small` | `big` | `large`;
type ButtonProps = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
  icon: IconsName;
  text: string;
  size: sizeTypes;
  fontsize?: keyof FontSizeTypes | undefined;
};
const TextWithIcon = ({children, size, icon, text, fontsize}: ButtonProps) => {
  return (
    <ViewRow
      style={{
        marginTop: getHeight(5),
        alignItems: 'center',
        alignContent: 'center',
      }}>
      <SvgIcon
        name={icon}
        width={getStyle(size).width}
        height={getStyle(size).height}
      />
      <Text
        fontFamily={getStyle(size).textType}
        fontSize={fontsize}
        style={
          {
            // paddingHorizontal: getWidth(5)
          }
        }>
        {text}
      </Text>
    </ViewRow>
  );
};

const getStyle = (
  size: sizeTypes,
): {
  width: number;
  height: number;
  textType: TextFontTypes;
} => {
  switch (size) {
    case 'small':
      return {
        width: scale(13.64),
        height: scale(13.64),
        textType: 'REGULARROBOTO',
      };
    case 'large':
      return {width: scale(22), height: scale(22), textType: 'REGULARROBOTO'};
    case 'big':
      return {width: scale(27), height: scale(27), textType: 'REGULARROBOTO'};
    default:
      return {
        width: scale(13.64),
        height: scale(13.64),
        textType: 'REGULARROBOTO',
      };
  }
};
export default memo(TextWithIcon);
