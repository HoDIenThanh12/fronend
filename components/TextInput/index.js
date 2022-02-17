import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import {Input, Icon} from 'react-native-elements';
export default function TextInputs(prop) {
  const {
    playHolder,
    onChangeText,
    style,
    textRight,
    rightAction,
    leftIcon,
    styleText,
    styleTextRight,
    password = false,
  } = prop;
  return (
    <View style={[styles.container, style]}>
      <Input
        onChangeText={onChangeText} autoCompleteType={undefined}      >
      </Input>
      <Input
       autoCompleteType={undefined}  
        errorStyle={{color: 'red'}}
        errorMessage="ENTER A VALID ERROR HERE"
        onChangeText={onChangeText}
        placeholder={playHolder}
        secureTextEntry={password}
        inputStyle={[styles.textInput, styleText]}></Input>
      {textRight && (
        <TouchableOpacity
          style={[styles.styleRightAction, styleTextRight]}
          onPress={rightAction}>
          <Text style={[styles.styleTextRight, styleTextRight]}>
            {textRight}
          </Text>
        </TouchableOpacity>
      )}
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
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  //style textInput
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  //style textRight
  styleRightAction: {
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'center',
  },
  styleTextRight: {
    color: '#000',
    fontSize: 16,
  },
});
