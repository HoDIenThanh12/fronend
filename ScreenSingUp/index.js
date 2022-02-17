import {View} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import Header from '../Header/index';
import TextInput from '../components/TextInput/index';
import {CheckBox, Text} from 'react-native-elements';
import Button from '../components/Button/index';
export default function index() {
  const [checked, setChecked] = useState(false);
  const [isShowPass, setIsShowPass] = useState(false);
  return (
    <View style={styles.container}>
      <View>
        <Header
          iconLeft="https://cdn-icons.flaticon.com/png/512/2961/premium/2961937.png?token=exp=1645087678~hmac=4505b5bcd37b34f06f94c5d93d33ae48"
          textMid="Sing up"
          textRight="Login"></Header>
      </View>

      <View style={styles.body}>
        <TextInput placeholder="Name" style={styles.styleTextInput}></TextInput>
        <TextInput
          placeholder="Email"
          style={styles.styleTextInput}></TextInput>
        <TextInput
          placeholder="Password"
          password={!isShowPass}
          textRight="Show"
          rightAction={() => setIsShowPass(!isShowPass)}
          style={styles.styleTextInput}></TextInput>
      </View>
      <View style={styles.check}>
        <CheckBox
          containerStyle={{
            borderWidth: 0,
            backgroundColor: 'transparent',
          }}
          textStyle={{fontWeight: 'normal'}}
          center
          title="I would like to receive your newsletter and other promotional information."
          checked={checked}
          onPress={() => setChecked(!checked)}
        />
      </View>
      <Button title="Sing up"></Button>
      <Text
        style={{
          color: 'green',
          fontSize: 16,
          fontWeight: 'bold',
          marginTop: 10,
        }}>
        Forgot your password?
      </Text>
    </View>
  );
}
