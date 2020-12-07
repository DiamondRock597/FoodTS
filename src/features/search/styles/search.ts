import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

const {width, height}: ScaledSize = Dimensions.get('window');
const half = 2;
const ratioForCircle = 0.3;
const ratioWidthDishesItem = 0.4;
const backButtonPadding = 34;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },

  header: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 40,
    paddingHorizontal: 40,
    paddingBottom: 20,
  },
  backButton: {
    paddingRight: backButtonPadding,
  },
  input: {
    width: width - backButtonPadding,
    fontSize: 17,
    lineHeight: 20,
    color: '#000000',
  },
  contentBlock: {
    backgroundColor: '#F9F9F9',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 2,
  },
  contentContainer: {
    paddingTop: 45,
    alignItems: 'center',
  },
  dishesItem: {
    height: height * 0.25,
    width: width * 0.4,

    marginHorizontal: 10,
    marginTop: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
  },
  dishesTitle: {
    paddingVertical: 15,
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
    textAlign: 'center',
    fontSize: 18,
    opacity: 0.9,
    lineHeight: 22,
    width: width * 0.3,
  },
  dishesCost: {
    color: '#FA4A0C',
    paddingVertical: 15,
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
    fontSize: 17,
    lineHeight: 20,
    textAlign: 'center',
  },
  dishesCircle: {
    position: 'absolute',

    zIndex: 1,
    width: width * ratioForCircle,
    height: height * ratioForCircle,
    borderRadius: (width * ratioForCircle) / half,
    left: (width * ratioWidthDishesItem) / half - (width * ratioForCircle) / half,
    top: -(width * ratioForCircle) / half,
  },
  image: {
    width: width * ratioForCircle,
    height: width * ratioForCircle,
  },
});
