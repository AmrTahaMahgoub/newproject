import { StyleSheet } from 'react-native';

import { Colors, Typography } from '../../../styles';
import { getHeight, getWidth } from '../../../styles/dimensions';
const styles = StyleSheet.create({
    container: {
        marginTop: getHeight(10),
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingHorizontal: 0
    },
    inputStyle: {
        fontSize: Typography.BOLD,
        fontFamily: Typography.FS10,
        height: getHeight(83 / 2),
        width: "100%",
        flex: 9,
        textAlign: "right",
        paddingHorizontal: getWidth(16)
    },
    inputError: {
        color: Colors.RED
    },
    labelView: {
        height: getHeight(41.5),
        justifyContent: "space-between",
        paddingHorizontal: getWidth(16),
        flexDirection: "row",
        alignItems: "center", width: "100%"
    },
    passwordButton: {
        width: getWidth(16.4),
        height: getHeight(14)
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight:getWidth(15),
    },
    icon: {
        width: getWidth(25.63),
        height: getHeight(15.38)
    }
});
export default styles;
