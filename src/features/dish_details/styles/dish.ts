import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

const {width}: ScaledSize = Dimensions.get('window');
const paddingForImage = 182;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F9',
  },
  header: {
    paddingHorizontal: 40,
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  image: {
    height: width - paddingForImage,
    width: width - paddingForImage,
  },
  imageItem: {
    width,
    alignItems: 'center',
  },
  dotItem: {
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleBlock: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
    fontSize: 28,
    lineHeight: 33,
    paddingVertical: 15,
    textAlign: 'center',
  },
  cost: {
    fontFamily: 'FontsFree-Net-SpaceGrotesk-SemiBold',
    fontSize: 22,
    lineHeight: 26,
    textAlign: 'center',
    color: '#FA4A0C',
  },
  description: {
    paddingVertical: 5,
    paddingHorizontal: 50,
  },
  nameInfo: {
    fontSize: 17,
    lineHeight: 20,
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
    color: '#000000',
  },
  infoBlock: {
    paddingVertical: 15,
  },
  info: {
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: 0.02,
    color: '#000000',
    opacity: 0.7,
  },
});
