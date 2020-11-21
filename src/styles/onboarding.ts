import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  bckg: {
    backgroundColor: '#ff4b3a',
    flex: 1,
    position: 'relative',
  },
  container: {
    paddingHorizontal: 48,
    paddingTop: 50,
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
    paddingTop: 31,
  },
  title: {
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 54,
    letterSpacing: -0.03,
    color: '#fff',
  },
  image: {
    position: 'absolute',

    left: -48,
  },
});
