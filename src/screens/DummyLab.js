import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Alert,
  Switch,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  BACK_PRIMARY,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SECONDARY_TRANS,
  WHITE_COLOR,
} from '../styles/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';
import styles from '../styles/global';
import imageProfile from '../assets/profile/mainprofile.png';
import Cardtransctions from '../components/Cardtransctions';
import GraficImage from '../assets/images/graphicstat.png';
import CardUsers from '../components/CardUsers';
import CardUsersLong from '../components/CardUsersLong';
import Input from '../components/Input';
import InfoCard from '../components/InfoCard';
import ReactPinView from 'react-native-pin-view';
import CardTopup from '../components/CardTopup';
import CardListTopup from '../components/CardListTopup';
import imageSource from '../assets/profile/mainprofile.png';
import ButtonProfile from '../components/ButtonProfile';
import CardProfileInfo from '../components/CardProfileInfo';
import InputPhone from '../components/InputPhone';
import NotifIn from '../components/NotifIn';

const DummyLab = () => {
  return (
    <View style={styleLocal.wrapper}>
      <Text>hello</Text>
      <NotifIn
        positionUser="reciver"
        title="Transfered from Joshua Lee"
        amount="Rp220.000"
      />
      <NotifIn
        positionUser="sender"
        title="Transfered from Joshua Lee"
        amount="Rp220.000"
      />
    </View>
  );
};

const styleLocal = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    backgroundColor: BACK_PRIMARY,
    height: Dimensions.get('screen').height,
    flexDirection: 'column',
  },
});

export default DummyLab;
