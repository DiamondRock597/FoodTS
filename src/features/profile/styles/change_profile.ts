import {StyleSheet, ScaledSize, Dimensions} from 'react-native';

const {height}: ScaledSize = Dimensions.get('window');

const ratioFontSize = 0.04;
const ratioPadding = 0.02;
const ratioPaddingBottomHeader = 0.01;
const ratioHeightPersonalDetail = 0.25;
const paddingTop = height * ratioPadding;
const ratioForHeightMethodsBlock = 0.51;

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
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
  content: {flex: 2, justifyContent: 'space-between'},
  contentTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  methodsTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 2,
    paddingBottom: 5,
  },
  methods: {
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    elevation: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
    fontSize: 18,
    lineHeight: 17,
  },
  personalDetails: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    flexDirection: 'row',
    height: height * ratioHeightPersonalDetail,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  personalData: {
    paddingHorizontal: 15,
  },
  name: {
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 16,
    color: '#000000',
    lineHeight: 21,
  },
  textData: {
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 14,
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
    height: height * ratioForHeightMethodsBlock,
    paddingVertical: 14,
    justifyContent: 'space-between',
  },
});
