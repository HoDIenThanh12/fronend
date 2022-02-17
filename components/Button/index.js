import { View, Text , TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'

export default function index(props) {
    const {text, style, styleText, onPress} = props
  return (
    <TouchableOpacity style={[styles.container,style]} onPress={onPress}>
        <Text style={[styles.text,styleText ]}>{text}</Text>
    </TouchableOpacity>
  )
}
//style container
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        flex: 1,
    },
    //style text
    text: {
        flex: 1,
        fontSize: 16,
        color: '#000',
    },
}