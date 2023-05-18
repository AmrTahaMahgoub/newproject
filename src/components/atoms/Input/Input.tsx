
import React, { useState } from 'react';
import { View, TextInput, StyleProp, TextStyle, KeyboardTypeOptions, ViewStyle } from 'react-native';
import { Button, Image, Text, ViewBox } from '../';



import { Colors } from '../../../styles';
import { Line } from '../Line';

import { getHeight, getWidth } from '../../../styles/dimensions';
import { images } from '../../../assets/imgs';
import styles from './styles';
export type IconsName =
  "ArrowBack" |
  "AreaIcon"|
  "ArrowForward"

type InputProps = {
    label: string,
    placeholder?: string,
    value?: string,
    onChangeText?: (text: string) => void,
    inputStyle?: StyleProp<TextStyle> | undefined,
    multiline?: boolean,
    password?: boolean,
    keyboardType?: KeyboardTypeOptions | undefined,
    maxLength?: number,
    style?: StyleProp<ViewStyle> | undefined,
    icon?: IconsName,
    error?: string,
    withFlag?: boolean,
    editable?: boolean

}
export const Input = ({
    label,
    placeholder,
    value,
    onChangeText,
    inputStyle,
    multiline,
    password,
    keyboardType,
    maxLength, style,
    icon,
    error,
    withFlag,
    editable
}: InputProps) => {
    let [showPassword, setShowPassword] = useState(password)



    return (
        <View>
            <ViewBox
                border
                shadow
                style={[styles.container, style, { opacity: editable === false ? .7 : 1 }]} >
                <View
                    style={styles.labelView}>
                    <Text
                        type={"bold11"}
                        color={Colors.DARK_GRAY}
                    >{`${label}`}</Text>

                    {icon && <Button
                        onPress={() => setShowPassword(!showPassword)}
                        style={{}}
                        iconStyle={styles.icon}
                        icon={icon} />}

                </View>
                <Line />
                <View style={styles.inputContainer}>
                    <TextInput
                        editable={editable}
                        maxLength={maxLength}
                        keyboardType={keyboardType}
                        secureTextEntry={showPassword}
                        multiline={multiline}
                        onChangeText={onChangeText}
                        value={value}
                        placeholder={placeholder}
                        style={[styles.inputStyle ? styles.inputError : null]}
                    />
                    {withFlag && <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text color={Colors.DARK_GRAY} style={{ marginTop: 2, paddingHorizontal: getWidth(10) }} type={"bold11"}>{"+966"}</Text>
                        <Image resizeMode='contain' source={images.camera}   />

                    </View>}
                    {password && <Button
                        onPress={() => setShowPassword(!showPassword)}
                        iconStyle={styles.passwordButton}
                        icon={showPassword ? "AreaIcon" : "ArrowForward"} />}
                </View>
            </ViewBox>

            {error ? <View style={{ width: '100%', alignItems: "flex-start", paddingTop: getHeight(5) }}>
                <Text type='bold11' color={Colors.RED}>{error}</Text>
            </View> : null}

        </View>
    )
}