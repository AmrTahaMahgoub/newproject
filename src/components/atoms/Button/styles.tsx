import { StyleSheet } from 'react-native';

import { Colors } from '../../../styles';
import { getHeight, getWidth, scale } from '../../../styles/dimensions';
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"

    },
    StandardButtonContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: getWidth(343),
        height: getHeight(38),
        backgroundColor: Colors.DARK_GRAY,
        borderRadius: getHeight(38 / 2),
        flexDirection: "row"
    },

    customButtonContainer: {
        height: getHeight(44),
        flexDirection: "row",
        justifyContent: "space-between",
        width: getWidth(343),
        alignItems: "center",
        borderWidth: 1,
        borderRadius: scale(15),
        backgroundColor: Colors.WHITE,
        borderColor: Colors.BLACK,
        paddingHorizontal: getWidth(16),
        marginTop: getHeight(10),
    },
    value: { paddingHorizontal: getWidth(10) }

});
export default styles;
