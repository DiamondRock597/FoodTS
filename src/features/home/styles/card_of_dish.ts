import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

const {width, height}: ScaledSize = Dimensions.get('window');

const half = 2;
const ratioForCircle = 0.34;
const ratioWidthDishesItem = 0.53;

export const styles = StyleSheet.create({
  dishesBlock: {
    paddingTop: height * 0.11,
    paddingHorizontal: 9,
  },
  dishesItem: {
    height: height * 0.3,
    width: width * ratioWidthDishesItem,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
  },
  dishesTitle: {
    paddingVertical: 15,
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
    textAlign: 'center',
    fontSize: 22,
    opacity: 0.9,
    lineHeight: 22,
    width: width * 0.3,
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
    width: width * ratioForCircle,
    height: width * ratioForCircle,
    borderRadius: (width * ratioForCircle) / half,
    left: (width * ratioWidthDishesItem) / half - (width * ratioForCircle) / half,
    top: -(width * ratioForCircle) / half,
  },
  image: {
    width: width * ratioForCircle,
    height: width * ratioForCircle,
  },
});
