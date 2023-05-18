import {
    StyleSheet
} from "react-native";
import {
    getHeight,
    getWidth,
     scale
} from "../../../styles/dimensions";


const styles = StyleSheet.create({
    textStyle: {
        paddingHorizontal: getWidth(6),
        paddingRight: 0
    },
    icon: {
        height: scale(16),
        width: scale(16)
    },
    button: {
        height: getHeight(20),
        width:getWidth(40),
        paddingLeft: getWidth(4)
        
    }
})

export default styles