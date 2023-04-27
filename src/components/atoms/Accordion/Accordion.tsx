
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import SvgIcon from '../../../assets/svgs';
import { Colors } from '../../../styles';
import styles from './styles';

import ViewRow from '../ViewRow/ViewRow';
import Text from '../Text/Text';
import { Line } from '../Line';
import { scale } from '../../../styles/dimensions';

export interface helpItemTypes {
    id: number;
    question: string;
    question_en: string;
    question_ar: string;
    answer: string;
    answer_en: string;
    answer_ar: string;
  }

export const Accordion = ({ item, index }:
    { item: any, index: number }) => {
    const [isOpen, setOpen] = useState(false)
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setOpen(!isOpen)}
                activeOpacity={.9}
                style={styles.button}
            >
                <Text
                    type={"bold11"}
                    color={isOpen ? Colors.COLOR_FF409B : Colors.DARK_GRAY}
                    style={{ marginTop: 0 }}>questioon</Text>
                <ViewRow
                    style={{ alignItems: "center" }}>
                    <SvgIcon
                        rotate={isOpen ? "bottom" : "top"}
                        name="ArrowBack"
                        color='red'
                        width={scale(9)}
                        height={scale(20)}
                    />
                </ViewRow>
            </TouchableOpacity>
            {isOpen && <View style={{ width: "100%" }}>
                <Line />
                <Text type='bold12'
                    style={styles.value}>answer</Text>
            </View>}
        </View>
    )
}

