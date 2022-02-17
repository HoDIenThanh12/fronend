import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from 'react-native-elements';
import {height, width} from '../stylesAll';
import {Colors} from '../../constances';
export default function TextInputs(prop) {
  const {
    placeholder,
    onChangeText,
    style,
    textRight,
    rightAction,
    leftIcon,
    styleText,
    styleTextRight,
    password = false,
  } = prop;
  console.log(placeholder);
  return (
    <View style={[styles.container, style]}>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={password}
        style={[styles.textInput]}></TextInput>

      {textRight ? (
        <TouchableOpacity
          style={[styles.styleRightAction, styleTextRight]}
          onPress={rightAction}>
          <Text style={[styles.styleTextRight, styleTextRight]}>
            {textRight}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  leftIcon: {
    marginRight: 10,
  },
  //style container
  container: {
    flexDirection: 'row',
    width: width(90),
    borderRadius: 10,
    backgroundColor: Colors.Gray1,
    borderColor: Colors.Gray2,
    borderWidth: 1,
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  //style textInput
  textInput: {
    fontSize: 14,
    color: '#000',
    borderBottomWidth: 0,
    padding: 0,
    maxWidth: width(80),
    flex: 1,
  },
  //style textRight
  styleRightAction: {},
  styleTextRight: {
    color: 'green',
    fontSize: 14,
  },
});
