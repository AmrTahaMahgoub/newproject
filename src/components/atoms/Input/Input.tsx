import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleProp,
  TextStyle,
  KeyboardTypeOptions,
  ViewStyle,
} from 'react-native';
import {Button, Image, Line, ViewBox} from '../';
import {Colors} from '../../../styles';
import {getHeight, getWidth, scale} from '../../../styles/dimensions';
import {images} from '../../../assets/imgs';
import styles from './styles';
import Text from '../Text/Text';
import Svgs, {IconsName} from '../../../assets/svgs';
// export type IconsName =
//   "ArrowBack" |
//   "AreaIcon"|
//   "ArrowForward"

type InputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  inputStyle?: StyleProp<TextStyle> | undefined;
  multiline?: boolean;
  password?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
  maxLength?: number;
  style?: StyleProp<ViewStyle> | undefined;
  styleInputContainer?: StyleProp<ViewStyle> | undefined;
  styleContainer?: StyleProp<ViewStyle> | undefined;
  icon?: IconsName;
  error?: string;
  withFlag?: boolean;
  editable?: boolean;
  withBackIconColor?: boolean;
};
export const Input = ({
  styleInputContainer,
  styleContainer,
  label,
  placeholder,
  value,
  onChangeText,
  inputStyle,
  multiline,
  password,
  keyboardType,
  maxLength,
  style,
  icon,
  error,
  withFlag,
  editable,
  withBackIconColor,
}: InputProps) => {
  let [showPassword, setShowPassword] = useState(password);

  return (
    <View>
      <View
        // border
        // shadow
        style={[
          styles.container,
          styleContainer,
          {opacity: editable === false ? 0.7 : 1},
        ]}>
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

        <View style={{flexDirection:"row"}}
        // style={[
        //     // styles.inputContainer,
        //     //  styleInputContainer
        //      ]}
             
             >
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
            style={[styles.inputStyle,styleInputContainer]}
          />
          {
            icon && (
              <Button>
                <Svgs name={icon} color={Colors.GRAY_00000029}></Svgs>
              </Button>
            )
            //   <Button
            //     onPress={() => setShowPassword(!showPassword)}
            //     style={{}}
            //     iconStyle={styles.icon}
            //     icon={icon} />
          }
          {withBackIconColor && (
            <View
              style={{
                backgroundColor: Colors.GREEN_009D97,
                height: getHeight(40),
                width: getWidth(44),
                justifyContent: 'center',
                // alignContent:"center",
                alignItems: 'center',
                borderTopRightRadius:scale(9),
                borderBottomRightRadius:scale(9)
              }}>
              <Svgs name={'WhiteSearch'}></Svgs>
            </View>
          )}
          {/* {withFlag && <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text color='BLACK' style={{ marginTop: 2, paddingHorizontal: getWidth(10) }} fontFamily={"BOLDLATO"}>{"+966"}</Text>
                        <Image resizeMode='contain' source={images.owned}   />

                    </View>} */}
          {/* {password && <Button
                        onPress={() => setShowPassword(!showPassword)}
                        iconStyle={styles.passwordButton}
                        icon={showPassword ? "Bell" : "Calender"} />} */}
        </View>
      </View>

      {/* {error ? <View style={{ width: '100%', alignItems: "flex-start", paddingTop: getHeight(5) }}>
                <Text fontFamily='BOLDROBOTO' color="BLACK">{error}</Text>
            </View> : null} */}
    </View>
  );
};
