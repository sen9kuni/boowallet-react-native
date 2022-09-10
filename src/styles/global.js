import {StyleSheet, Dimensions} from 'react-native';

import {
  GREEN,
  PRIMARY_COLOR,
  SECONDARY_BLACK,
  SECONDARY_TRANS,
  THRID_TBLACK,
  WHITE_COLOR,
} from './constant';

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
  cCBlack: {
    color: SECONDARY_BLACK,
  },
  ctBlack: {
    color: THRID_TBLACK,
  },
  cGreen: {
    color: GREEN,
  },
  cRed: {
    color: 'red',
  },
  cSecondary: {
    color: SECONDARY_TRANS,
  },
  bgWhite: {
    backgroundColor: WHITE_COLOR,
  },
  bgPrimary: {
    backgroundColor: PRIMARY_COLOR,
  },
  bgCBlack: {
    backgroundColor: SECONDARY_BLACK,
  },
  bgGreen: {
    backgroundColor: 'green',
  },
  bgRed: {
    backgroundColor: 'red',
  },
  bgSecondary: {
    backgroundColor: SECONDARY_TRANS,
  },
  fZ24: {
    fontSize: 24,
  },
  fZ42: {
    fontSize: 42,
  },
  fZ26: {
    fontSize: 26,
  },
  fZ14: {
    fontSize: 14,
  },
  fZ10: {
    fontSize: 10,
  },
  fZ5: {
    fontSize: 6,
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
  mR15: {
    marginRight: 15,
  },
  mB40: {
    marginBottom: 40,
  },
  mB60: {
    marginBottom: 60,
  },
  mB15: {
    marginBottom: 15,
  },
  mT15: {
    marginTop: 15,
  },
  mV15: {
    marginVertical: 15,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
  flx1: {
    flex: 1,
  },
  tCenter: {
    textAlign: 'center',
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
  buttonSuccess: {
    backgroundColor: PRIMARY_COLOR,
    // width: (Dimensions.get('screen').width * 50) / 100,
    paddingVertical: 16,
    paddingHorizontal: 130,
    alignItems: 'center',
    borderRadius: 12,
    // elevation: 3,
  },
  buttonPass: {
    backgroundColor: PRIMARY_COLOR,
    // width: (Dimensions.get('screen').width * 50) / 100,
    paddingVertical: 16,
    paddingHorizontal: 110,
    alignItems: 'center',
    borderRadius: 12,
    // marginTop: 250,
    // elevation: 3,
  },
  flexRow: {
    flexDirection: 'row',
  },
  jAround: {
    justifyContent: 'space-around',
  },
  w100: {
    width: 200,
  },
  mainPadH: {
    paddingHorizontal: 16,
  },
});

export default style;
