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
import Input from '../components/Input';

const ChangePassword = () => {
  const [password, setPassword] = React.useState('');
  return (
    <View style={styleLocal.wrapper}>
      <Text style={[styles.fZ16, styles.fW400, styles.ctBlack, styles.mV15]}>
        You must enter your current password and then type your new password
        twice.
      </Text>
      <View>
        <View style={styles.mB40}>
          <Input
            onChange={text => setPassword(text)}
            palceHolder="Current Password"
            icon="lock"
            secure={true}
          />
        </View>
        <View style={styles.mB40}>
          <Input
            onChange={text => setPassword(text)}
            palceHolder="New Password"
            icon="lock"
            secure={true}
          />
        </View>
        <View style={styles.mB40}>
          <Input
            onChange={text => setPassword(text)}
            palceHolder="Repeat Password"
            icon="lock"
            secure={true}
          />
        </View>
      </View>
      <View style={[styles.buttonWrapper, styleLocal.marginTButton]}>
        <TouchableOpacity>
          <View style={styles.buttonPass}>
            <Text style={[styles.cWhite, styles.fZ18, styles.fW700]}>
              Change Password
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
    height: Dimensions.get('screen').height,
  },
  marginTButton: {
    marginBottom: 50,
  },
});

export default ChangePassword;
