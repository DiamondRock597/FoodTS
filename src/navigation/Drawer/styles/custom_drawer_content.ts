import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

const {height, width}: ScaledSize = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  menuBlock: {
    paddingHorizontal: 25,
  },
  menu: {
    flexDirection: 'row',

    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  menuTitle: {
    paddingLeft: 8,
    width: 150,
    borderBottomWidth: 0.3,
    borderBottomColor: '#F4F4F8',
    paddingVertical: 26,
    fontSize: 17,
    lineHeight: 25,
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
});
