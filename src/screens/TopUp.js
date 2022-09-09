import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {
  BACK_PRIMARY,
  PRIMARY_COLOR,
  SECONDARY_TRANS,
  WHITE_COLOR,
} from '../styles/constant';
import styles from '../styles/global';
import Icon from 'react-native-vector-icons/FontAwesome';
// import CardTopup from '../components/CardTopup';
import CardListTopup from '../components/CardListTopup';
// import Input from '../components/Input';
import {topUp} from '../redux/action/transaction';
import {getProfile} from '../redux/action/profile';

const topupSechema = Yup.object().shape({
  amount: Yup.number()
    .min(10000, 'minimal 10.000')
    .max(5000000, 'max 5.000.000')
    .required('must fill amount'),
});

const TopUp = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalInfoVisible, setModalInfoVisible] = useState(false);
  const token = useSelector(state => state.authUser.token);
  const successMsg = useSelector(state => state.transactionUser.successMsg);
  const errorMsg = useSelector(state => state.authUser.errorMsg);
  const onTopup = value => {
    const param = {token: token, amount: value.amount};
    dispatch(topUp(param));
    dispatch(getProfile(token));
    setModalInfoVisible(true);
    // navigation.navigate('Home');
  };
  const onModalMsg = () => {
    setModalInfoVisible(false);
    setModalVisible(false);
  };
  return (
    <ScrollView style={styleLocal.wrapper}>
      <Modal
        visible={modalInfoVisible}
        animationType="slide"
        transparent
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalInfoVisible(!modalInfoVisible);
        }}>
        <View style={styleLocal.centeredView}>
          <View style={styleLocal.modalView}>
            <Text style={[styles.tCenter]}>{successMsg}</Text>
            <TouchableOpacity style={styleLocal.btnModal} onPress={onModalMsg}>
              <Text style={[styles.fZ16, styles.fW700, styles.cWhite]}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={[styles.mT15]}>
        {/* <CardTopup /> */}
        <View style={styleLocal.wrapperModal}>
          <View>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styleLocal.wrapperBtn}>
              <Icon name="plus" size={35} color={PRIMARY_COLOR} />
            </TouchableOpacity>
          </View>
          <View style={styleLocal.wrapperText}>
            <Text style={[styles.fZ14, styles.fW400, styles.cCBlack]}>
              Virtual Account Number
            </Text>
            <Text style={[styles.fZ16, styles.fW700, styles.cCBlack]}>
              2389 081393877946
            </Text>
          </View>
        </View>
      </View>
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
            <Formik
              initialValues={{amount: ''}}
              onSubmit={onTopup}
              validationSchema={topupSechema}>
              {({errors, handleChange, handleSubmit, values, isValid}) => (
                <>
                  <View style={[styleLocal.wrapperInput, styles.mB15]}>
                    <View style={[styleLocal.inputWrapper]}>
                      <TextInput
                        name="amount"
                        textAlign={'center'}
                        keyboardType="numeric"
                        placeholder="input amount here"
                        onChangeText={handleChange('amount')}
                        value={values.amount}
                        style={[styles.fZ18, styles.fW600]}
                      />
                    </View>
                  </View>
                  {errors.amount && (
                    <Text style={[styles.fZ14, styles.cCBlack]}>
                      {errors.amount}
                    </Text>
                  )}
                  <TouchableOpacity
                    style={styleLocal.btnModal}
                    onPress={handleSubmit}
                    disabled={!isValid}>
                    <Text style={[styles.fZ16, styles.fW700, styles.cWhite]}>
                      Top up
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </Formik>
          </View>
        </View>
      </Modal>
      {/* <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>testmodal</Text>
      </TouchableOpacity> */}
      <View>
        <Text
          style={[
            styles.fZ16,
            styles.fW400,
            styles.ctBlack,
            styles.tCenter,
            styles.mV15,
          ]}>
          We provide you virtual account number for top up via nearest ATM.
        </Text>
      </View>
      <View style={styleLocal.infoSub}>
        <Text style={[styles.fZ18, styles.fW700, styles.cCBlack]}>
          How to Top-Up
        </Text>
      </View>
      <View>
        <CardListTopup
          number="1"
          paragraft="Go to the nearest ATM or you can
use E-Banking."
        />
        <CardListTopup
          number="2"
          paragraft="Go to the nearest ATM or you can
          use E-Banking.."
        />
        <CardListTopup number="3" paragraft="Select “Transfer” in the menu" />
        <CardListTopup
          number="4"
          paragraft="Type the virtual account number that
          we provide you at the top."
        />
        <CardListTopup
          number="5"
          paragraft="Type the amount of the money you
          want to top up."
        />
        <CardListTopup number="6" paragraft="Read the summary details" />
        <CardListTopup number="7" paragraft="Press transfer / top up" />
        <CardListTopup
          number="8"
          paragraft="You can see your money in Zwallet
          within 3 hours."
        />
      </View>
    </ScrollView>
  );
};

const styleLocal = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    backgroundColor: BACK_PRIMARY,
  },
  infoSub: {
    justifyContent: 'flex-end',
    marginTop: 15,
    marginBottom: 15,
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
  wrapperModal: {
    minHeight: 96,
    backgroundColor: WHITE_COLOR,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  wrapperBtn: {
    height: 56,
    width: 56,
    backgroundColor: BACK_PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 10,
  },
  wrapperText: {
    justifyContent: 'space-around',
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
});

export default TopUp;
