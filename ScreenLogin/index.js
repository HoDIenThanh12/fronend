import {View, ScrollView} from 'react-native';
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
      <ScrollView>
        <View>
          <Header textMid="Log In"></Header>
        </View>

        <View style={styles.body}>
          <TextInput
            placeholder="Email"
            style={styles.styleTextInput}></TextInput>
          <TextInput
            placeholder="Password"
            textRight="Show"
            style={styles.styleTextInput}></TextInput>
        </View>

        <Button title="Sing up" style={styles.btnLogin}></Button>
        <Text
          style={{
            color: 'green',
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 10,
            alignSelf: 'center',
          }}>
          Forgot your password?
        </Text>
      </ScrollView>
    </View>
  );
}
