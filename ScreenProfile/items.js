import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text, Image} from 'react-native-elements';
import {height, width} from '../components/stylesAll';
export default function items(props) {
  const {item, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image source={{uri: item.http}} containerStyle={styles.avatar} />
        </View>
        <View style={styles.containerContext}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={styles.textTile}>{item.title}</Text>
            <Text style={styles.textTime}>{item.time}</Text>
          </View>

          <Text style={styles.textDescription}>{item.description}</Text>
          <View style={styles.line}></View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
//style
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: width(80),
    alignSelf: 'center',
    marginTop: 10,
  },
  containerImage: {},
  avatar: {
    height: height(8),
    width: height(8),
    backgroundColor: 'red',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  containerContext: {
    justifyContent: 'center',
    paddingLeft: 10,
  },
  textTile: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textDescription: {
    fontSize: 14,
    flexWrap: 'wrap',
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: '#E8E8E8',
    marginTop: 13,
  },
  textTime: {
    fontSize: 14,
  },
});
