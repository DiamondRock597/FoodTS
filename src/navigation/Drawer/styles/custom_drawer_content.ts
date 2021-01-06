import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

const {width}: ScaledSize = Dimensions.get('window');
const ratioWidthMenuBlock = 0.4;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  menuBlock: {
    paddingHorizontal: 15,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: '#F4F4F8',
    width: ratioWidthMenuBlock * width,
  },
  menuTitle: {
    paddingLeft: 3,
    paddingVertical: 26,
    fontSize: 12,
    lineHeight: 20,
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
    color: '#FFFFFF',
  },
  signOutBlock: {
    paddingTop: 120,
    flexDirection: 'row',
    alignItems: 'center',
  },
  signOutText: {
    paddingRight: 8,
    fontSize: 17,
    lineHeight: 25,
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
    color: '#FFFFFF',
  },
  shadowImage: {
    position: 'absolute',
    width: 175,
    height: 531,
    top: 50,
    left: -15,
    opacity: 0.2,
    borderRadius: 30,
    borderBottomRightRadius: 0,
    backgroundColor: '#F2F2F2',
    zIndex: 0,
    elevation: 10,
  },
  imageBlock: {
    position: 'relative',
  },
  image: {
    zIndex: 1,
  },
});
