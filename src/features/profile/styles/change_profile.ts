import {StyleSheet, ScaledSize, Dimensions} from 'react-native';

const {height}: ScaledSize = Dimensions.get('window');

const ratioFontSize = 0.04;
const ratioPadding = 0.02;
const ratioPaddingBottomHeader = 0.01;
const ratioHeightPersonalDetail = 0.25;
const paddingTop = height * ratioPadding;

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingTop: 20,
    flex: 1,
  },
  headerTitle: {
    paddingTop: paddingTop,
    paddingBottom: height * ratioPaddingBottomHeader,
    fontFamily: 'FontsFree-Net-SFProText-Heavy',
    fontSize: height * ratioFontSize,
    lineHeight: height * ratioFontSize,
  },
  content: {flex: 2},
  contentTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  methodsTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 2,
    paddingBottom: 15,
  },
  methods: {
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    paddingBottom: 21,
  },
  title: {
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
    fontSize: 18,
    lineHeight: 21,
  },
  personalDetails: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    flexDirection: 'row',
    height: height * ratioHeightPersonalDetail,
    paddingVertical: 10,
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
    borderBottomWidth: 0.7,
    paddingVertical: 5,
  },
  image: {
    width: 91,
    borderRadius: 10,
    height: 100,
    backgroundColor: 'gray',
  },
  paymentMethods: {
    paddingVertical: 15,
  },
});
