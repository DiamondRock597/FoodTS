import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

const {width, height}: ScaledSize = Dimensions.get('window');

const half = 0.5;
const ratioForCircle = 0.34;
const ratioWidthDishesItem = 0.53;
const sizeCircle = width * ratioForCircle;
const borderRadiusCircle = sizeCircle * half;
const widthDishCard = width * ratioWidthDishesItem;
const ratioPaddingBlock = 0.11;
const ratioWidthTitle = 0.4;
const ratioSizeItem = 0.3;

export const styles = StyleSheet.create({
  dishesBlock: {
    paddingTop: height * ratioPaddingBlock,
    paddingHorizontal: 9,
  },
  dishesItem: {
    height: height * ratioSizeItem,
    width: widthDishCard,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    elevation: 3,
  },
  dishesTitle: {
    paddingVertical: 15,
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
    textAlign: 'center',
    fontSize: 22,
    opacity: 0.9,
    lineHeight: 22,
    width: width * ratioWidthTitle,
  },
  dishesCost: {
    color: '#FA4A0C',
    paddingVertical: 15,
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
    fontSize: 17,
    lineHeight: 20,
    textAlign: 'center',
  },
  dishesCircle: {
    position: 'absolute',
    backgroundColor: 'gray',
    zIndex: 1,
    width: sizeCircle,
    height: sizeCircle,
    borderRadius: borderRadiusCircle,
    left: widthDishCard * half - borderRadiusCircle,
    top: -borderRadiusCircle,
  },
  image: {
    width: sizeCircle,
    height: sizeCircle,
  },
});
