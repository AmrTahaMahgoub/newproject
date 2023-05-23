import { StyleSheet } from "react-native";
import { getHeight, getWidth, scale } from "../../../styles/dimensions";

const styles = StyleSheet.create({

    image: {
        width: getWidth(343),
        height: getHeight(156),
        borderRadius: scale(20),
        resizeMode: 'cover',
        alignSelf: "center",
        
    },
    imagewithdate: {
        width: getWidth(343),
        height: getHeight(196),
        borderRadius: scale(20),
        resizeMode: 'cover',
        alignSelf: "center",
        
    },

});
export default styles;