import { Dimensions, Text, Platform, PixelRatio, StatusBar } from 'react-native' 
const CORE_RATIO = 667 / 375
export const MYWIDTH = Dimensions.get('window').width
export const MYHEIGHT = Dimensions.get('window').height 

export const width = num => PixelRatio.roundToNearestPixel(MYWIDTH * (num / 100))
export const height = num => PixelRatio.roundToNearestPixel(MYHEIGHT * (num / 100))