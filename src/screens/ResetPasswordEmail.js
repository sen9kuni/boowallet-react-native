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

const ResetPasswordEmail = () => {
  const [email, setEmail] = React.useState('');
  return (
    <ScrollView style={styles.wrapperMain}>
      <View style={styles.header}>
        <Text style={styles.textLogo}>Boo-Wallet</Text>
      </View>
      <View style={styles.bodyMain}>
        <View style={styles.infoAuth}>
          <Text style={[styles.fZ24, styles.textCenter, styles.fW700]}>
            Reset Password
          </Text>
          <Text style={[styles.fZ16, styles.textCenter, styles.fW400]}>
            Enter your Zwallet e-mail so we can send you a password reset link.
          </Text>
        </View>
        <ScrollView style={styles.content}>
          <View style={styleLocal.marginButton}>
            <Input
              onChange={text => setEmail(text)}
              palceHolder="Enter your e-mail"
              icon="envelope"
              type="email-address"
            />
          </View>
          <View style={[styles.buttonWrapper]}>
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
    marginBottom: 150,
  },
});

export default ResetPasswordEmail;
