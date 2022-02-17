import {View} from 'react-native';
import React from 'react';
import {Text, Icon} from 'react-native-elements';
import styles from './style';
import Image from '../components/Image/index';
export default function Header(props) {
  const {
    textLeft,
    styleTextLeft,
    iconLeft = null,
    textMid,
    styleTextMid,
    textRight,
    styleTextRight,
    style,
  } = props;
  return (
    <View style={[styles.container, style]}>
      {
      iconLeft ? (
        <Text style={[styles.textLeft, styleTextLeft]}>{textLeft}</Text>
      ) : (
        <Text style={[styles.textLeft, styleTextLeft]}>{textLeft}</Text>
      )}
      <Text style={[styles.textMid, styleTextMid]}>{textMid}</Text>
      <Text style={[styles.textRight, styleTextRight]}>{textRight}</Text>
    </View>
  );
}
