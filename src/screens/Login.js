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
import {Formik} from 'formik';
import * as Yup from 'yup';

import styles from '../styles/global';
import Input from '../components/Input';
import {login} from '../redux/action/authUser';

const loginSechema = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required(),
  password: Yup.string().min(8).required(),
});

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const onLogin = value => {
    // const params = {email: email, password: password};
    // console.log(value);
    dispatch(login(value));
    // navigation.navigate('AuthHome');
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
          <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={loginSechema}
            onSubmit={onLogin}>
            {({errors, handleChange, handleSubmit, values, isValid}) => (
              <View>
                <View style={styles.mB60}>
                  <Input
                    name="email"
                    onChange={handleChange('email')}
                    palceHolder="Enter your e-mail"
                    icon="envelope"
                    type="email-address"
                    value={values.email}
                  />
                  {errors.email && (
                    <Text style={[styles.fZ14, styles.cCBlack]}>
                      {errors.email}
                    </Text>
                  )}
                </View>
                <View style={styles.mB15}>
                  <Input
                    name="password"
                    onChange={handleChange('password')}
                    palceHolder="Enter your password"
                    icon="lock"
                    value={values.password}
                    secure={true}
                  />
                  {errors.password && (
                    <Text style={[styles.fZ14, styles.cCBlack]}>
                      {errors.password}
                    </Text>
                  )}
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('input email')}>
                  <Text
                    style={[
                      styleLocal.forgotPassword,
                      styles.fW600,
                      styles.fZ14,
                    ]}>
                    Forgot password?
                  </Text>
                </TouchableOpacity>
                <View style={[styles.buttonWrapper, styleLocal.marginButton]}>
                  <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
                    <View style={styles.button}>
                      <Text style={[styles.cWhite, styles.fZ18, styles.fW700]}>
                        Login
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
          {/* <View style={styles.mB60}>
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
          </View> */}
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
