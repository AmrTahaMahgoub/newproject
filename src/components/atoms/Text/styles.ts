import {StyleSheet} from 'react-native';

import {Colors, Typography} from '../../../styles';
import { getHeight } from '../../../styles/dimensions';
const styles = StyleSheet.create({
  bold12: {
    fontFamily: Typography.BOLD,
    fontSize: Typography.FS11,
    color: Colors.DARK_GRAY,
    marginTop: getHeight(5),
  },
  bold11: {
    fontFamily: Typography.BOLD,
    fontSize: Typography.FS13,
    color: Colors.DARK_GRAY,
  },
  regular14: {
    fontFamily: Typography.MEDIUM,
    fontSize: Typography.FS13,
    color: Colors.DARK_GRAY,
    marginTop: getHeight(5),
  },

});

export default styles;
