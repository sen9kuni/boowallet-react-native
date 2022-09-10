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
import {Formik} from 'formik';
import * as Yup from 'yup';
import {PRIMARY_COLOR, SECONDARY_BLACK} from '../styles/constant';
import {useDispatch} from 'react-redux';
import {setTempEmail} from '../redux/reducers/authUser';

const emailSechema = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required(),
});

const ResetPasswordEmail = ({navigation}) => {
  const dispatch = useDispatch();
  const onEmail = value => {
    // console.log(value.email);
    dispatch(setTempEmail(value.email));
    navigation.navigate('resetPassword');
  };
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
            Enter your Boo-Wallet e-mail so we can send you a password reset
            link.
          </Text>
        </View>
        <ScrollView style={styles.content}>
          <Formik
            initialValues={{
              email: '',
            }}
            onSubmit={onEmail}
            validationSchema={emailSechema}>
            {({errors, handleChange, handleSubmit, values, isValid}) => (
              <>
                <View style={styleLocal.marginButton}>
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
                <View style={[styles.buttonWrapper]}>
                  <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
                    <View
                      style={
                        !isValid ? styleLocal.buttonDisable : styleLocal.button
                      }>
                      <Text style={[styles.cWhite, styles.fZ18, styles.fW700]}>
                        Confirm
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
          {/* <View style={styleLocal.marginButton}>
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
          </View> */}
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
  button: {
    backgroundColor: PRIMARY_COLOR,
    // width: (Dimensions.get('screen').width * 50) / 100,
    paddingVertical: 16,
    paddingHorizontal: 148,
    alignItems: 'center',
    borderRadius: 12,
    // elevation: 3,
  },
  buttonDisable: {
    backgroundColor: SECONDARY_BLACK,
    // width: (Dimensions.get('screen').width * 50) / 100,
    paddingVertical: 16,
    paddingHorizontal: 148,
    alignItems: 'center',
    borderRadius: 12,
    // elevation: 3,
  },
});

export default ResetPasswordEmail;
