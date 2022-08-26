import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {WHITE_COLOR} from '../styles/constant';
import styles from '../styles/global';

const InfoCard = ({infoHeader, infoValue}) => {
  return (
    <View style={styleLocal.wrapper}>
      <Text style={[styles.fZ16, styles.fW400, styles.cSecondary]}>
        {infoHeader}
      </Text>
      <Text style={[styles.fZ24, styles.fW700, styles.cCBlack]}>
        {infoValue}
      </Text>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  wrapper: {
    height: 92,
    backgroundColor: WHITE_COLOR,
    borderRadius: 15,
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'space-between',
    elevation: 1,
  },
});

export default InfoCard;
