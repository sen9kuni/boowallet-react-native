import {View, Text, StyleSheet, Dimensions, Alert} from 'react-native';
import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BACK_PRIMARY, PRIMARY_COLOR} from '../styles/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/global';
import ReactPinView from 'react-native-pin-view';
import {setCurrentPin} from '../redux/reducers/profileUser';

const CurrentPin = ({navigation}) => {
  const dispatch = useDispatch();
  const pinView = useRef(null);
  const [enteredPin, setEnteredPin] = React.useState('');
  const [showRemoveButton, setShowRemoveButton] = React.useState(false);
  const [showCompletedButton, setShowCompletedButton] = React.useState(false);
  React.useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true);
    } else {
      setShowRemoveButton(false);
    }
    if (enteredPin.length === 6) {
      setShowCompletedButton(true);
    } else {
      setShowCompletedButton(false);
    }
  }, [enteredPin]);
  return (
    <View style={styleLocal.wrapper}>
      <Text
        style={[
          styles.fZ16,
          styles.fW400,
          styles.ctBlack,
          styles.mV15,
          styles.mB60,
        ]}>
        Enter your current 6 digits Zwallet PIN below to continue to the next
        steps.
      </Text>
      <View style={[styles.content]}>
        <ReactPinView
          pinLength={6}
          ref={pinView}
          buttonTextStyle={styles.cPrimary}
          onValueChange={value => setEnteredPin(value)}
          inputViewEmptyStyle={styleLocal.emptyValue}
          inputViewFilledStyle={styleLocal.fillValue}
          buttonViewStyle={styleLocal.btnView}
          onButtonPress={key => {
            if (key === 'custom_left') {
              pinView.current.clear();
            }
            if (key === 'custom_right') {
              // Alert.alert('Entered Pin: ' + enteredPin);
              dispatch(setCurrentPin(enteredPin));
              navigation.navigate('input new pin');
            }
          }}
          customLeftButton={
            showRemoveButton ? (
              <Icon name="remove" size={36} color={PRIMARY_COLOR} />
            ) : undefined
          }
          customRightButton={
            showCompletedButton ? (
              <Icon name="check" size={36} color={PRIMARY_COLOR} />
            ) : undefined
          }
        />
      </View>
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
  marginTButton: {
    marginBottom: 50,
  },
  emptyValue: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
  },
  fillValue: {
    borderColor: PRIMARY_COLOR,
  },
  btnView: {
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
  },
});

export default CurrentPin;
