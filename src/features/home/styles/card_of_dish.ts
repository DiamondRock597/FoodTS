import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

const {width, height}: ScaledSize = Dimensions.get('window');

const half = 0.5;
const ratioForCircle = 0.34;
const ratioPaddingBlock = 0.11;
const ratioWidthTitle = 0.4;
const ratioSizeItem = 0.3;
const ratioWidthDishesItem = 0.52;
const sizeCircle = width * ratioForCircle;
const borderRadiusCircle = sizeCircle * half;
const widthDishCard = width * ratioWidthDishesItem;

export const styles = StyleSheet.create({
  dishesItem: {
    marginBottom: 10,
    marginTop: height * ratioPaddingBlock,
    marginHorizontal: 9,
    height: height * ratioSizeItem,
    width: widthDishCard,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    paddingBottom: 15,
    elevation: 3,
  },
  dishesTitle: {
    paddingVertical: 10,
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
    textAlign: 'center',
    fontSize: 18,
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
