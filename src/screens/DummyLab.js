import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {
  BACK_PRIMARY,
  PRIMARY_COLOR,
  SECONDARY_TRANS,
  WHITE_COLOR,
} from '../styles/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/global';
import imageProfile from '../assets/profile/mainprofile.png';
import Cardtransctions from '../components/Cardtransctions';
import GraficImage from '../assets/images/graphicstat.png';
import CardUsers from '../components/CardUsers';
import CardUsersLong from '../components/CardUsersLong';

const DummyLab = () => {
  return (
    <View style={styleLocal.wrapper}>
      <View style={styleLocal.infoSub}>
        <Text style={[styles.fZ18, styles.fW700, styles.cCBlack]}>
          Quick Access
        </Text>
      </View>
      <View style={styleLocal.wrapScrollHorisontal}>
        <ScrollView horizontal={true}>
          <CardUsers />
          <CardUsers />
          <CardUsers />
          <CardUsers />
          <CardUsers />
        </ScrollView>
      </View>
      <View style={styleLocal.wrapScrollVer}>
        <ScrollView>
          <CardUsersLong />
          <CardUsersLong />
          <CardUsersLong />
          <CardUsersLong />
          <CardUsersLong />
          <CardUsersLong />
          <CardUsersLong />
          <CardUsersLong />
        </ScrollView>
      </View>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  wrapper: {
    backgroundColor: BACK_PRIMARY,
  },
  infoSub: {
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
  },
  wrapScrollHorisontal: {
    height: 150,
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  wrapScrollVer: {
    height: Dimensions.get('screen').height - 30,
  },
});

export default DummyLab;
