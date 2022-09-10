import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {BACK_PRIMARY, PRIMARY_COLOR, SECONDARY_BLACK} from '../styles/constant';
import styles from '../styles/global';
import Input from '../components/Input';
import {changePassword} from '../redux/action/profile';

const createNewPassSechema = Yup.object().shape({
  currentPassword: Yup.string()
    .min(8)
    .required('Current passwordis a required field'),
  newPassword: Yup.string().min(8).required('New password is a required field'),
  repeatNewPassword: Yup.string()
    .min(8)
    .required('Repeat new password is a required field'),
});

const ChangePassword = ({navigation}) => {
  // const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  const token = useSelector(state => state.authUser.token);
  const successMsg = useSelector(state => state.profileUser.successMsg);
  const errorMsg = useSelector(state => state.profileUser.errorMsg);
  const [modalVisible, setModalVisible] = useState(false);
  const onChange = value => {
    // console.log(value);
    if (value.newPassword === value.repeatNewPassword) {
      const param = {
        token: token,
        currentPassword: value.currentPassword,
        newPassword: value.newPassword,
      };
      dispatch(changePassword(param));
      setModalVisible(true);
    } else {
      Alert.alert('new password and repeat password not match');
    }
  };
  const onModal = () => {
    // setModalVisible(false);
    navigation.navigate('profile');
  };
  return (
    <View style={styleLocal.wrapper}>
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
      <Text style={[styles.fZ16, styles.fW400, styles.ctBlack, styles.mV15]}>
        You must enter your current password and then type your new password
        twice.
      </Text>
      <Formik
        initialValues={{
          currentPassword: '',
          newPassword: '',
          repeatNewPassword: '',
        }}
        onSubmit={onChange}
        validationSchema={createNewPassSechema}>
        {({errors, handleChange, handleSubmit, values, isValid}) => (
          <>
            <View>
              <View style={styles.mB40}>
                <Input
                  name="currentPassword"
                  onChange={handleChange('currentPassword')}
                  palceHolder="Current Password"
                  icon="lock"
                  secure={true}
                  value={values.currentPassword}
                />
                {errors.currentPassword && (
                  <Text style={[styles.fZ14, styles.cCBlack]}>
                    {errors.currentPassword}
                  </Text>
                )}
              </View>
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
            <View style={[styleLocal.marginTButton]}>
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
          </>
        )}
      </Formik>
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
    marginTop: 180,
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    // width: (Dimensions.get('screen').width * 50) / 100,
    paddingVertical: 16,
    // paddingHorizontal: 148,
    alignItems: 'center',
    borderRadius: 12,
    // elevation: 3,
  },
  buttonDisable: {
    backgroundColor: SECONDARY_BLACK,
    // width: (Dimensions.get('screen').width * 50) / 100,
    paddingVertical: 16,
    // paddingHorizontal: 148,
    alignItems: 'center',
    borderRadius: 12,
    // elevation: 3,
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

export default ChangePassword;
