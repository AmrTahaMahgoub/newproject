
import React, { useState } from 'react';
import { View, TextInput, StyleProp, TextStyle, KeyboardTypeOptions, ViewStyle } from 'react-native';
import { Button, Image,  Line,  ViewBox } from '../';
import { Colors } from '../../../styles';
import { getHeight, getWidth } from '../../../styles/dimensions';
import { images } from '../../../assets/imgs';
import styles from './styles';
import Text from '../Text/Text';
import Svgs, { IconsName } from '../../../assets/svgs';
// export type IconsName =
//   "ArrowBack" |
//   "AreaIcon"|
//   "ArrowForward"

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
                // border
                // shadow
                style={[styles.container, style, { opacity: editable === false ? .7 : 1 }]} >
                {/* <View
                    style={styles.labelView}>
                    <Text
                    color='BLACK'
                        fontFamily={"BOLDLATO"}
                        
                    >{`${label}`}</Text>

                    {icon && <Button
                        onPress={() => setShowPassword(!showPassword)}
                        style={{}}
                        iconStyle={styles.icon}
                        icon={icon} />}

                </View> */}
            
                <View style={styles.inputContainer}>
                {/* <Text
                    color='BLACK'
                        fontFamily={"BOLDLATO"}
                        
                    >{`${label}`}</Text> */}
                    <TextInput
                        editable={editable}
                        maxLength={maxLength}
                        keyboardType={keyboardType}
                        secureTextEntry={showPassword}
                        multiline={multiline}
                        onChangeText={onChangeText}
                        value={value}
                        placeholder={placeholder}
                        style={styles.inputStyle }
                    />
                     {icon &&
                     <Button>
                        <Svgs name={icon} color={Colors.GRAY_00000029}>
                            
                        </Svgs>
                     </Button>
                    //   <Button
                    //     onPress={() => setShowPassword(!showPassword)}
                    //     style={{}}
                    //     iconStyle={styles.icon}
                    //     icon={icon} />
                        }
                    {/* {withFlag && <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text color='BLACK' style={{ marginTop: 2, paddingHorizontal: getWidth(10) }} fontFamily={"BOLDLATO"}>{"+966"}</Text>
                        <Image resizeMode='contain' source={images.owned}   />

                    </View>} */}
                    {/* {password && <Button
                        onPress={() => setShowPassword(!showPassword)}
                        iconStyle={styles.passwordButton}
                        icon={showPassword ? "Bell" : "Calender"} />} */}
                </View>
            </ViewBox>

            {/* {error ? <View style={{ width: '100%', alignItems: "flex-start", paddingTop: getHeight(5) }}>
                <Text fontFamily='BOLDROBOTO' color="BLACK">{error}</Text>
            </View> : null} */}

        </View>
    )
}