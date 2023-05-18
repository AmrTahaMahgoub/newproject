import {
    StyleSheet
} from 'react-native';
import {
    Colors,
    Spacing
} from '../../../styles';
import {
    getHeight,
    getWidth
} from '../../../styles/dimensions';
const styles = StyleSheet.create({
    progressText: {
        width: "100%",
        textAlign: "right"
    },
    vertical: {
        height: "100%",
        width: 1,
        backgroundColor: Colors.GRAY_F9F9F9
    },
    progressBackground: {
        height: getHeight(8),
        width: getWidth(200),
        backgroundColor:"gray",
        borderRadius: getHeight(4),
        overflow: "hidden",
    },
    progress: {
        height: "100%",
        backgroundColor: Colors.PRIMARY,
        borderRadius: getHeight(4)
    },
    buttomText: {
        paddingVertical: Spacing.S4
    }
});
export default styles;
