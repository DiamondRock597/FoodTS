import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

export const HEADER_MAX_HEIGHT = 130;
export const HEADER_MIN_HEIGHT = 40;
export const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const {width, height}: ScaledSize = Dimensions.get('window');

const half = 2;
const ratioForCircle = 0.3;
const ratioWidthDishesItem = 0.4;
const ratioHeightDishesItem = 0.25;
const backButtonPadding = 34;
const halfCircle = (width * ratioForCircle) / half;
const widthCircle = width * ratioForCircle;
const paddingListEmpty = 460;

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
  },
  dishesItem: {
    height: height * ratioHeightDishesItem,
    width: width * ratioWidthDishesItem,
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
    paddingBottom: 150,
    backgroundColor: '#F9F9F9',
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
    left: (width * ratioWidthDishesItem) / half - halfCircle,
    top: -halfCircle,
  },
  image: {
    width: widthCircle,
    height: widthCircle,
  },
  paddingList: {
    paddingVertical: HEADER_MAX_HEIGHT,
    flex: 2,
  },
  listEmptyComponent: {
    height: height - paddingListEmpty,
    backgroundColor: 'transparent',
  },
});
