import {StyleSheet} from 'react-native';
import {height, width} from '../components/stylesAll';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    // width: width(100),
    width: width(93),
    alignContent: 'center',
    alignSelf: 'center',
    display: 'flex',
  },
  textRight: {
    fontSize: 16,
    color: 'green',
  },
  textLeft: {
    fontSize: 16,
    // color:'white',
  },
  textMid: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  iconStyle: {
    width: width(5),
    height: width(5),
  },
  containerIcon: {
    width: width(5),
    height: width(5),
  },
});
export default styles;
