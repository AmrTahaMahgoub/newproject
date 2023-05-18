
import React, {
    FC,
    useEffect,
    useState
} from 'react';
import {
    View,
    ViewProps
} from 'react-native';

import {
    Spacing
} from '../../../styles';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from 'react-native-reanimated';
import styles from './styles';
import { Button } from '../Button/Button';
import Text from '../Text/Text';


const Accordion2: FC<ViewProps & {
    toggle?: boolean,
    title: string,
    isOpend?: boolean,
    setIndex: () => void
}> = ({
    toggle,
    setIndex,
    isOpend,
    children,
    title, ...props
}) => {

        let [height, setHeight] = useState(0)
        const contentHeight = useSharedValue(0)
        let [_isOpend, setOpen] = useState(isOpend)

        const animatedHeight = useAnimatedStyle(() => {
            return { height: contentHeight.value }
        })

        useEffect(() => {
            contentHeight.value = isOpend ? withTiming(height, { easing: Easing.elastic() }) : withTiming(0)
        }, [height])

        useEffect(() => {
            setOpen(isOpend)
            if (toggle) contentHeight.value = isOpend ? withTiming(height, { easing: Easing.elastic() }) : withTiming(0)
        }, [isOpend])

        const onSwitch = () => {
            if (toggle) setIndex()
            setOpen(!_isOpend)
            if (_isOpend)
                contentHeight.value = withTiming(0)
            else contentHeight.value = withTiming(height, { easing: Easing.elastic() })
        }


        const animatedButton = useAnimatedStyle(() => {
            return {
                opacity: withTiming(_isOpend ? 1 : 0),
                position: "absolute"
            }
        })
        const animatedButton2 = useAnimatedStyle(() => {
            return {
                opacity: withTiming(_isOpend ? 0 : 1),
                position: "absolute"
            }
        })

        return (
            <View

                style={[styles.container2, props.style]}

            >


                <View
                    style={styles.headerContainer} >
                    <Text
                        style={styles.title}
                        fontFamily='MEDIUM'
                        color='red'
                        fontSize={20}
                    >{title}</Text>

                    <View
                        style={styles.toggleButtonContainer}>
                        <Button
                            containerStyle={animatedButton}
                            onPress={onSwitch}
                            icon={'AreaIcon'}
                            style={{ paddingRight: Spacing.S20 }}
                            iconStyle={styles.toggleIcon} />
                        <Button
                            containerStyle={animatedButton2}
                            onPress={onSwitch}
                            icon={'AreaIcon'}
                            style={styles.toggleButton}
                            iconStyle={styles.toggleIcon} />
                    </View>

                </View>


                <View
                    style={[height !== 0 ? animatedHeight : {}]}>
                    <View onLayout={(event) => {
                        if (height === 0) {
                            setHeight(event.nativeEvent.layout.height)
                        }
                    }}
                    >
                        {children}
                    </View>
                </View>
            </View>

        )
    }
Accordion2.defaultProps = {
    setIndex: () => { }
}

export { Accordion2 }
