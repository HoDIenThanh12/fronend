import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';
export default function index(props) {
  const {http = null, url = null, style} = props;
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        {http ? (
          <Image source={{uri: http}} containerStyle={[styles.item, style]} />
        ) : (
          <Image source={{uri: url}} containerStyle={styles.item} />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'white',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    shadowColor: 'rgba(101, 101, 101, 0.15)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 2,
    borderColor: 'rgba(101, 101, 101, 0.15)',
  },
  item: {
    width: 150,
    height: 150,
    borderRadius: 80,
    resizeMode: 'cover',
  },
});
