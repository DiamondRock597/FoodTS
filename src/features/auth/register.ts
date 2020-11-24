import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },

  logoBlock: {
    borderBottomEndRadius: 35,
    borderBottomStartRadius: 35,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  menuBlock: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  activeLogin: {
    borderBottomWidth: 3,
    borderBottomColor: 'red',
    paddingBottom: 15,
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 18,
    lineHeight: 21,
    width: 134,
    textAlign: 'center',
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
  form: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 50,
    paddingVertical: 40,
  },
  title: {
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 15,
    lineHeight: 18,
    opacity: 0.4,
  },
  inputBlock: {
    paddingVertical: 20,
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
