import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  BACK_PRIMARY,
  PRIMARY_COLOR,
  RED,
  SECONDARY_TRANS,
} from '../styles/constant';
import styles from '../styles/global';
import CardProfileInfo from '../components/CardProfileInfo';
import {Formik} from 'formik';
import {editProfileName} from '../redux/action/profile';

const PersonalInformation = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.authUser.token);
  const successMsg = useSelector(state => state.profileUser.successMsg);
  const errorMsg = useSelector(state => state.profileUser.errorMsg);
  const [modalVisibleInfo, setModalVisibleInfo] = useState(false);
  const [modalVisibleFirst, setModalVisibleFirst] = useState(false);
  const [modalVisibleLast, setModalVisibleLast] = useState(false);
  const dataprofile = useSelector(state => state.profileUser.dataprofile);
  const onChangeFirst = value => {
    const param = {token: token, first_name: value.first_name};
    dispatch(editProfileName(param));
    setModalVisibleInfo(true);
  };
  const onChangeLast = value => {
    const param = {token: token, last_name: value.last_name};
    dispatch(editProfileName(param));
    setModalVisibleInfo(true);
  };
  const onModalInfo = () => {
    setModalVisibleLast(false);
    setModalVisibleFirst(false);
    setModalVisibleInfo(false);
  };
  // console.log(dataprofile);
  return (
    <View style={styleLocal.wrapper}>
      <Modal
        visible={modalVisibleInfo}
        animationType="slide"
        transparent
        // onRequestClose={() => {
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={styleLocal.centeredView}>
          <View style={styleLocal.modalView}>
            <Text>
              {successMsg === 'Profile name updated'
                ? successMsg
                : 'loading...'}
            </Text>
            <TouchableOpacity style={styleLocal.btnModal} onPress={onModalInfo}>
              <Text style={[styles.fZ16, styles.fW700, styles.cWhite]}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        visible={modalVisibleFirst}
        animationType="slide"
        transparent
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalVisibleFirst(!modalVisibleFirst);
        }}>
        <View style={styleLocal.centeredView}>
          <View style={styleLocal.modalView}>
            <Formik initialValues={{first_name: ''}} onSubmit={onChangeFirst}>
              {({errors, handleChange, handleSubmit, values, isValid}) => (
                <>
                  <View style={[styleLocal.wrapperInput, styles.mB15]}>
                    <View style={[styleLocal.inputWrapper]}>
                      <TextInput
                        name="first_name"
                        textAlign={'center'}
                        keyboardType="default"
                        placeholder="change first name"
                        onChangeText={handleChange('first_name')}
                        value={values.first_name}
                        style={[styles.fZ18, styles.fW600]}
                      />
                    </View>
                  </View>
                  {/* {errors.amount && (
                    <Text style={[styles.fZ14, styles.cCBlack]}>
                      {errors.amount}
                    </Text>
                  )} */}
                  <View style={[styles.flexRow, styles.jAround, styles.w100]}>
                    <TouchableOpacity
                      style={styleLocal.btnModal}
                      onPress={handleSubmit}
                      disabled={!isValid}>
                      <Text style={[styles.fZ16, styles.fW700, styles.cWhite]}>
                        Edit
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styleLocal.btnModalCancle}
                      onPress={() => setModalVisibleFirst(!modalVisibleFirst)}
                      disabled={!isValid}>
                      <Text style={[styles.fZ16, styles.fW700, styles.cWhite]}>
                        cancel
                      </Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
          </View>
        </View>
      </Modal>
      <Modal
        visible={modalVisibleLast}
        animationType="slide"
        transparent
        onRequestClose={() => {
          setModalVisibleLast(!modalVisibleLast);
        }}>
        <View style={styleLocal.centeredView}>
          <View style={styleLocal.modalView}>
            <Formik initialValues={{last_name: ''}} onSubmit={onChangeLast}>
              {({errors, handleChange, handleSubmit, values, isValid}) => (
                <>
                  <View style={[styleLocal.wrapperInput, styles.mB15]}>
                    <View style={[styleLocal.inputWrapper]}>
                      <TextInput
                        name="last_name"
                        textAlign={'center'}
                        keyboardType="default"
                        placeholder="change last name"
                        onChangeText={handleChange('last_name')}
                        value={values.last_name}
                        style={[styles.fZ18, styles.fW600]}
                      />
                    </View>
                  </View>
                  {/* {errors.amount && (
                    <Text style={[styles.fZ14, styles.cCBlack]}>
                      {errors.amount}
                    </Text>
                  )} */}
                  <View style={[styles.flexRow, styles.jAround, styles.w100]}>
                    <TouchableOpacity
                      style={styleLocal.btnModal}
                      onPress={handleSubmit}
                      disabled={!isValid}>
                      <Text style={[styles.fZ16, styles.fW700, styles.cWhite]}>
                        Edit
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styleLocal.btnModalCancle}
                      onPress={() => setModalVisibleLast(!modalVisibleLast)}
                      disabled={!isValid}>
                      <Text style={[styles.fZ16, styles.fW700, styles.cWhite]}>
                        cancel
                      </Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
          </View>
        </View>
      </Modal>
      <Text style={[styles.fZ16, styles.fW400, styles.ctBlack, styles.mV15]}>
        We got your personal information from the sign up proccess. If you want
        to make changes on your information, contact our support.
      </Text>
      <View>
        <CardProfileInfo
          title="First Name"
          info={dataprofile.first_name ? dataprofile.first_name : '-'}
          adds={
            <TouchableOpacity onPress={() => setModalVisibleFirst(true)}>
              <Icon name="edit" size={20} color={PRIMARY_COLOR} />
            </TouchableOpacity>
          }
        />
        <CardProfileInfo
          title="Last Name"
          info={dataprofile.last_name ? dataprofile.last_name : '-'}
          adds={
            <TouchableOpacity onPress={() => setModalVisibleLast(true)}>
              <Icon name="edit" size={20} color={PRIMARY_COLOR} />
            </TouchableOpacity>
          }
        />
        <CardProfileInfo
          title="Verified E-mail"
          info={dataprofile.email ? dataprofile.email : '-'}
        />
        <CardProfileInfo
          title="Phone Number"
          info={dataprofile.phonenumber ? dataprofile.phonenumber : '-'}
          adds={
            <TouchableOpacity onPress={() => navigation.navigate('edit phone')}>
              <Text style={[styles.cPrimary]}>Manage</Text>
            </TouchableOpacity>
          }
        />
      </View>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    backgroundColor: BACK_PRIMARY,
    height: Dimensions.get('screen').height,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    // minWidth: 300,
    width: '90%',
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
  inputWrapper: {
    flex: 1,
  },
  wrapperInput: {
    backgroundColor: 'white',
    // elevation: 3,
    // borderRadius: 10,
    borderBottomWidth: 2,
    borderColor: SECONDARY_TRANS,
    flexDirection: 'row',
    height: 50,
  },
  btnModal: {
    marginTop: 15,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnModalCancle: {
    marginTop: 15,
    backgroundColor: RED,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default PersonalInformation;
