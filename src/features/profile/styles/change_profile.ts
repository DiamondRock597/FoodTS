import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingTop: 20,
    flex: 1,
  },
  headerTitle: {
    paddingTop: 30,
    paddingBottom: 25,
    fontFamily: 'FontsFree-Net-SFProText-Heavy',
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
  },
  content: {
    flex: 2,
  },
  contentTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  methodsTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 35,
    paddingBottom: 15,
  },
  methods: {
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
    fontSize: 17,
    lineHeight: 20,
  },
  personalDetails: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    flexDirection: 'row',
    height: 133,
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  personalData: {
    paddingHorizontal: 15,
    alignItems: 'flex-start',
  },
  name: {
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 18,
    color: '#000000',
    lineHeight: 21,
  },
  textData: {
    maxWidth: 190,
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 13,
    color: '#000000',
    lineHeight: 16,
    opacity: 0.5,
    paddingVertical: 5,
  },
  image: {
    width: 60,
    borderRadius: 10,
    height: 60,
    backgroundColor: 'gray',
  },
  paymentMethods: {
    paddingVertical: 15,
  },
});
