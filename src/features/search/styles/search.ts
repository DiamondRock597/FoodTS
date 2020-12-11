import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

const {width, height}: ScaledSize = Dimensions.get('window');
const half = 2;
const ratioForCircle = 0.3;
const ratioWidthDishesItem = 0.4;
const backButtonPadding = 34;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
    flex: 1,
  },
  header: {
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    paddingHorizontal: 34,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  input: {
    paddingLeft: 30,
    width: width - backButtonPadding,
    fontSize: 17,
    lineHeight: 20,
    color: '#000000',
  },
  columnFlatList: {
    justifyContent: 'space-between',
    paddingVertical: (width * ratioForCircle) / half,
  },
  dishesItem: {
    height: height * 0.25,
    width: width * 0.4,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
  },
  contentContainer: {
    paddingTop: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 25,
    paddingBottom: 130,
    backgroundColor: '#F9F9F9',
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
