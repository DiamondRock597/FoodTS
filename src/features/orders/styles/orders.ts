import {StyleSheet, Dimensions, ScaledSize} from 'react-native';

const {height, width}: ScaledSize = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F8',
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
    width: width - 100,
    height: height * 0.12,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageBlock: {
    padding: 10,
  },
  image: {
    width: 75,
    height: 75,
  },
  cartInfo: {
    paddingHorizontal: 5,
    width: width * 0.48,
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
});
