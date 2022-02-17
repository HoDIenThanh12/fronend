import {StyleSheet} from 'react-native';
import {height, width} from '../components/stylesAll';
import {Colors} from '../constances';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleHeader: {
    backgroundColor: 'green',
    width: width(100),
  },
  styleTextAllHeader: {
    color: '#fff',
  },
  avatar: {
    height: height(20),
    backgroundColor: 'green',
    width: width(100), 
    alignItems: 'center',
  },
  body: {
    marginTop: height(5),
  },
  editContext: {
    width: width(90),
    height: height(40),
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    alignSelf: 'center',
  },
  containerOption: {
    flexDirection: 'row',
    width: width(80),
    alignSelf: 'center',
    backgroundColor: '#F6F6F6',
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 50,
    padding: 3,
  },
  btnAll: {
    width: width(40),
  },
  btnSelect: {
    // width: width(80),
    backgroundColor: 'white',
  },
  btnUnSelect: {
    // width: width(80),
    backgroundColor: '#F6F6F6',
  },
  btnTextSelect: {
    // width: width(80),
    color: Colors.Green,
  },
  btnTextUnSelect: {
    // width: width(80),
    color: '#BDBDBD',
  },
  containerPage: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#FAFAFA',
    borderTopWidth: 1,
    borderColor: '#BDC5CD',
    marginTop: 5,
  },
  numberPage: {
    color: 'green',
    height: height(6),
    width: height(6),
    backgroundColor: '#E8E8E8',
    borderRadius: height(3),
  },
});
export default styles;
