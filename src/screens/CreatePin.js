import {View, Text, ScrollView, StyleSheet, Alert} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useRef} from 'react';
import styles from '../styles/global';

import ReactPinView from 'react-native-pin-view';
import {PRIMARY_COLOR} from '../styles/constant';

const CreatePin = () => {
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
    <ScrollView style={styles.wrapperMain}>
      <View style={styles.header}>
        <Text style={styles.textLogo}>Boo-Wallet</Text>
      </View>
      <View style={styles.bodyMain}>
        <View style={styles.infoAuth}>
          <Text style={[styles.fZ24, styles.textCenter, styles.fW700]}>
            Create Security PIN
          </Text>
          <Text style={[styles.fZ16, styles.textCenter, styles.fW400]}>
            Create a PIN that's contain 6 digits number for security purpose in
            FazzPay.
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
    </ScrollView>
  );
};

const styleLocal = StyleSheet.create({
  mbToButton: {
    marginBottom: 42,
  },
  marginButton: {
    marginBottom: 15,
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

export default CreatePin;
