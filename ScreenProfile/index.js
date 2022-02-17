import {View, ScrollView, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import Header from '../Header/index';
import TextInput from '../components/TextInput/index';
import {CheckBox, Text} from 'react-native-elements';
import Button from '../components/Button/index';
import Image from '../components/Image/index';
import Item from './items';
export default function index() {
  const [checked, setChecked] = useState(false);
  const [option, setOption] = useState(0);

  const list = [];
  const radomItem = () => {
    for (let i = 0; i < 30; i++) {
      const item = {
        id: i,
        title: 'Header',
        description:
          "He'll want to use your yacht, and I don't want this thing smelling like fish.",
        http: `https://source.unsplash.com/random?sig=${i}`,
        time: '8m ago',
      };
      list.push(item);
    }
  };
  radomItem();

  console.log(list);
  const RenderNumberPage = () => {
    return <View style={styles.numberPage}></View>;
  };
  const l = 5;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Header
            textLeft="Settings"
            textMid="Profile"
            textRight="Log Out"
            styleTextLeft={styles.styleTextAllHeader}
            styleTextMid={styles.styleTextAllHeader}
            styleTextRight={styles.styleTextAllHeader}
            style={styles.styleHeader}></Header>
        </View>

        <View style={styles.avatar}>
          <Image http="https://source.unsplash.com/random?sig=1"></Image>
        </View>
        <View style={styles.body}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              marginTop: 10,
              alignSelf: 'center',
            }}>
            Victoria Robertson
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginTop: 10,
              alignSelf: 'center',
            }}>
            A mantra goes here
          </Text>
          <View style={styles.containerOption}>
            <Button
              onPress={() => setOption(0)}
              title="Sing up"
              styleText={[
                styles[`btnText${option == 0 ? 'Select' : 'UnSelect'}`],
              ]}
              style={[
                styles[`btn${option == 0 ? 'Select' : 'UnSelect'}`],

                styles.btnAll,
              ]}></Button>
            <Button
              onPress={() => setOption(1)}
              title="Sing up"
              styleText={[
                styles[`btnText${option == 1 ? 'Select' : 'UnSelect'}`],
              ]}
              style={[
                styles[`btn${option == 1 ? 'Select' : 'UnSelect'}`],
                styles.btnAll,
              ]}></Button>
          </View>
          <View>
            {option == 1 ? (
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={list}
                renderItem={({item}) => <Item item={item}></Item>}></FlatList>
            ) : (
              <View>
                <View style={styles.editContext}></View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginLeft: 20,
                  }}>
                  A mantra goes here
                </Text>
              </View>
            )}
          </View>

          <View style={styles.containerPage}>
            <View
              style={[styles.numberPage, {backgroundColor: 'green'}]}></View>
            <View style={styles.numberPage}></View>
            <View style={styles.numberPage}></View>
            <View style={styles.numberPage}></View>
            <View style={styles.numberPage}></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
