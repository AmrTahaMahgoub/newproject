
import React from 'react';
import { TouchableOpacity, StyleProp, TextStyle, TouchableOpacityProps, ViewStyle, View, ActivityIndicator } from 'react-native';
import { GenericTouchableProps } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';


import SvgIcon from '../../../assets/svgs';

import { Colors } from '../../../styles';


import styles from './styles';
import { Loader } from '../Loader/Loader';
import Text from '../Text/Text';
import { getHeight, scale } from '../../../styles/dimensions';
import ViewRow from '../ViewRow/ViewRow';
export type RotateTypes = 'left' | 'right' | 'top' | 'bottom';
export type IconsName =
  "Search" |
  "Listalignleft"
 
export interface ButtonIconsProps {
    color?: string;
    width?: number;
    height?: number;
  }
  export type TextTypes =
  | `bold12`
  | 'bold11'
  | 'regular14'
  

type ButtonProps = {
    children?: React.ReactNode,
    style?: StyleProp<ViewStyle> | undefined;
    icon?: IconsName,
    text?: string,
    textType?: TextTypes,
    textstyle?: StyleProp<TextStyle>,
    color?: string,
    type?: 'default' | 'standard' | 'custom',
    iconRotate?: RotateTypes,
    iconStyle?: ButtonIconsProps,
    value?: string,
    loading?: boolean,
    iconContainerStyle?: StyleProp<ViewStyle>,
    textContainerStyle?: StyleProp<TextStyle>,
    onPressed?: ()=> void,
    
}
export const Button = (props: ButtonProps & TouchableOpacityProps & GenericTouchableProps) => {
    switch (props.type) {
        case 'default':
            return <DefultButton  {...props} />
        case 'standard':
            return <StandardButton {...props} />
        case 'custom':
            return <CustomButton {...props} />
        default:
            return <DefultButton {...props} />
    }
}




const StandardButton = (props: ButtonProps & TouchableOpacityProps & GenericTouchableProps) => {
    const textProps = {
        color: props.color,
        type: props.textType,
        style: props.textstyle
    }
    return (
        <TouchableOpacity
            {...props}
            style={[styles.StandardButtonContainer, props.style]}
        >
            <Loader loading={props.loading} />
            {props.icon && <SvgIcon

                style={{ marginHorizontal: getHeight(5) }}
                rotate={props.iconRotate}
                name={props.icon}

                width={scale(15, 812)}
                height={scale(15, 812)}
                {...props.iconStyle}
            />}
            {(props.text && !props.loading) && <Text
                style={props.textstyle}
                color={Colors.WHITE}
                type={props.textType || "bold11"}

            >{props.text}</Text>}
            {props.children}
        </TouchableOpacity>
    )
}


const CustomButton = (props: ButtonProps & TouchableOpacityProps & GenericTouchableProps) => {
    const textProps = {
        color: props.color,
        type: props.textType,
        style: props.textstyle
    }
    return (
        <TouchableOpacity
            {...props}
            style={[styles.customButtonContainer, props.style]}
        >
            <Text
                type={"bold12"}
                color={Colors.DARK_GRAY}
                style={[{ marginTop: 0 }, props.textstyle]}>{props.text}</Text>
            <ViewRow style={{ alignItems: "center" }}>
                <Text type={"bold12"} style={styles.value}>{props.value}</Text>
                <SvgIcon
                    rotate={props.iconRotate}
                    name={props.icon || "Search"}
                    width={scale(9)}
                    height={scale(20)}
                    {...props.iconStyle}
                />
            </ViewRow>

        </TouchableOpacity>
    )
}



const DefultButton = (props: ButtonProps & TouchableOpacityProps & GenericTouchableProps ) => {
    const textProps = {
        color: props.color,
        type: props.textType,
        style: props.textstyle
    }
    return (
        <TouchableOpacity
      
            style={styles.container}
            {...props}
        >


            {props.icon && <SvgIcon
                rotate={props.iconRotate}
                name={props.icon}
                width={scale(30, 812)}
                height={scale(30, 812)}
                {...props.iconStyle}
            />}
            {props.text && <Text

                {...textProps}

            >{props.text}</Text>}
            {props.children}
        </TouchableOpacity>
    )
}