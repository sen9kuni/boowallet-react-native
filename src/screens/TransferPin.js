import {View, Text, StyleSheet, Dimensions, Alert} from 'react-native';
import React, {useRef} from 'react';
import {PRIMARY_COLOR} from '../styles/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/global';
import ReactPinView from 'react-native-pin-view';

const TransferPin = () => {
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
      <View style={styleLocal.pgWrapper}>
        <Text style={[styles.fZ16, styles.fW400, styles.tCenter]}>
          Enter your 6 digits PIN for confirmation to continue transferring
          money.
        </Text>
      </View>
      <View style={styles.content}>
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
              Alert.alert('Entered Pin: ' + enteredPin);
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
    height: Dimensions.get('screen').height,
  },
  pgWrapper: {
    marginVertical: 50,
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

export default TransferPin;
