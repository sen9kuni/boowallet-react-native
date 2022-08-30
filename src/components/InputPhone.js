import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PRIMARY_COLOR, SECONDARY_TRANS} from '../styles/constant';
import styles from '../styles/global';

const InputPhone = ({
  palceHolder,
  icon,
  type,
  onChange,
  value,
  defaultValue,
  name,
}) => {
  return (
    <View style={stylesLocal.wrapper}>
      <View style={stylesLocal.iconWraper}>
        <Icon name={icon} size={20} color={PRIMARY_COLOR} />
      </View>
      <View style={styles.mR15}>
        <Text style={[styles.fZ16, styles.fW600, styles.cCBlack]}>+62</Text>
      </View>
      <View style={stylesLocal.inputWrapper}>
        <TextInput
          name={name}
          placeholder={palceHolder}
          keyboardType={type}
          onChangeText={onChange}
          value={value}
          defaultValue={defaultValue}
        />
      </View>
    </View>
  );
};

const stylesLocal = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    // elevation: 3,
    // borderRadius: 10,
    borderBottomWidth: 2,
    borderColor: SECONDARY_TRANS,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  iconWraper: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
  },
});

export default InputPhone;
