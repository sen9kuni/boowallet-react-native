import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/en';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {BACK_PRIMARY, PRIMARY_COLOR, SECONDARY_BLACK} from '../styles/constant';
import styles from '../styles/global';
import CardUsersLong from '../components/CardUsersLong';
import Input from '../components/Input';
import {useDispatch, useSelector} from 'react-redux';
import {setDataTrans} from '../redux/reducers/transactionUser';

const transSechema = Yup.object().shape({
  amount: Yup.number()
    .min(10000, 'minimal 10.000')
    .max(5000000, 'max 5.000.000')
    .required('must fill amount'),
});

export const numberFormat = value =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value);

const AmountInput = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.authUser.token);
  const dataProfile = useSelector(
    state => state.transactionUser.dataChoseprofile,
  );
  const dataProfilelogin = useSelector(state => state.profileUser.dataprofile);
  const onTrans = value => {
    // console.log(value);
    const param = {
      token: token,
      note: value.note === '' ? '-' : value.note,
      amount: parseInt(value.amount, 10),
      user_id: parseInt(dataProfile.user_id, 10),
      time: new Date().toISOString(),
    };
    // console.log(param);
    dispatch(setDataTrans(param));
    navigation.navigate('confirmation');
  };
  return (
    <View style={styleLocal.wrapper}>
      <CardUsersLong
        fullname={`${dataProfile.first_name} ${dataProfile.last_name}`}
        imageSrc={dataProfile.picture}
        phonenum={dataProfile.phonenumber}
      />
      <View style={styleLocal.balanceWrapper}>
        <Text
          style={[styles.tCenter, styles.fZ16, styles.fW700, styles.cCBlack]}>
          {numberFormat(parseInt(dataProfilelogin?.balance, 10))} Available
        </Text>
      </View>
      <Formik
        initialValues={{amount: '', note: ''}}
        validationSchema={transSechema}
        onSubmit={onTrans}>
        {({errors, handleChange, handleSubmit, values, isValid}) => (
          <>
            <View style={[styleLocal.amountInput, styles.bgWhite]}>
              <TextInput
                name="amount"
                placeholder="0.00"
                style={[styles.fZ42, styles.fW700, styles.tCenter]}
                keyboardType="numeric"
                value={values.amount}
                onChangeText={handleChange('amount')}
              />
              {errors.amount && (
                <Text style={[styles.fZ14, styles.cCBlack, styles.tCenter]}>
                  {errors.amount}
                </Text>
              )}
            </View>
            <View>
              <Input
                name="note"
                palceHolder="Add some notes"
                icon="pencil"
                type="email-address"
                value={values.note}
                onChange={handleChange('note')}
              />
            </View>
            <View>
              <View style={[styleLocal.marginTButton]}>
                <TouchableOpacity
                  onPress={handleSubmit}
                  disabled={
                    !isValid ||
                    values.amount > parseInt(dataProfilelogin?.balance, 10)
                  }>
                  <View
                    style={
                      !isValid
                        ? styleLocal.buttonDisable
                        : values.amount >
                          parseInt(dataProfilelogin?.balance, 10)
                        ? styleLocal.buttonDisable
                        : styleLocal.button
                    }>
                    <Text style={[styles.cWhite, styles.fZ18, styles.fW700]}>
                      Continue
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </Formik>
      {/* <View style={[styleLocal.amountInput, styles.bgWhite]}>
        <TextInput
          placeholder="0.00"
          style={[styles.fZ42, styles.fW700, styles.tCenter]}
          keyboardType="numeric"
        />
      </View>
      <View>
        <Input
          palceHolder="Add some notes"
          icon="pencil"
          type="email-address"
        />
      </View>
      <View>
        <View style={[styleLocal.marginTButton]}>
          <TouchableOpacity>
            <View style={styleLocal.button}>
              <Text style={[styles.cWhite, styles.fZ18, styles.fW700]}>
                Continue
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View> */}
    </View>
  );
};

const styleLocal = StyleSheet.create({
  wrapper: {
    padding: 16,
    backgroundColor: BACK_PRIMARY,
    height: Dimensions.get('screen').height,
    flexDirection: 'column',
  },
  balanceWrapper: {
    marginVertical: 20,
  },
  amountInput: {
    marginBottom: 53,
    // backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 16,
    elevation: 1,
  },
  marginTButton: {
    marginBottom: 50,
    marginTop: 180,
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 12,
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
});

export default AmountInput;
