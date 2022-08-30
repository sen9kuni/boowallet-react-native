import React from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PRIMARY_COLOR, SECONDARY_TRANS} from '../styles/constant';

const Input = ({
  palceHolder,
  icon,
  type,
  secure,
  onChange,
  value,
  defaultValue,
  name,
}) => {
  const [showText, setShow] = React.useState(false);
  return (
    <View style={styles.wrapper}>
      <View style={styles.iconWraper}>
        <Icon name={icon} size={20} color={PRIMARY_COLOR} />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          name={name}
          placeholder={palceHolder}
          keyboardType={type}
          secureTextEntry={!showText}
          onChangeText={onChange}
          value={value}
          defaultValue={defaultValue}
        />
      </View>
      {secure && (
        <TouchableOpacity onPress={() => setShow(!showText)}>
          <View style={styles.iconWraper}>
            <Icon
              name={showText ? 'eye-slash' : 'eye'}
              size={20}
              color={PRIMARY_COLOR}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    // elevation: 3,
    // borderRadius: 10,
    borderBottomWidth: 2,
    borderColor: SECONDARY_TRANS,
    flexDirection: 'row',
    height: 50,
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

export default Input;
