import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  bckg: {
    backgroundColor: '#ff4b3a',
    flex: 1,
    position: 'relative',
  },
  container: {
    paddingHorizontal: 48,
    paddingTop: 30,
  },
  icon: {
    height: 73,
    width: 73,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingTop: 15,
  },
  title: {
    fontStyle: 'normal',
    fontFamily: 'FontsFree-Net-SFProText-Heavy',
    fontSize: 45,
    letterSpacing: -0.01,
    color: '#fff',
  },
  imageBlock: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
