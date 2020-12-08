import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

const {width, height}: ScaledSize = Dimensions.get('window');
const half = 2;
const ratioForCircle = 0.3;
const ratioWidthDishesItem = 0.4;
const backButtonPadding = 34;

export const styles = StyleSheet.create({
  header: {
    paddingTop: 60,
    paddingHorizontal: 34,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 20,
  },

  input: {
    paddingLeft: 30,
    width: width - backButtonPadding,
    fontSize: 17,
    lineHeight: 20,
    color: '#000000',
  },

  dishesItem: {
    marginHorizontal: 10,
    height: height * 0.25,
    width: width * 0.4,
    marginVertical: (width * ratioForCircle) / half,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
  },
  dishesTitle: {
    paddingVertical: 15,
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
    textAlign: 'center',
    fontSize: 18,
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
    zIndex: 1,
    width: width * ratioForCircle,
    height: height * ratioForCircle,
    borderRadius: (width * ratioForCircle) / half,
    left: (width * ratioWidthDishesItem) / half - (width * ratioForCircle) / half,
    top: -(width * ratioForCircle) / half,
  },
  image: {
    width: width * ratioForCircle,
    height: width * ratioForCircle,
  },
});
