import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

const {height, width}: ScaledSize = Dimensions.get('window');
const paddingForImage = 530;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F9',
  },
  backButton: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  image: {
    height: height - paddingForImage,
    width: height - paddingForImage,
  },
  imageItem: {
    width,
    alignItems: 'center',
  },
  dotItem: {
    paddingVertical: 8,
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
    fontSize: 20,
    lineHeight: 20,
    paddingVertical: 10,
    textAlign: 'center',
  },
  cost: {
    fontFamily: 'FontsFree-Net-SpaceGrotesk-SemiBold',
    fontSize: 20,
    lineHeight: 22,
    textAlign: 'center',
    color: '#FA4A0C',
  },
  description: {
    flex: 2,
    paddingVertical: 5,
    paddingHorizontal: 25,
  },
  nameInfo: {
    fontSize: 15,
    lineHeight: 20,
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
    color: '#000000',
  },
  infoBlock: {
    paddingVertical: 10,
  },
  info: {
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 13,
    lineHeight: 21,
    letterSpacing: 0.02,
    color: '#000000',
    opacity: 0.7,
  },
  button: {
    paddingVertical: 20,
  },
});
