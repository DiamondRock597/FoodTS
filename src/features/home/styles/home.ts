import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

const {width, height}: ScaledSize = Dimensions.get('window');
console.log({width, height});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  title: {
    fontFamily: 'FontsFree-Net-SpaceGrotesk-SemiBold',
    textAlign: 'left',
    width: width / 2,
    paddingVertical: 30,
    fontSize: 30,
    lineHeight: 35,
  },
  searchInput: {
    backgroundColor: '#EFEEEE',
    borderRadius: 30,
    paddingVertical: 15,
    width: width - 100,
    paddingHorizontal: 35,
    textAlign: 'left',
    fontFamily: 'FontsFree-Net-SpaceGrotesk-SemiBold',
    fontSize: 17,
    lineHeight: 20,
  },
  inputBlock: {
    position: 'relative',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    zIndex: 1,
  },
  foods: {
    paddingLeft: width * 0.2,
    paddingVertical: 30,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  foodsItem: {
    paddingHorizontal: 20,
  },
  titleFoods: {
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 17,
    lineHeight: 20,
    color: '#9A9A9D',
  },
  dishesBlock: {
    paddingTop: height * 0.1,
    paddingHorizontal: 9,
  },
  dishesContainer: {
    paddingLeft: width * 0.2,
  },
  dishesItem: {
    height: height * 0.3,
    width: width * 0.53,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
  },
  dishesTitle: {
    paddingVertical: 15,
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
    textAlign: 'center',
    fontSize: 22,
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
    backgroundColor: 'gray',
    zIndex: 1,
    width: width * 0.34,
    height: width * 0.34,
    borderRadius: (width * 0.34) / 2,
    left: (width * 0.53) / 2 - (width * 0.34) / 2,
    top: -(width * 0.34) / 2,
  },
});
