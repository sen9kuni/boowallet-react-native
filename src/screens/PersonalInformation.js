import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BACK_PRIMARY} from '../styles/constant';
import styles from '../styles/global';
import CardProfileInfo from '../components/CardProfileInfo';

const PersonalInformation = ({navigation}) => {
  const dataprofile = useSelector(state => state.authUser.dataprofile);
  return (
    <View style={styleLocal.wrapper}>
      <Text style={[styles.fZ16, styles.fW400, styles.ctBlack, styles.mV15]}>
        We got your personal information from the sign up proccess. If you want
        to make changes on your information, contact our support.
      </Text>
      <View>
        <CardProfileInfo
          title="First Name"
          info={dataprofile.first_name ? dataprofile.first_name : '-'}
        />
        <CardProfileInfo
          title="Last Name"
          info={dataprofile.last_name ? dataprofile.last_name : '-'}
        />
        <CardProfileInfo
          title="Verified E-mail"
          info={dataprofile.email ? dataprofile.email : '-'}
        />
        <CardProfileInfo
          title="Phone Number"
          info={dataprofile.phonenumber ? dataprofile.phonenumber : '-'}
          adds={
            <TouchableOpacity onPress={() => navigation.navigate('edit phone')}>
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
