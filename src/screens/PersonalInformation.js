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
import CardProfileInfo from '../components/CardProfileInfo';

const PersonalInformation = () => {
  return (
    <View style={styleLocal.wrapper}>
      <Text style={[styles.fZ16, styles.fW400, styles.ctBlack, styles.mV15]}>
        We got your personal information from the sign up proccess. If you want
        to make changes on your information, contact our support.
      </Text>
      <View>
        <CardProfileInfo title="First Name" info="Robert" />
        <CardProfileInfo title="Last Name" info="Chandler" />
        <CardProfileInfo title="Verified E-mail" info="pewdiepie1@gmail.com" />
        <CardProfileInfo
          title="Phone Number"
          info="+62 813-9387-7946"
          adds={
            <TouchableOpacity>
              <Text style={[styles.cPrimary]}>Manage</Text>
            </TouchableOpacity>
          }
        />
      </View>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    backgroundColor: BACK_PRIMARY,
    height: Dimensions.get('screen').height,
  },
});

export default PersonalInformation;