import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';

import styles from '../styles/global';
import Input from '../components/Input';
import {register} from '../redux/action/authUser';
import {PRIMARY_COLOR} from '../styles/constant';

const registerSechema = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required(),
  password: Yup.string().min(8).required(),
  first_name: Yup.string()
    .min(3, 'first name min 3')
    .required('first name is required field'),
  last_name: Yup.string()
    .min(3, 'last name min 3')
    .required('last name is required field'),
});

const Signup = ({navigation}) => {
  const dispatch = useDispatch();
  const successMsg = useSelector(state => state.authUser.successMsg);
  const errorMsg = useSelector(state => state.authUser.errorMsg);
  const [modalVisible, setModalVisible] = React.useState(false);
  const onRegister = async value => {
    await dispatch(register(value));
    setModalVisible(true);
  };
  const onModal = () => {
    if (errorMsg === 'Email already exists') {
      setModalVisible(false);
    } else if (successMsg === 'Register successfully') {
      navigation.navigate('login');
    }
  };
  return (
    <ScrollView style={styles.wrapperMain}>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => {
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
      <View style={styles.header}>
        <Text style={styles.textLogo}>Boo-Wallet</Text>
      </View>
      <View style={styles.bodyMain}>
        <View style={styles.infoAuth}>
          <Text style={[styles.fZ24, styles.textCenter, styles.fW700]}>
            Sign Up
          </Text>
          <Text style={[styles.fZ16, styles.textCenter, styles.fW400]}>
            Create your account to access Boo-Wallet.
          </Text>
        </View>
        <Formik
          initialValues={{
            first_name: '',
            last_name: '',
            password: '',
            email: '',
          }}
          onSubmit={onRegister}
          validationSchema={registerSechema}>
          {({errors, handleChange, handleSubmit, values, isValid}) => (
            <View style={styles.content}>
              <View style={styles.mB60}>
                <Input
                  name="first_name"
                  onChange={handleChange('first_name')}
                  palceHolder="Enter your first name"
                  icon="user"
                  type="email-address"
                  value={values.first_name}
                />
                {errors.first_name && (
                  <Text style={[styles.fZ14, styles.cCBlack]}>
                    {errors.first_name}
                  </Text>
                )}
              </View>
              <View style={styles.mB60}>
                <Input
                  name="last_name"
                  onChange={handleChange('last_name')}
                  palceHolder="Enter your last name"
                  icon="user"
                  type="email-address"
                  value={values.last_name}
                />
                {errors.last_name && (
                  <Text style={[styles.fZ14, styles.cCBlack]}>
                    {errors.last_name}
                  </Text>
                )}
              </View>
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
              <View style={[styles.mB15, styleLocal.mbToButton]}>
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
              <View style={[styles.buttonWrapper, styleLocal.marginButton]}>
                <TouchableOpacity onPress={handleSubmit}>
                  <View style={styles.button}>
                    <Text style={[styles.cWhite, styles.fZ18, styles.fW700]}>
                      Sign Up
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styleLocal.marginButton}>
                <Text style={[styles.fZ16, styles.fW400, styles.textCenter]}>
                  Already have an account? Let's
                  <TouchableOpacity
                    onPress={() => navigation.navigate('login')}>
                    <Text style={[styles.fZ16, styles.fW700, styles.cPrimary]}>
                      {' '}
                      Login
                    </Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const styleLocal = StyleSheet.create({
  mbToButton: {
    marginBottom: 42,
  },
  marginButton: {
    marginBottom: 15,
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

export default Signup;
