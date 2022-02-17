import {StyleSheet} from 'react-native';
import {height, width} from '../components/stylesAll';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  body: {
    marginTop: 20,
    justifyContent: 'space-around',
  },
  styleTextInput: {
    marginTop: 15,
  },
  check: {
    marginTop: 10,
    width: width(98),
  },
  btnLogin: {
    marginTop: 10,
  },
});
export default styles;
