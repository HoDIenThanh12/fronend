import {View} from 'react-native';
import React from 'react';
import {Text, Icon} from 'react-native-elements';
import styles from './style';
import {Image} from 'react-native-elements';
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
      {iconLeft ? (
        <Image source={{uri: iconLeft}} containerStyle={styles.iconStyle} />
      ) : (
        <Text style={[styles.textLeft, styleTextLeft]}>{textLeft}</Text>
      )}
      <Text style={[styles.textMid, styleTextMid]}>{textMid}</Text>
      <Text style={[styles.textRight, styleTextRight]}>{textRight}</Text>
    </View>
  );
}
