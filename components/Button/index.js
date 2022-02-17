import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {height, width} from '../stylesAll';

const Button = props => {
  const {
    title,
    isDisable = false,
    styleText,
    styleBtn,
    icon,
    styleIcon,
    style,
    onPress,
  } = props;
  console.log(onPress);
  return (
    <TouchableOpacity
      disabled={isDisable}
      style={[styles.container, style]}
      onPress={onPress}>
      <View style={[styles.containerText, styleBtn]}>
        <Text style={[styles.textButton, styleText]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5DB075',
    width: width(90),
    paddingVertical: 8,
  },
  containerText: {
    display: 'flex',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderColor: 'orange',
    height: height(6),
    flexDirection: 'row',
  },
  styleImage: {
    height: height(5),
    width: height(5),
  },
  textButton: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default Button;
