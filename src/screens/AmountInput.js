import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {BACK_PRIMARY} from '../styles/constant';
import styles from '../styles/global';
import CardUsersLong from '../components/CardUsersLong';
import Input from '../components/Input';

const AmountInput = () => {
  return (
    <View style={styleLocal.wrapper}>
      <CardUsersLong />
      <View style={styleLocal.balanceWrapper}>
        <Text
          style={[styles.tCenter, styles.fZ16, styles.fW700, styles.cCBlack]}>
          Rp120.000 Available
        </Text>
      </View>
      <View style={[styleLocal.amountInput, styles.bgWhite]}>
        <TextInput
          placeholder="0.00"
          style={[styles.fZ42, styles.fW700, styles.tCenter]}
          keyboardType="numeric"
        />
      </View>
      <View>
        <Input
          palceHolder="Add some notes"
          icon="pencil"
          type="email-address"
        />
      </View>
      <View>
        <View style={[styles.buttonWrapper, styleLocal.marginTButton]}>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={[styles.cWhite, styles.fZ18, styles.fW700]}>
                Continue
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  wrapper: {
    padding: 16,
    backgroundColor: BACK_PRIMARY,
    height: Dimensions.get('screen').height,
    flexDirection: 'column',
  },
  balanceWrapper: {
    marginVertical: 20,
  },
  amountInput: {
    marginBottom: 53,
    // backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 16,
    elevation: 1,
  },
  marginTButton: {
    marginTop: 50,
  },
});

export default AmountInput;
