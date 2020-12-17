import {StyleSheet, Dimensions, ScaledSize} from 'react-native';

const {height, width}: ScaledSize = Dimensions.get('window');

const PADDING_FOR_ITEM = 100;
const RATIO_HEIGHT_FOR_SWIPE_ITEM = 0.12;
const RATIO_FOR_CART_INFO = 0.48;
const WIDTH_FOR_BLOCK = width - PADDING_FOR_ITEM;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F8',
    alignItems: 'center',
  },
  header: {
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    paddingVertical: 25,
  },
  headerTitle: {
    fontSize: 22,
    lineHeight: 21,
    color: '#000000',
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
  },
  info: {
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  infoSwipe: {
    paddingLeft: 5,
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
    fontSize: 12,
    lineHeight: 12,
  },
  swipeBlock: {
    paddingVertical: 30,
    width: WIDTH_FOR_BLOCK,
    height: height * RATIO_HEIGHT_FOR_SWIPE_ITEM,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    elevation: 1,
  },
  imageBlock: {
    padding: 10,
  },
  image: {
    width: 75,
    height: 75,
  },
  flatRow: {
    alignItems: 'center',
    flex: 1,
  },
  cartInfo: {
    paddingHorizontal: 5,
    width: width * RATIO_FOR_CART_INFO,
  },
  cartName: {
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
    fontSize: 17,
    lineHeight: 20,
    textAlign: 'left',
    paddingBottom: 5,
  },
  cartCost: {
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'left',
    color: '#FA4A0C',
  },
  counterBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 5,
  },
  containerSwipe: {
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  swipeButton: {
    backgroundColor: '#DF2C2C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 8,
  },
  swipeButtonsBlock: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: WIDTH_FOR_BLOCK,
  },
  acceptButton: {
    paddingVertical: 15,
    width: WIDTH_FOR_BLOCK,
  },
  acceptBlock: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
