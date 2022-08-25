import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';

import styles from '../styles/global';
import Input from '../components/Input';

const ResetPasswordInput = () => {
  const [password, setPassword] = React.useState('');
  const [reapeatPassword, setReapeatPassword] = React.useState('');
  return (
    <ScrollView style={styles.wrapperMain}>
      <View style={styles.header}>
        <Text style={styles.textLogo}>Boo-Wallet</Text>
      </View>
      <View style={styles.bodyMain}>
        <View style={styles.infoAuth}>
          <Text
            style={[
              styles.fZ24,
              styles.textCenter,
              styles.fW700,
              styleLocal.marginButton20,
            ]}>
            Reset Password
          </Text>
          <Text
            style={[
              styles.fZ16,
              styles.textCenter,
              styles.fW400,
              styleLocal.marginButton20,
            ]}>
            Enter your Zwallet e-mail so we can send you a password reset link.
          </Text>
        </View>
        <ScrollView style={styles.content}>
          <View style={styles.mB15}>
            <Input
              onChange={text => setPassword(text)}
              palceHolder="Create new password"
              icon="lock"
              secure={true}
            />
          </View>
          <View style={styleLocal.marginButton}>
            <Input
              onChange={text => setReapeatPassword(text)}
              palceHolder="Confirm new password"
              icon="lock"
              secure={true}
            />
          </View>
          <View style={[styles.buttonWrapper, styleLocal.marginButton20]}>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text style={[styles.cWhite, styles.fZ18, styles.fW700]}>
                  Confirm
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styleLocal = StyleSheet.create({
  forgotPassword: {
    textAlign: 'right',
    marginBottom: 75,
  },
  marginButton: {
    marginBottom: 100,
  },
  marginButton20: {
    marginBottom: 20,
  },
});

export default ResetPasswordInput;
