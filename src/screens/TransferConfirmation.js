import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {BACK_PRIMARY} from '../styles/constant';
import styles from '../styles/global';
import CardUsersLong from '../components/CardUsersLong';
import InfoCard from '../components/InfoCard';

const TransferConfirmation = () => {
  return (
    <ScrollView style={styleLocal.wrapper}>
      <View style={styleLocal.infoSub}>
        <Text style={[styles.fZ18, styles.fW700, styles.cCBlack]}>
          Transfer to
        </Text>
      </View>
      <View style={[styles.mB15]}>
        <CardUsersLong />
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
      <View style={[styles.buttonWrapper, styleLocal.marginTButton]}>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={[styles.cWhite, styles.fZ18, styles.fW700]}>
              Continue
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
  infoSub: {
    justifyContent: 'flex-end',
    marginTop: 15,
  },
  wrapInfo: {
    height: 450,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  marginTButton: {
    marginTop: 50,
    marginBottom: 50,
  },
});

export default TransferConfirmation;
