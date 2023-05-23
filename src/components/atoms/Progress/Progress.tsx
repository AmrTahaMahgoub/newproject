import React, {
    memo,
    FC
} from "react";
import {
    View,
    ViewProps
} from "react-native";
import { getHeight, getWidth } from "../../../styles/dimensions";
import Text from "../Text/Text";
import styles from "./styles";
export type LineProps = {
    value?: number,
    lessons?: number,
    completed_lessons?: number,
    width?: number,
    height?: number,
    message?: string
}

const Progress: FC<ViewProps & LineProps> = ({
    value = 0,
    completed_lessons = 0,
    lessons = 0,
    height = getHeight(8),
    width = getWidth(200),
    message
}) => {
    return (
        <View style={{ alignItems: "flex-end" }}>
            <Text
                
                fontFamily="BOLDLATO"
                fontSize="FS10"
                style={styles.progressText}
            >
                {`${value}%`}
            </Text>

            <View
                style={[styles.progressBackground, { width, height }]}>
                <View
                    style={[styles.progress, { width: value * width / 100 }]} />
            </View>
            {message && <Text
                fontFamily='BOLDLATO'
                color='CHARCOAL'
                fontSize="FS10"
                style={styles.buttomText} >
                {`You have completed ${completed_lessons} of ${lessons} lessons`}
            </Text>}
        </View>
    )
}

export default memo(Progress)