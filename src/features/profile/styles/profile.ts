import {StyleSheet, ScaledSize, Dimensions} from 'react-native';

const {width}: ScaledSize = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingTop: 30,
  },
  headerTitle: {
    paddingVertical: 30,
    fontFamily: 'FontsFree-Net-SFProText-Heavy',
    fontSize: 34,
    lineHeight: 35,
  },
  content: {},
  contentTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  title: {
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
    fontSize: 18,
    lineHeight: 21,
  },
  change: {
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
    fontSize: 15,
    lineHeight: 18,
    color: '#FA4A0C',
  },
  personalDetails: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    flexDirection: 'row',
    height: 180,
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  personalData: {
    paddingHorizontal: 15,
  },
  name: {
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 18,
    color: '#000000',
    lineHeight: 21,
  },
  textData: {
    maxWidth: 180,
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 15,
    color: '#000000',
    lineHeight: 18,
    opacity: 0.5,
    borderColor: '#000000',
    borderBottomWidth: 0.5,
    paddingVertical: 7,
  },
  image: {
    width: 91,
    borderRadius: 10,
    height: 100,
    backgroundColor: 'gray',
  },
  lastText: {
    borderColor: '#000000',
    borderBottomWidth: 0,
  },
  menu: {},
});
