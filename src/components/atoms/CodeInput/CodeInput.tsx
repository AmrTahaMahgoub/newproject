import React, { useState } from 'react'
import { Platform, StyleSheet, View } from 'react-native';


import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
import { ViewBox } from '../ViewBox';
import Text from '../Text/Text';

import { getHeight, getWidth } from '../../../styles/dimensions';
import Line from '../Line';
type CodeInputProps = {
    onChangeText?: (value: string) => void,
    value: string
}

export const CodeInput = ({ value, onChangeText }: CodeInputProps) => {
    return (
        <ViewBox
            style={{ width: getWidth(343), height: getHeight(120), paddingHorizontal: 0, justifyContent: "flex-start", marginTop: getHeight(20) }}>
            <View style={{ width: "100%", height: getHeight(44), alignItems: "flex-start", justifyContent: "center", paddingHorizontal: getWidth(16) }}>
                <Text>{'رقم التأكيد'}</Text>
            </View>
            <Line />
            <View style={{ flexDirection: "row", height: getHeight(70), alignItems: "center", justifyContent: "space-evenly", width: "100%" }}>
                {Array.from(Array(4).keys()).map((item, index) => {
                    return <ViewBox key={index.toString()} style={{ width: getWidth(60), height: getHeight(44), borderRadius: getWidth(10) }} border >
                        <Text style={{ marginTop: 6 }} fontFamily='BOLDLATO'>{value[index]}</Text>
                    </ViewBox>
                })}
            </View>
            <TextInput
                autoFocus
                onChangeText={onChangeText}
                maxLength={4}
                disableFullscreenUI
                caretHidden={true}
                spellCheck={false}
                autoCorrect={false}
                blurOnSubmit={false}
                clearButtonMode="never"
                autoCapitalize="characters"
                underlineColorAndroid="transparent"
                value={value}
                style={{
                    ...StyleSheet.absoluteFillObject,
                    opacity: 0,
                    fontSize: .5,
                    ...Platform.select({
                        web: {
                            width: '100%',
                            fontSize: 1,
                        },
                    }),
                }}
            />
        </ViewBox>
    );
};



