import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles/global';

const ButtonAuth = ({textButton, onClick}) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.button}>
        <Text style={[styles.cWhite, styles.fZ18, styles.fW700]}>
          {textButton}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonAuth;
