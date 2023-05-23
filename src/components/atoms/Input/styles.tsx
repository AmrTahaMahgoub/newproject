import { StyleSheet } from 'react-native';

import { Colors, Typography } from '../../../styles';
import { getHeight, getWidth } from '../../../styles/dimensions';
const styles = StyleSheet.create({
    container: {
        backgroundColor:Colors.WHITE,
        marginTop: getHeight(10),
        justifyContent: "space-between",
       // alignItems: "flex-start",
        paddingHorizontal: 0
    },
    inputStyle: {
        //  fontSize: Typography.BOLDLATO,
        //  fontFamily: Typography.FS10,
    //    height: getHeight(200),
    //     width: "100%",
    //     flex: 9,
    //     textAlign: "right",
    //    // paddingHorizontal: getWidth(16),
    //     backgroundColor:"black"
    //height: 40,
    //borderColor: 'gray',
   // borderWidth: 1,
    //paddingLeft: 10,
    width: "90%",
    flex:1
    },
    inputError: {
        color: Colors.GREEN_009D97
    },
    // labelView: {
    //     height: getHeight(41.5),
    //     justifyContent: "space-between",
    //     paddingHorizontal: getWidth(16),
    //     flexDirection: "row",
    //     alignItems: "center", width: "100%"
    // },
    passwordButton: {
        width: getWidth(16.4),
        height: getHeight(14)
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent:"center",
        alignItems: "center",
        paddingHorizontal:getWidth(18),
        height:getHeight(64),
       // backgroundColor:"red",
        width:getWidth(343)
    },
    icon: {
        // width: getWidth(25.63),
        // height: getHeight(15.38)
    }
});
export default styles;
