import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/en';
import styles from '../styles/global';
import {BACK_PRIMARY, PRIMARY_COLOR, WHITE_COLOR} from '../styles/constant';
import logoApp from '../assets/images/applogo.png';
import InfoCard from '../components/InfoCard';
import CardUsersLong from '../components/CardUsersLong';

const numberFormat = value =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value);

const DetailHistoryTransaction = ({route, navigation}) => {
  const data = route.params.item;
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const date = new Date(data.time).toLocaleDateString(undefined, options);
  const onGoBack = async () => {
    navigation.popToTop();
    navigation.navigate('Transaction History');
  };
  return (
    <ScrollView style={styleLocal.wrapper}>
      <View style={styleLocal.header}>
        <Image style={styleLocal.imageStyle} source={logoApp} />
        <Text style={[styles.fZ24, styles.fW700, styles.cWhite]}>
          Detail Transaction
        </Text>
      </View>
      <View style={styleLocal.wrapInfo}>
        <InfoCard infoHeader="type" infoValue={data.type} />
        <InfoCard infoHeader="amount" infoValue={numberFormat(data.amount)} />
        <InfoCard infoHeader="Date & Time" infoValue={date} />
      </View>
      <View style={styleLocal.wrapUser}>
        {data.type !== 'top up' && (
          <>
            <Text
              style={[
                styles.fZ18,
                styles.fW700,
                styles.cCBlack,
                styles.mB15,
                styles.mainPadH,
              ]}>
              Sender
            </Text>
            <View style={[styles.mainPadH, styles.mB15]}>
              <CardUsersLong
                fullname={`${data.senderfirstname} ${data.senderlastname}`}
                imageSrc={data.imgsender}
                phonenum={data.phonenumbersender}
              />
            </View>
          </>
        )}
        <Text
          style={[
            styles.fZ18,
            styles.fW700,
            styles.cCBlack,
            styles.mB15,
            styles.mainPadH,
          ]}>
          Receiver
        </Text>
        <View style={[styles.mainPadH, styles.mB15]}>
          <CardUsersLong
            fullname={`${data.receiverfirstname} ${data.receiverlastname}`}
            imageSrc={data.imgreceiver}
            phonenum={data.phonenumberreceiver}
          />
        </View>
      </View>
      <View style={[styles.mainPadH]}>
        <TouchableOpacity style={[styleLocal.btnBack]} onPress={onGoBack}>
          <Text style={[styles.cWhite, styles.fZ18, styles.fW700]}>back</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styleLocal = StyleSheet.create({
  wrapper: {
    // height: Dimensions.get('screen').height,
    backgroundColor: BACK_PRIMARY,
    // paddingHorizontal: 16,
  },
  header: {
    backgroundColor: PRIMARY_COLOR,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 1,
  },
  imageStyle: {
    width: 70,
    height: 70,
    marginBottom: 20,
  },
  wrapInfo: {
    height: 350,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
  },
  wrapUser: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  btnBack: {
    width: '100%',
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 10,
    elevation: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailHistoryTransaction;
