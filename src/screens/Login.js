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

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const onLogin = () => {
    if (email === 'yoga@mail.com' && password === 'admin') {
      Alert.alert('Success', 'Login Success');
    } else {
      Alert.alert('Error', 'Wrong email or password');
    }
  };
  return (
    <ScrollView style={styles.wrapperMain}>
      <View style={styles.header}>
        <Text style={styles.textLogo}>Boo-Wallet</Text>
      </View>
      <View style={styles.bodyMain}>
        <View style={styles.infoAuth}>
          <Text style={[styles.fZ24, styles.textCenter, styles.fW700]}>
            Login
          </Text>
          <Text style={[styles.fZ16, styles.textCenter, styles.fW400]}>
            Login to your existing account to accessall the features in FazzPay.
          </Text>
        </View>
        <ScrollView style={styles.content}>
          <View style={styles.mB60}>
            <Input
              onChange={text => setEmail(text)}
              palceHolder="Enter your e-mail"
              icon="envelope"
              type="email-address"
            />
          </View>
          <View style={styles.mB15}>
            <Input
              onChange={text => setPassword(text)}
              palceHolder="Enter your password"
              icon="lock"
              secure={true}
            />
          </View>
          <Text style={[styleLocal.forgotPassword, styles.fW600, styles.fZ14]}>
            Forgot password?
          </Text>
          <View style={[styles.buttonWrapper, styleLocal.marginButton]}>
            <TouchableOpacity onPress={onLogin}>
              <View style={styles.button}>
                <Text style={[styles.cWhite, styles.fZ18, styles.fW700]}>
                  Login
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text
            style={[
              styles.fZ16,
              styles.fW400,
              styles.textCenter,
              styleLocal.marginButton,
            ]}>
            Don't have an account? Let's
            <Text style={[styles.fZ16, styles.fW700, styles.cPrimary]}>
              {' '}
              Sign Up
            </Text>
          </Text>
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
    marginBottom: 25,
  },
});

export default Login;
