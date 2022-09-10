import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import styles from '../styles/global';
import Icon from 'react-native-vector-icons/FontAwesome';
import {GREEN, RED, WHITE_COLOR} from '../styles/constant';

const NotifIn = ({positionUser, title, amount}) => {
  return (
    <View style={styleLocal.wrapper}>
      <View style={[styles.mR15]}>
        <Icon
          name={positionUser === 'reciver' ? 'arrow-down' : 'arrow-up'}
          size={30}
          color={positionUser === 'reciver' ? GREEN : RED}
        />
      </View>
      <View style={styleLocal.wraperText}>
        <Text style={[styles.fZ14, styles.fW400, styles.ctBlack]}>{title}</Text>
        <Text style={[styles.fZ18, styles.fW700, styles.cCBlack]}>
          {amount}
        </Text>
      </View>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  wrapper: {
    minHeight: 92,
    backgroundColor: WHITE_COLOR,
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
  },
  wraperText: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default NotifIn;
