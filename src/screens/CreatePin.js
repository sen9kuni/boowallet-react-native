import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useRef} from 'react';
import styles from '../styles/global';

import ReactPinView from 'react-native-pin-view';
import {PRIMARY_COLOR} from '../styles/constant';
import {useDispatch, useSelector} from 'react-redux';
import {createPin} from '../redux/action/authUser';

const CreatePin = ({navigation}) => {
  const pinView = useRef(null);
  const dispatch = useDispatch();
  const email = useSelector(state => state.authUser.email);
  const successMsgPin = useSelector(state => state.authUser.successMsgPin);
  const errorMsg = useSelector(state => state.authUser.errorMsg);
  const [enteredPin, setEnteredPin] = React.useState('');
  const [showRemoveButton, setShowRemoveButton] = React.useState(false);
  const [showCompletedButton, setShowCompletedButton] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
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
  const onCreatePin = async value => {
    // console.log(value);
    const param = {email: email, pin: value};
    console.log(param);
    await dispatch(createPin(param));
    setModalVisible(true);
    // if (successMsgPin === 'Create Pin Success') {
    //   navigation.navigate('Pin Success');
    // } else if (errorMsg === 'Error: pin already set') {
    //   Alert.alert('pin alredy set');
    //   navigation.navigate('Home');
    // }
  };
  const onModal = () => {
    if (successMsgPin === 'Create Pin Success') {
      navigation.navigate('PinSuccess');
    } else if (errorMsg === 'Error: pin already set') {
      // Alert.alert('pin alredy set');
      navigation.navigate('Home');
    }
  };
  return (
    <ScrollView style={styles.wrapperMain}>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styleLocal.centeredView}>
          <View style={styleLocal.modalView}>
            <Text>{successMsgPin ? successMsgPin : errorMsg}</Text>
            <TouchableOpacity style={styleLocal.btnModal} onPress={onModal}>
              <Text style={[styles.fZ16, styles.fW700, styles.cWhite]}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
            Boo-Wallet.
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
                // Alert.alert('Entered Pin: ' + enteredPin);
                onCreatePin(enteredPin);
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  btnModal: {
    marginTop: 15,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default CreatePin;
