import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
// import { Formik } from 'formik';

import styles from '../styles/global';
import Input from '../components/Input';
import {login} from '../redux/action/authUser';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  // const onLogin = () => {
  //   if (email === 'yoga@mail.com' && password === 'admin') {
  //     Alert.alert('Success', 'Login Success');
  //     navigation.navigate('AuthHome');
  //   } else {
  //     Alert.alert('Error', 'Wrong email or password');
  //   }
  // };
  const onLogin = () => {
    const params = {email: email, password: password};
    // console.log(params);
    dispatch(login(params));
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
        {/* <Formik initialValues={} */}
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
          <TouchableOpacity onPress={() => navigation.navigate('input email')}>
            <Text
              style={[styleLocal.forgotPassword, styles.fW600, styles.fZ14]}>
              Forgot password?
            </Text>
          </TouchableOpacity>
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
            <TouchableOpacity onPress={() => navigation.navigate('sign up')}>
              <Text style={[styles.fZ16, styles.fW700, styles.cPrimary]}>
                {' '}
                Sign Up
              </Text>
            </TouchableOpacity>
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
  wrapLink: {
    padding: 0,
  },
});

export default Login;
