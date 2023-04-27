import { StyleSheet } from 'react-native';

import { Colors } from '../../../styles';
import { getWidth, scale } from '../../../styles/dimensions';
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: Colors.WHITE,
        borderRadius: scale(15),
        justifyContent: "center",
        paddingHorizontal:getWidth(16),
        width:getWidth(343),
        overflow:"hidden"
    },
    shadow: {
        shadowOpacity: 0.016,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        elevation: 10
    },
    border: {
        borderColor: Colors.BLACK,
        borderWidth: 1
    }
});


export default styles;
