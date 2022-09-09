import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Alert,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useRef} from 'react';
import {PRIMARY_COLOR} from '../styles/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/global';
import ReactPinView from 'react-native-pin-view';
import {useDispatch, useSelector} from 'react-redux';
import {transfer} from '../redux/action/transaction';

const TransferPin = ({navigation}) => {
  const dispatch = useDispatch();
  const pinView = useRef(null);
  const dataTrans = useSelector(state => state.transactionUser.dataTrans);
  const token = useSelector(state => state.authUser.token);
  const loginId = useSelector(state => state.authUser.id);
  const successMsg = useSelector(state => state.transactionUser.successMsg);
  const errorMsg = useSelector(state => state.transactionUser.errorMsg);
  const [modalVisible, setModalVisible] = React.useState(false);
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
  const onModal = () => {
    successMsg !== 'Wrong input Pin'
      ? navigation.navigate('transaction success')
      : navigation.navigate('transaction failed');
    setModalVisible(false);
  };
  const onTransfer = value => {
    const param = {
      amount: dataTrans.amount,
      note: dataTrans.note,
      recipient_id: dataTrans.user_id,
      pin: value,
      time: dataTrans.time,
      token: token,
    };
    // console.log(param);
    setModalVisible(true);
    dispatch(transfer(param));
  };
  // console.log(dataTrans);
  return (
    <View style={styleLocal.wrapper}>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        // onRequestClose={() => {
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={styleLocal.centeredView}>
          <View style={styleLocal.modalView}>
            <Text>{successMsg}</Text>
            <TouchableOpacity style={styleLocal.btnModal} onPress={onModal}>
              <Text style={[styles.fZ16, styles.fW700, styles.cWhite]}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
              // Alert.alert('Entered Pin: ' + enteredPin);
              onTransfer(enteredPin);
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

export default TransferPin;
