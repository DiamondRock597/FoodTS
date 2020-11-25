import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

const {height, width}: ScaledSize = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {backgroundColor: '#F2F2F2', flex: 1},

  logoBlock: {
    height: height / 2.5,
    borderBottomEndRadius: 35,
    borderBottomStartRadius: 35,
    backgroundColor: 'white',
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
    alignItems: 'center',
  },
  inputBlock: {
    paddingVertical: 10,
    width: width - 100,
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
  forgotPassword: {
    paddingVertical: 10,
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 17,
    lineHeight: 20,
    color: '#FA4A0C',
  },
});
