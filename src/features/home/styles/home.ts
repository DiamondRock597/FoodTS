import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

const {width}: ScaledSize = Dimensions.get('window');

const ratioForWithHeaderTitle = 2.5;
const ratioForFontSizeHeaderTitle = 16;
const marginForInput = 100;
const paddingFoodsContainer = 0.2;
const paddingForDishes = width * paddingFoodsContainer;

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
    width: width / ratioForWithHeaderTitle,
    paddingVertical: 25,
    fontSize: width / ratioForFontSizeHeaderTitle,
    lineHeight: 30,
  },
  searchInput: {
    backgroundColor: '#EFEEEE',
    borderRadius: 30,
    elevation: 1,
    paddingVertical: 15,
    width: width - marginForInput,
    paddingHorizontal: 35,
    textAlign: 'left',
    fontFamily: 'FontsFree-Net-SpaceGrotesk-SemiBold',
    fontSize: 17,
    lineHeight: 20,
    zIndex: 1,
  },
  inputBlock: {
    position: 'relative',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    zIndex: 100,
    paddingRight: 5,
  },
  foods: {
    paddingLeft: paddingForDishes,
    paddingVertical: 20,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },

  dishesContainer: {
    paddingLeft: paddingForDishes,
    paddingBottom: 20,
  },
});
