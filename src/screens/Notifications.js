import {View, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {BACK_PRIMARY} from '../styles/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';
import NotifIn from '../components/NotifIn';

const DummyLab = () => {
  return (
    <View style={styleLocal.wrapper}>
      <NotifIn
        positionUser="reciver"
        title="Transfered from Joshua Lee"
        amount="Rp220.000"
      />
      <NotifIn
        positionUser="sender"
        title="Transfered to Joshua Lee"
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
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'purple',
    height: 40,
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DummyLab;
