import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

const {width}: ScaledSize = Dimensions.get('window');

const half = 2;
const marginForInput = 100;
const paddingFoodsContainer = 0.2;

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
    width: width / half,
    paddingVertical: 25,
    fontSize: 30,
    lineHeight: 35,
  },
  searchInput: {
    backgroundColor: '#EFEEEE',
    borderRadius: 30,
    paddingVertical: 15,
    width: width - marginForInput,
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
    paddingLeft: width * paddingFoodsContainer,
    paddingVertical: 20,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },

  dishesContainer: {
    paddingLeft: width * paddingFoodsContainer,
  },
});
