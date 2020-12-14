import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

const {width}: ScaledSize = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingVertical: 25,
    paddingHorizontal: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  headerTitle: {
    fontSize: 22,
    lineHeight: 21,
    color: '#000000',
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
  },
  notificationBlock: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationTitle: {
    fontSize: 28,
    textAlign: 'center',
    lineHeight: 33,
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
    paddingVertical: 20,
  },
  notificationInfo: {
    fontSize: 17,
    opacity: 0.57,
    lineHeight: 20,
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
    textAlign: 'center',
  },
});
