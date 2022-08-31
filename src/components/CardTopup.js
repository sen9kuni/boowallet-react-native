import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {BACK_PRIMARY, PRIMARY_COLOR, WHITE_COLOR} from '../styles/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/global';

const CardTopup = () => {
  return (
    <View style={styleLocal.wrapperModal}>
      <View>
        <TouchableOpacity style={styleLocal.wrapperBtn}>
          <Icon name="plus" size={35} color={PRIMARY_COLOR} />
        </TouchableOpacity>
      </View>
      <View style={styleLocal.wrapperText}>
        <Text style={[styles.fZ14, styles.fW400, styles.cCBlack]}>
          Virtual Account Number
        </Text>
        <Text style={[styles.fZ16, styles.fW700, styles.cCBlack]}>
          2389 081393877946
        </Text>
      </View>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  wrapperModal: {
    minHeight: 96,
    backgroundColor: WHITE_COLOR,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  wrapperBtn: {
    height: 56,
    width: 56,
    backgroundColor: BACK_PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 10,
  },
  wrapperText: {
    justifyContent: 'space-around',
  },
});

export default CardTopup;
