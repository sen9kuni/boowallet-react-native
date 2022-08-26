import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {BACK_PRIMARY, WHITE_COLOR} from '../styles/constant';
import styles from '../styles/global';

const CardListTopup = ({number, paragraft}) => {
  return (
    <View style={styleLocal.wrapper}>
      <Text style={[styles.fZ18, styles.fW700, styles.cPrimary, styles.mR15]}>
        {number}
      </Text>
      <Text style={[styles.fZ16, styles.fW400, styles.ctBlack]}>
        {paragraft}
      </Text>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  wrapper: {
    minHeight: 88,
    backgroundColor: WHITE_COLOR,
    borderRadius: 10,
    elevation: 1,
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingVertical: 17,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoSub: {
    justifyContent: 'flex-end',
    marginTop: 15,
    marginBottom: 15,
  },
});

export default CardListTopup;
