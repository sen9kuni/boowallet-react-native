import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {BACK_PRIMARY} from '../styles/constant';
import styles from '../styles/global';
import InputPhone from '../components/InputPhone';

const EditPhone = () => {
  return (
    <View style={styleLocal.wrapper}>
      <Text
        style={[
          styles.fZ16,
          styles.fW400,
          styles.ctBlack,
          styles.mV15,
          styles.mB60,
        ]}>
        Edit at least one phone number for the transfer ID so you can start
        transfering your money to another user.
      </Text>
      <InputPhone
        palceHolder="Enter your phone number"
        icon="phone"
        type="numeric"
      />
      <View style={[styles.buttonWrapper, styleLocal.marginTButton]}>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={[styles.cWhite, styles.fZ18, styles.fW700]}>
              Continue
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    backgroundColor: BACK_PRIMARY,
    height: Dimensions.get('screen').height - 100,
    flexDirection: 'column',
  },
  marginTButton: {
    marginTop: 'auto',
    marginBottom: 90,
  },
});

export default EditPhone;
