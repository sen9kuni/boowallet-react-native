import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useRef} from 'react';
import {BACK_PRIMARY} from '../styles/constant';
import styles from '../styles/global';
import CardTopup from '../components/CardTopup';
import CardListTopup from '../components/CardListTopup';

const TopUp = () => {
  return (
    <ScrollView style={styleLocal.wrapper}>
      <View style={[styles.mT15]}>
        <CardTopup />
      </View>
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
});

export default TopUp;
