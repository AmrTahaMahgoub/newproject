// import { StyleSheet } from 'react-native';
// import { Colors } from '../../../styles';
// const styles = StyleSheet.create({
//     horizontal: {
//         width: "100%",
//         height: 1,
//         backgroundColor: Colors.BLACK,
//     },
//     vertical: {
//         height: "100%",
//         width: 1,
//         backgroundColor: Colors.BLACK,

//     }
// });
// export default styles;
import {
    StyleSheet,
    ViewStyle
} from 'react-native';
import {
    Colors,
    Spacing
} from '../../../styles';
const styles = StyleSheet.create<{
    horizontal: ViewStyle,
    vertical?: ViewStyle
}>({
    horizontal: {
        width: "100%", height: 1,
        backgroundColor:Colors.GRAY_00000029,
        marginTop: Spacing.S8
    },
    vertical: {
        height: "100%",
        width: 1,
        backgroundColor: "green"
    }
});
export default styles;

