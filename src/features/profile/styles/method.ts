import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  methodBlock: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
  radioButton: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: '#FA4A0C',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#FA4A0C',
  },
  titleBlock: {
    paddingHorizontal: 15,
  },
  imageBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 40,
    height: 40,
  },
  titleMethod: {
    fontSize: 17,
    color: '#000000',
    lineHeight: 21,
  },
});
