import {StyleSheet, Dimensions} from 'react-native';

import {PRIMARY_COLOR, WHITE_COLOR} from './constant';

const style = StyleSheet.create({
  textLogo: {
    color: PRIMARY_COLOR,
    fontWeight: '700',
    fontSize: 26,
    textAlign: 'center',
  },
  wrapperMain: {
    height: Dimensions.get('screen').height,
    // backgroundColor: '#E5E5E5',
  },
  cWhite: {
    color: WHITE_COLOR,
  },
  cPrimary: {
    color: PRIMARY_COLOR,
  },
  fZ24: {
    fontSize: 24,
  },
  fZ26: {
    fontSize: 26,
  },
  fZ14: {
    fontSize: 14,
  },
  fZ16: {
    fontSize: 16,
  },
  fZ18: {
    fontSize: 18,
  },
  fW400: {
    fontWeight: '400',
  },
  fW600: {
    fontWeight: '600',
  },
  fW700: {
    fontWeight: '700',
  },
  mB60: {
    marginBottom: 60,
  },
  mB15: {
    marginBottom: 15,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
  infoAuth: {
    // height: 202,
    paddingBottom: 50,
    paddingTop: 40,
    paddingHorizontal: 45,
  },
  header: {
    height: 201,
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  bodyMain: {
    // height: 611,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: WHITE_COLOR,
    elevation: 3,
    overflow: 'hidden',
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    // width: (Dimensions.get('screen').width * 50) / 100,
    paddingVertical: 16,
    paddingHorizontal: 148,
    alignItems: 'center',
    borderRadius: 12,
    // elevation: 3,
  },
});

export default style;
