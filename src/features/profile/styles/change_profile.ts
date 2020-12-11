import {StyleSheet, ScaledSize, Dimensions} from 'react-native';

const {height}: ScaledSize = Dimensions.get('window');

const ratioPadding = 0.02;
const ratioPaddingBottomHeader = 0.01;
const ratioHeightPersonalDetail = 0.18;

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingTop: 20,
    flex: 1,
  },
  headerTitle: {
    paddingTop: height * ratioPadding,
    paddingBottom: height * ratioPaddingBottomHeader,
    fontFamily: 'FontsFree-Net-SFProText-Heavy',
    fontSize: 34,
    lineHeight: 30,
  },
  content: {
    flex: 2,
  },
  contentTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  methodsTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: height * ratioPadding,
    paddingBottom: 15,
  },
  methods: {
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    paddingBottom: 10,
  },
  title: {
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
    fontSize: 17,
    lineHeight: 20,
  },
  personalDetails: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    flexDirection: 'row',
    height: height * ratioHeightPersonalDetail,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  personalData: {
    paddingHorizontal: 15,
    alignItems: 'flex-start',
  },
  name: {
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 18,
    color: '#000000',
    lineHeight: 21,
  },
  textData: {
    maxWidth: 190,
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 13,
    color: '#000000',
    lineHeight: 16,
    opacity: 0.5,
    paddingVertical: 5,
  },
  image: {
    width: 60,
    borderRadius: 10,
    height: 60,
    backgroundColor: 'gray',
  },
  paymentMethods: {
    paddingVertical: 15,
  },
});
