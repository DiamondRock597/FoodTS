import {StyleSheet, ScaledSize, Dimensions} from 'react-native';

const {height}: ScaledSize = Dimensions.get('window');

const ratioFontSize = 0.04;
const ratioPaddingTopHeader = 0.02;
const ratioPaddingBottomHeader = 0.01;
const ratioHeightPersonalDetail = 0.25;

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingTop: 20,
    flex: 1,
  },
  headerTitle: {
    paddingTop: height * ratioPaddingTopHeader,
    paddingBottom: height * ratioPaddingBottomHeader,
    fontFamily: 'FontsFree-Net-SFProText-Heavy',
    fontSize: height * ratioFontSize,
    lineHeight: height * ratioFontSize,
  },
  content: {
    flex: 2,
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  contentTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  title: {
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
    fontSize: 18,
    lineHeight: 2,
  },
  personalDetails: {
    elevation: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: height * ratioHeightPersonalDetail,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  personalData: {
    paddingHorizontal: 10,
  },
  name: {
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 16,
    color: '#000000',
    lineHeight: 20,
  },
  textData: {
    maxWidth: 180,
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 15,
    color: '#000000',
    lineHeight: 18,
    opacity: 0.5,
    paddingVertical: 7,
  },
  image: {
    width: 81,
    borderRadius: 10,
    height: 90,
    backgroundColor: 'gray',
  },
  lastText: {
    borderColor: '#000000',
    borderBottomWidth: 0,
  },
});
