
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import SvgIcon, { IconsName } from '../../../assets/svgs';

import { Text } from '../../atoms';
import { ViewRow } from '../../atoms';
import { getHeight, getWidth, scale } from '../../../styles/dimensions';
import { TextTypes } from '../../atoms/Text/Text';

type sizeTypes = `small` | `big` | `large`
type ButtonProps = {
    children?: React.ReactNode,
    style?: StyleProp<ViewStyle> | undefined;
    icon: IconsName,
    text: string,
    size: sizeTypes
}
export const TextWithIcon = ({
    children,
    size,
    icon,
    text
}: ButtonProps) => {
    return (
        <ViewRow style={{ marginTop: getHeight(5) }}>
            <SvgIcon
                name={icon}
                width={getStyle(size).width}
                height={getStyle(size).height}
            />
            <Text style={{ paddingHorizontal: getWidth(5) }}
                type={getStyle(size).textType}>{text}</Text>
        </ViewRow>
    )
}

const getStyle = (size: sizeTypes): {
    width: number, height: number, textType: TextTypes
} => {
    switch (size) {
        case 'small':
            return { width: scale(13.64), height: scale(13.64), textType: "bold11" }
        case 'large':
            return { width: scale(22), height: scale(22), textType: "regular14" }
        case 'big':
            return { width: scale(27), height: scale(27), textType: "bold12" }
        default:
            return { width: scale(13.64), height: scale(13.64), textType: "bold11" }
    }
}