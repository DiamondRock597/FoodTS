import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

const LOGO_IMAGE_WIDTH = 414;
const LOGO_IMAGE_HEIGHT = 534;

const {width}: ScaledSize = Dimensions.get('window');

const ratio = width / LOGO_IMAGE_WIDTH;
const height = LOGO_IMAGE_HEIGHT * ratio;

export const styles = StyleSheet.create({
  bckg: {
    backgroundColor: '#ff4b3a',
    flex: 1,
  },
  container: {
    paddingHorizontal: 48,
    paddingTop: 30,
    position: 'relative',
  },
  icon: {
    height: 73,
    width: 73,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
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
    left: width * 0.1,
    width: width * 0.8,
    bottom: height * 0.12,
  },
  image: {
    height,
    width,
  },
});
