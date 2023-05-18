import {StyleSheet} from 'react-native';
import { getHeight, getWidth ,scale} from '../../../styles/dimensions';


export default styles = StyleSheet.create({
  container: {
    width: getWidth(345),
    alignItems: 'center',
  },

  titleContainer: {
    width: '100%',
    marginTop: getHeight(15),
  },
  inputContainer: {
    width: '100%',
    height: getHeight(40),
    borderColor: config.colors.BORDER,
    borderWidth: 1,
    borderRadius: scale(5, 812),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: getWidth(10),
    marginTop: getHeight(15),
    flexDirection: 'row',
  },
  input: {color: config.colors.WHITE, flex: 9},

  passwordButton: {
    width: getWidth(30),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  iconStyle: {
    width: getWidth(20),
    height: getHeight(20),
  },
  entry: {
    backgroundColor: config.colors.WHITE,
    borderWidth: 0,
  },
  inputStyleEntry: {
    color: config.colors.DARK_GRAY,
  },
});
