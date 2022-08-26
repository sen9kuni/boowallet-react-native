import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useRef} from 'react';
import {BACK_PRIMARY} from '../styles/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/global';
import CardUsersLong from '../components/CardUsersLong';
import InfoCard from '../components/InfoCard';

const TransactionFailed = () => {
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
        <InfoCard infoHeader="amount" infoValue="Rp100.000" />
        <InfoCard infoHeader="Balance Left" infoValue="Rp20.000" />
        <InfoCard infoHeader="Date & Time" infoValue="May 11, 2020 - 12.20" />
        <InfoCard infoHeader="Notes" infoValue="For buying some socks" />
      </View>
      <View style={styleLocal.infoSub}>
        <Text style={[styles.fZ18, styles.fW700, styles.cCBlack]}>
          Transfer to
        </Text>
      </View>
      <View style={[styles.mB15]}>
        <CardUsersLong />
      </View>
      <View style={[styles.buttonWrapper, styleLocal.marginTButton]}>
        <TouchableOpacity>
          <View style={styles.button}>
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
});

export default TransactionFailed;
