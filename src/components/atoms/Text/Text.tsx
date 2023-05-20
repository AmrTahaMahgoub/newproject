
import React, {
    memo,
    FC
} from "react";
import {
    TextProps as RNTextProps,
    StyleSheet,
    StyleProp,
    TextStyle,
    Text
} from "react-native";


import {
    ColorsTypes
} from "../../../styles/colors";

import styles from "./styles";
import { Colors, Typography } from "../../../styles";
import { FontFamilyTypes, FontSizeTypes } from "../../../styles/typography";

export type TextProps = {
    color?: keyof ColorsTypes,
    fontFamily?: keyof FontFamilyTypes,
    fontSize?: keyof FontSizeTypes
}

type TextStyleTypes = StyleProp<TextStyle>

const CustomText: FC<RNTextProps & TextProps> = (props) => {
    return (
       <React.Fragment>
            <Text
                {...props}
                style={StyleSheet.flatten([styles.textStyle, customStyles(props), props.style])}
            />
        </React.Fragment>
    )
}

CustomText.defaultProps = {
    color: "PRIMARY1",
    fontFamily: "BOLDROBOTO",
    fontSize: "P"
}

const customStyles = ({
    fontFamily,
    fontSize,
    color
}: TextProps) => {
    const _styles: TextStyleTypes = {
        color: Colors[color || "PRIMARY1"],
        fontFamily: Typography[fontFamily || "BOLDROBOTO"],
        fontSize: Typography[fontSize || "P"]
    }
    return _styles
}

export default memo(CustomText)