import { StyleSheet } from "react-native";
import { getHeight, getWidth, scale } from "../../../styles/dimensions";

const styles = StyleSheet.create({

    image: {
        width: getWidth(343),
        height: getHeight(156),
        borderRadius: scale(20),
        resizeMode: 'cover',
        alignSelf:"center"
    },
    dotIndicator: {
        position: 'absolute',
        top: getHeight(252),

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
    },
    dot: {
        width: getWidth(7),
        height: getHeight(8),
        borderRadius: scale(8),
        marginHorizontal: getWidth(5),
        backgroundColor: 'green',
    },
    greenDot: {
        backgroundColor: 'green',
    },
    text: {
       // backgroundColor: "red",
        position: 'absolute',
        top: getHeight(200
        ),
        alignSelf: "center"
    }
});
export default styles;