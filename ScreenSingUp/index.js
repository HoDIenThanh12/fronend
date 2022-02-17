import {View} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import Header from '../Header/index';
import TextInput from '../components/TextInput/index';
import {CheckBox, Text} from 'react-native-elements';
import Button from '../components/Button/index';
export default function index() {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <View>
        <Header textLeft="textLeft" textMid="Sing up" textRight="Login"></Header>
      </View>

      <View style={styles.body}>
        <TextInput placeholder="Name" style={styles.styleTextInput}></TextInput>
        <TextInput
          placeholder="Email"
          style={styles.styleTextInput}></TextInput>
        <TextInput
          placeholder="Password"
          textRight="Show"
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
