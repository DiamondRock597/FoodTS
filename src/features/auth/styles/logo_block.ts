import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

const {width, height}: ScaledSize = Dimensions.get('window');

const ratioHeightLogo = 2.5;
const stickWidth = 134;

export const cardRadius = 35;
export const endToScroll = width - cardRadius - stickWidth;
export const startPositionHover = 0;
export const finishPositionHover = width;

export const styles = StyleSheet.create({
  logoBlock: {
    height: height / ratioHeightLogo,
    borderBottomEndRadius: cardRadius,
    borderBottomStartRadius: cardRadius,
    backgroundColor: 'white',
    elevation: 5,
    justifyContent: 'flex-end',
  },
  hover: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    backgroundColor: 'red',
    width: stickWidth,
    elevation: 1,
  },
  img: {
    width: 150,
    height: 162,
    resizeMode: 'stretch',
  },
  menuBlock: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  imageBlock: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 30,
  },
});
