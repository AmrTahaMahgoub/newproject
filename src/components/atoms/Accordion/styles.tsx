import { StyleSheet } from 'react-native';

import { Colors, Typography } from '../../../styles';
import { getHeight, getWidth, scale } from '../../../styles/dimensions';
const styles = StyleSheet.create({
    container: {
        minHeight: getHeight(44),
        width: getWidth(343),
        alignItems: "center",
        borderWidth: 1,
        borderRadius: scale(15),
        backgroundColor: Colors.WHITE,
        borderColor: Colors.BLACK,
        marginTop: getHeight(10),
    },
    button: {
        minHeight: getHeight(44),
        flexDirection: "row",
        justifyContent: "space-between",
        width: getWidth(343),
        alignItems: "center",
        borderRadius: scale(15),
        backgroundColor: Colors.WHITE,
        paddingHorizontal: getWidth(16)
    },
    value: {
        textAlign: "left",
        padding: getWidth(16),
        paddingTop: getHeight(10),
       // lineHeight: Typography.BOLD
    }

});
export default styles;
