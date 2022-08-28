import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {WHITE_COLOR} from '../styles/constant';
import styles from '../styles/global';

const ButtonProfile = ({texts, adds}) => {
  return (
    <View style={styleLocal.wrapper}>
      <Text style={[styles.fZ16, styles.fW700, styles.cCBlack]}>{texts}</Text>
      {adds}
    </View>
  );
};

const styleLocal = StyleSheet.create({
  wrapper: {
    minHeight: 58,
    backgroundColor: WHITE_COLOR,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 1,
  },
});

export default ButtonProfile;
