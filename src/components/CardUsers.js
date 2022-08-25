import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ImageProfileW from './ImageProfileW';
import styles from '../styles/global';
import imageSource from '../assets/profile/mainprofile.png';
import {PRIMARY_COLOR, WHITE_COLOR} from '../styles/constant';

const CardUsers = () => {
  return (
    <View style={styleLocal.wrapper}>
      <ImageProfileW sourceImage={imageSource} />
      <Text style={[styles.fZ16, styles.fW700, styles.cCBlack]}>Michi</Text>
      <Text style={[styles.fZ14, styles.fW400, styles.cCBlack]}>-9994</Text>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: WHITE_COLOR,
    elevation: 1,
  },
});

export default CardUsers;
