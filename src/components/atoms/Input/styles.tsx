import {StyleSheet} from 'react-native';

import {Colors, Typography} from '../../../styles';
import {getHeight, getWidth, scale} from '../../../styles/dimensions';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    //     width:280,
   // backgroundColor: 'yellow',
    marginTop: getHeight(10),
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    //     paddingHorizontal: 0,
   // borderRadius: scale(16),
  },
  inputStyle: {
    fontSize: Typography.FS12,
     fontFamily: Typography.MEDIUMROBOTO,
    //    height: getHeight(200),
    //     width: "100%",
    //     flex: 9,
    //     textAlign: "right",
    //    // paddingHorizontal: getWidth(16),
   // backgroundColor:"gray",
    //height: 40,
    //borderColor: 'gray',
    // borderWidth: 1,
    //paddingLeft: 10,
   // width: '100%',
    //flex:1
  },
  inputError: {
    color: Colors.GREEN_009D97,
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
    height: getHeight(14),
  },
  inputContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'gray',
    //width: '100%',
    // paddingHorizontal:getWidth(18),
    //height:getHeight(64),
    // backgroundColor:"red",
  },
  icon: {
    // width: getWidth(25.63),
    // height: getHeight(15.38)
  },
});
export default styles;
