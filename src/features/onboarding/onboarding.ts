import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

const {width, height}: ScaledSize = Dimensions.get('window');

const LOGO_IMAGE_WIDTH = 414;
const LOGO_IMAGE_HEIGHT = 534;

const ratio = width / LOGO_IMAGE_WIDTH;
const heightImage = LOGO_IMAGE_HEIGHT * ratio;

const ratioBottomPositionButton = 0.02;
const ratioLeftPositionButton = 0.1;
const ratioWidthButton = 0.8;

export const styles = StyleSheet.create({
  bckg: {
    backgroundColor: '#ff4b3a',
    flex: 1,
  },
  container: {
    paddingHorizontal: 48,
    paddingTop: 30,
  },
  icon: {
    height: 73,
    width: 73,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    elevation: 1,
    alignItems: 'center',
  },
  header: {
    paddingTop: 10,
  },
  title: {
    fontStyle: 'normal',
    fontFamily: 'FontsFree-Net-SFProText-Heavy',
    fontSize: 45,
    letterSpacing: -0.01,
    color: '#fff',
  },
  imageBlock: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonBlock: {
    position: 'absolute',
    left: width * ratioLeftPositionButton,
    width: width * ratioWidthButton,
    bottom: height * ratioBottomPositionButton,
  },
  image: {
    height: heightImage,
    width,
  },
});
