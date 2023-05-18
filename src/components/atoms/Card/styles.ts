import {
    StyleSheet
} from "react-native";
import {
    Colors,
    Spacing
} from "../../../styles";
import { scale } from "../../../styles/dimensions";


const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "grey",
        borderRadius: scale(6),
        marginRight: Spacing.S8,
        justifyContent: "flex-start",
        paddingTop: 0,
        overflow: "hidden",
        flexDirection: "column",
        borderWidth: 1,
        borderColor: Colors.DARK_GRAY,
    }
})

export default styles