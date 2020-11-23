import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {},

  logoBlock: {
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  menuBlock: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  activeLogin: {
    borderBottomWidth: 2,
    borderBottomColor: 'red',
    paddingBottom: 15,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 21,
    paddingHorizontal: 20,
  },
  login: {
    borderBottomWidth: 0,
    paddingBottom: 15,
    fontWeight: '600',
    fontSize: 18,
    paddingHorizontal: 20,
    lineHeight: 21,
  },
});
