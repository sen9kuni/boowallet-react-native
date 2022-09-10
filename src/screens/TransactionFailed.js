import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/en';
import {BACK_PRIMARY, PRIMARY_COLOR} from '../styles/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/global';
import CardUsersLong from '../components/CardUsersLong';
import InfoCard from '../components/InfoCard';
import {useSelector} from 'react-redux';

export const numberFormat = value =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value);

const TransactionFailed = ({navigation}) => {
  const dataTrans = useSelector(state => state.transactionUser.dataTrans);
  const dataProfilelogin = useSelector(state => state.profileUser.dataprofile);
  const dataProfile = useSelector(
    state => state.transactionUser.dataChoseprofile,
  );
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const date = new Date(dataTrans.time).toLocaleDateString(undefined, options);
  return (
    <ScrollView style={styleLocal.wrapper}>
      <View style={styleLocal.wrapperInfo}>
        <View style={[styleLocal.circleCheck, styles.mT15]}>
          <Icon name="remove" size={40} color="white" />
        </View>
        <Text style={[styles.fZ24, styles.fW700, styles.cCBlack]}>
          Transfer Failed
        </Text>
        <Text
          style={[styles.fZ16, styles.fW400, styles.cCBlack, styles.tCenter]}>
          We can't transfer your money at the moment, we recommend you to check
          your internet connection and try again.
        </Text>
      </View>
      <View style={styleLocal.infoSub}>
        <Text style={[styles.fZ18, styles.fW700, styles.cCBlack]}>Details</Text>
      </View>
      <View style={styleLocal.wrapInfo}>
        <InfoCard
          infoHeader="amount"
          infoValue={numberFormat(dataTrans.amount)}
        />
        <InfoCard
          infoHeader="Balance Left"
          infoValue={numberFormat(
            parseInt(dataProfilelogin.balance, 10) - dataTrans.amount,
          )}
        />
        <InfoCard infoHeader="Date & Time" infoValue={date} />
        <InfoCard infoHeader="Notes" infoValue={dataTrans.note} />
      </View>
      <View style={styleLocal.infoSub}>
        <Text style={[styles.fZ18, styles.fW700, styles.cCBlack]}>
          Transfer to
        </Text>
      </View>
      <View style={[styles.mB15]}>
        <CardUsersLong
          fullname={`${dataProfile.first_name} ${dataProfile.last_name}`}
          imageSrc={dataProfile.picture}
          phonenum={dataProfile.phonenumber}
        />
      </View>
      <View style={[styleLocal.marginTButton]}>
        <TouchableOpacity
          onPress={() => {
            navigation.popToTop();
            navigation.navigate('search');
          }}>
          <View style={styleLocal.button}>
            <Text style={[styles.cWhite, styles.fZ18, styles.fW700]}>
              Try Again
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styleLocal = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    backgroundColor: BACK_PRIMARY,
  },
  circleCheck: {
    height: 70,
    width: 70,
    backgroundColor: 'red',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperInfo: {
    height: 300,
    paddingVertical: 35,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoSub: {
    justifyContent: 'flex-end',
    marginTop: 15,
    marginBottom: 15,
  },
  wrapInfo: {
    height: 450,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  marginTButton: {
    marginBottom: 50,
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
});

export default TransactionFailed;
