import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

const {width, height}: ScaledSize = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    paddingTop: 64,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  title: {
    fontFamily: 'FontsFree-Net-SpaceGrotesk-SemiBold',
    textAlign: 'left',
    width: width / 1.8,
    paddingVertical: 40,
    fontSize: 34,
    lineHeight: 41,
  },
  searchInput: {
    backgroundColor: '#EFEEEE',
    borderRadius: 30,
    paddingVertical: 20,
    width: width - 100,
    paddingHorizontal: 35,
    textAlign: 'left',
    fontFamily: 'FontsFree-Net-SpaceGrotesk-SemiBold',
    fontSize: 17,
    lineHeight: 20,
  },
  inputBlock: {
    position: 'relative',
  },
  search: {
    position: 'absolute',
    zIndex: 1,
  },
  foods: {
    paddingLeft: width * 0.3,
    paddingVertical: 30,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  foodsItem: {
    paddingHorizontal: 20,
  },
  titleFoods: {
    fontSize: 17,
    lineHeight: 20,
    color: '#9A9A9D',
  },
});
