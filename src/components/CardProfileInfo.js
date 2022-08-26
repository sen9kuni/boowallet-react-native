import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {WHITE_COLOR} from '../styles/constant';
import styles from '../styles/global';

const CardProfileInfo = ({title, info, adds}) => {
  return (
    <View style={styleLocal.wrapper}>
      <View style={styleLocal.wrapText}>
        <Text style={[styles.fZ16, styles.fW400, styles.ctBlack]}>{title}</Text>
        <Text style={[styles.fZ24, styles.fW700, styles.cCBlack]}>{info}</Text>
      </View>
      <View>{adds}</View>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    backgroundColor: WHITE_COLOR,
    minHeight: 92,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapText: {
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
});

export default CardProfileInfo;
