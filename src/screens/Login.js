import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';

import styles from '../styles/global';
import Input from '../components/Input';
import {login} from '../redux/action/authUser';
import {saveToken} from '../redux/action/notification';
import {PRIMARY_COLOR, SECONDARY_BLACK} from '../styles/constant';

const loginSechema = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required(),
  password: Yup.string().min(8).required(),
});

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const fcm_token = useSelector(state => state.notification.fcm_token);
  // const successMsg = useSelector(state => state.authUser.successMsg);
  const errorMsg = useSelector(state => state.authUser.errorMsg);
  const [modalVisible, setModalVisible] = React.useState(false);
  // console.log(fcm_token);
  React.useEffect(() => {
    const pram = {token: fcm_token};
    dispatch(saveToken(pram));
  }, [dispatch, fcm_token]);

  const onLogin = async value => {
    const params = {
      email: value.email,
      password: value.password,
      tokenNotif: fcm_token,
    };
    // console.log(value);
    await dispatch(login(params));
    if (
      errorMsg === 'Email or Password not match' ||
      errorMsg === 'User not found'
    ) {
      setModalVisible(true);
    }
    // navigation.navigate('AuthHome');
  };
  return (
    <ScrollView style={styles.wrapperMain}>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        // onRequestClose={() => {
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={styleLocal.centeredView}>
          <View style={styleLocal.modalView}>
            <Text>{errorMsg}</Text>
            <TouchableOpacity
              style={styleLocal.btnModal}
              onPress={() => setModalVisible(false)}>
              <Text style={[styles.fZ16, styles.fW700, styles.cWhite]}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <Text style={styles.textLogo}>Boo-Wallet</Text>
      </View>
      <View style={styles.bodyMain}>
        <View style={styles.infoAuth}>
          <Text style={[styles.fZ24, styles.textCenter, styles.fW700]}>
            Login
          </Text>
          <Text style={[styles.fZ16, styles.textCenter, styles.fW400]}>
            Login to your existing account to accessall the features in
            Boo-Wallet.
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
                <View style={styleLocal.fbWrap}>
                  <TouchableOpacity
                    style={styleLocal.forgotPassword}
                    onPress={() => navigation.navigate('input email')}>
                    <Text style={[styles.fW600, styles.fZ14]}>
                      Forgot password?
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styleLocal.gap} />
                <View style={[styles.buttonWrapper, styleLocal.marginButton]}>
                  <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
                    <View
                      style={
                        !isValid ? styleLocal.buttonDisable : styleLocal.button
                      }>
                      <Text style={[styles.cWhite, styles.fZ18, styles.fW700]}>
                        Login
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
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
    width: 120,
  },
  fbWrap: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
  gap: {
    marginBottom: 75,
  },
  marginButton: {
    marginBottom: 25,
  },
  wrapLink: {
    padding: 0,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  btnModal: {
    marginTop: 15,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default Login;
