import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {BACK_PRIMARY, PRIMARY_COLOR, SECONDARY_BLACK} from '../styles/constant';
import {Formik} from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import {useDispatch, useSelector} from 'react-redux';
import styles from '../styles/global';
import InputPhone from '../components/InputPhone';
import {editPhone} from '../redux/action/profile';

const editPhoneSchema = Yup.object().shape({
  phonenumber: Yup.string().phone('ID').required(),
});

const EditPhone = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.authUser.token);
  const successMsg = useSelector(state => state.profileUser.successMsg);
  const errorMsg = useSelector(state => state.profileUser.errorMsg);
  const [modalVisible, setModalVisible] = useState(false);
  const onEdit = value => {
    // console.log(value.phonenumber);
    const param = {token: token, phonenumber: value.phonenumber};
    dispatch(editPhone(param));
    setModalVisible(true);
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
            <Text>{successMsg ? successMsg : errorMsg}</Text>
            <TouchableOpacity style={styleLocal.btnModal} onPress={onModal}>
              <Text style={[styles.fZ16, styles.fW700, styles.cWhite]}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Text
        style={[
          styles.fZ16,
          styles.fW400,
          styles.ctBlack,
          styles.mV15,
          styles.mB60,
        ]}>
        Edit at least one phone number for the transfer ID so you can start
        transfering your money to another user.
      </Text>
      <Formik
        initialValues={{phonenumber: ''}}
        validationSchema={editPhoneSchema}
        onSubmit={onEdit}>
        {({errors, handleChange, handleSubmit, values, isValid}) => (
          <>
            <InputPhone
              palceHolder="Enter your phone number"
              name="phonenumber"
              value={values.phonenumber}
              onChange={handleChange('phonenumber')}
              icon="phone"
              type="numeric"
            />
            {errors.phonenumber && (
              <Text style={[styles.fZ14, styles.cCBlack]}>
                {errors.phonenumber}
              </Text>
            )}
            <View style={[styleLocal.marginTButton]}>
              <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
                <View
                  style={
                    !isValid ? styleLocal.buttonDisable : styleLocal.button
                  }>
                  <Text style={[styles.cWhite, styles.fZ18, styles.fW700]}>
                    Continue
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
      {/* <View style={[styleLocal.marginTButton]}>
        <TouchableOpacity>
          <View style={styleLocal.button}>
            <Text style={[styles.cWhite, styles.fZ18, styles.fW700]}>
              Continue
            </Text>
          </View>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styleLocal = StyleSheet.create({
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
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
  wrapper: {
    paddingHorizontal: 16,
    backgroundColor: BACK_PRIMARY,
    height: Dimensions.get('screen').height - 100,
    flexDirection: 'column',
  },
  marginTButton: {
    marginTop: 'auto',
    marginBottom: 90,
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

export default EditPhone;
