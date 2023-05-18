import {StyleSheet} from 'react-native';

import {Colors, Typography} from '../../../styles';
import { getHeight } from '../../../styles/dimensions';
const styles = StyleSheet.create({
  bold12: {
    fontFamily: Typography.BOLD,
    fontSize: Typography.FS11,
    color: "red",
    marginTop: getHeight(5),
  },
  bold11: {
    fontFamily: Typography.BOLD,
    fontSize: Typography.FS13,
    color: "yellow",
  },
  regular14: {
    fontFamily: Typography.MEDIUM,
    fontSize: Typography.FS13,
    color: "green",
    marginTop: getHeight(5),
  },

});

export default styles;
