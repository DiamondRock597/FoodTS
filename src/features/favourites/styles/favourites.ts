import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

const {width, height}: ScaledSize = Dimensions.get('window');

const half = 2;
const ratioForCircle = 0.3;
const ratioWidthDishesItem = 0.4;
const ratioHeightDishesItem = 0.25;
const halfCircle = (width * ratioForCircle) / half;
const widthCircle = width * ratioForCircle;
const distanceToCenterForDishesCirle = (width * ratioWidthDishesItem) / half - halfCircle;

export const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    lineHeight: 21,
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
  },
  contentContainer: {
    paddingTop: 10,
    flex: 1,
    paddingHorizontal: 25,
    paddingBottom: 150,
    backgroundColor: '#F9F9F9',
  },
  dishesItem: {
    height: height * ratioHeightDishesItem,
    width: width * ratioWidthDishesItem,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    elevation: 3,
    marginTop: widthCircle,
  },
  dishesTitle: {
    paddingVertical: 15,
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
    textAlign: 'center',
    fontSize: 18,
    opacity: 0.9,
    lineHeight: 22,
    width: widthCircle,
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
    width: widthCircle,
    height: widthCircle,
    borderRadius: halfCircle,
    left: distanceToCenterForDishesCirle,
    top: -halfCircle,
  },
  image: {
    width: widthCircle,
    height: widthCircle,
  },
  columnFlatList: {
    justifyContent: 'space-between',
  },
});
