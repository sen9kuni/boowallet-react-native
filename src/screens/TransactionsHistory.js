import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {BACK_PRIMARY, WHITE_COLOR} from '../styles/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/global';
import Cardtransctions from '../components/Cardtransctions';

const TransactionsHistory = () => {
  return (
    <View style={styleLocal.wrapper}>
      <View style={styleLocal.wrapperScroll}>
        <ScrollView>
          <View style={styleLocal.infoSub}>
            <Text style={[styles.fZ16, styles.fW400, styles.cCBlack]}>
              This Week
            </Text>
          </View>
          <Cardtransctions />
          <Cardtransctions />
          <Cardtransctions />
          <Cardtransctions />

          <View style={styleLocal.infoSub}>
            <Text style={[styles.fZ16, styles.fW400, styles.cCBlack]}>
              This Month
            </Text>
          </View>
          <Cardtransctions />
          <Cardtransctions />
          <Cardtransctions />
          <Cardtransctions />
        </ScrollView>
      </View>
      <View style={styleLocal.wrapperButton}>
        <TouchableOpacity style={styleLocal.btnMini}>
          <Icon name="arrow-up" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styleLocal.btnMini}>
          <Icon name="arrow-down" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styleLocal.btnMedium}>
          <Text style={[styles.fZ18, styles.fW700, styles.cPrimary]}>
            Filter by Date
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  wrapper: {
    height: Dimensions.get('screen').height,
    backgroundColor: BACK_PRIMARY,
  },
  wrapperScroll: {
    height: Dimensions.get('screen').height - 150,
  },
  infoSub: {
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
  },
  wrapperButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  btnMini: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: WHITE_COLOR,
    elevation: 1,
  },
  btnMedium: {
    paddingVertical: 16,
    paddingHorizontal: 38,
    borderRadius: 10,
    backgroundColor: WHITE_COLOR,
    elevation: 1,
  },
});

export default TransactionsHistory;
