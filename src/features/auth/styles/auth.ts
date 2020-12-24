import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

const {height, width}: ScaledSize = Dimensions.get('window');

const stickWidth = 134;

export const cardRadius = 35;
export const endToScroll = width - cardRadius - stickWidth;

const ratioHeightLogo = 2.5;
const paddingInputBlock = 100;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
  },
  logoBlock: {
    height: height / ratioHeightLogo,
    borderBottomEndRadius: cardRadius,
    borderBottomStartRadius: cardRadius,
    backgroundColor: 'white',
    elevation: 5,
    justifyContent: 'flex-end',
  },
  menuBlock: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  login: {
    borderBottomWidth: 0,
    paddingBottom: 15,
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 18,
    width: 134,
    textAlign: 'center',
    lineHeight: 21,
  },
  imageBlock: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 30,
  },
  img: {
    width: 150,
    height: 162,
    resizeMode: 'stretch',
  },
  scroll: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  title: {
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 15,
    lineHeight: 18,
    opacity: 0.4,
  },
  form: {
    width,
  },
  inputBlock: {
    paddingVertical: 20,
    width: width - paddingInputBlock,
  },
  input: {
    height: 41,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 17,
    lineHeight: 20,
    color: 'black',
  },
  forgotpassword: {
    paddingBottom: 20,
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 17,
    lineHeight: 20,
    color: '#FA4A0C',
  },
  hover: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    backgroundColor: 'red',
    width: stickWidth,
    elevation: 1,
  },
});
