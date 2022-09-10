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

import styles from '../styles/global';
import Input from '../components/Input';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {PRIMARY_COLOR, SECONDARY_BLACK} from '../styles/constant';
import {resetPassword} from '../redux/action/authUser';

const resetNewPassSechema = Yup.object().shape({
  newPassword: Yup.string().min(8).required('New password is a required field'),
  repeatNewPassword: Yup.string()
    .min(8)
    .required('Repeat new password is a required field'),
});

const ResetPasswordInput = ({navigation}) => {
  const dispatch = useDispatch();
  const tempEmail = useSelector(state => state.authUser.tempEmail);
  const successMsg = useSelector(state => state.authUser.successMsg);
  const errorMsg = useSelector(state => state.authUser.errorMsg);
  const [modalVisible, setModalVisible] = React.useState(false);
  const onReset = async value => {
    if (value.newPassword !== value.repeatNewPassword) {
      Alert.alert('new password and repeat password not same');
    } else {
      await dispatch(
        resetPassword({email: tempEmail, newPassword: value.newPassword}),
      );
      setModalVisible(true);
    }
  };
  const onModal = () => {
    // setModalVisible(false);
    navigation.navigate('login');
  };
  return (
    <ScrollView style={styles.wrapperMain}>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styleLocal.centeredView}>
          <View style={styleLocal.modalView}>
            <Text>
              {successMsg === 'Change Password successfully'
                ? successMsg
                : errorMsg}
            </Text>
            <TouchableOpacity style={styleLocal.btnModal} onPress={onModal}>
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
            Create and confirm your new password so you can login to Boo-Wallet.
          </Text>
        </View>
        <ScrollView style={styles.content}>
          {/* <View style={styles.mB15}>
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
          </View> */}
          <Formik
            initialValues={{
              newPassword: '',
              repeatNewPassword: '',
            }}
            onSubmit={onReset}
            validationSchema={resetNewPassSechema}>
            {({errors, handleChange, handleSubmit, values, isValid}) => (
              <>
                <View style={styles.mB60}>
                  <View style={styles.mB40}>
                    <Input
                      name="newPassword"
                      onChange={handleChange('newPassword')}
                      palceHolder="New Password"
                      icon="lock"
                      secure={true}
                      value={values.newPassword}
                    />
                    {errors.newPassword && (
                      <Text style={[styles.fZ14, styles.cCBlack]}>
                        {errors.newPassword}
                      </Text>
                    )}
                  </View>
                  <View>
                    <Input
                      name="repeatNewPassword"
                      onChange={handleChange('repeatNewPassword')}
                      palceHolder="Repeat Password"
                      icon="lock"
                      secure={true}
                      value={values.repeatNewPassword}
                    />
                    {errors.newPassword && (
                      <Text style={[styles.fZ14, styles.cCBlack]}>
                        {errors.newPassword}
                      </Text>
                    )}
                  </View>
                </View>
                <View>
                  <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
                    <View
                      style={
                        !isValid ? styleLocal.buttonDisable : styleLocal.button
                      }>
                      <Text style={[styles.cWhite, styles.fZ18, styles.fW700]}>
                        Change Password
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styleLocal.marginButton} />
              </>
            )}
          </Formik>
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
  button: {
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonDisable: {
    backgroundColor: SECONDARY_BLACK,
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 12,
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

export default ResetPasswordInput;
