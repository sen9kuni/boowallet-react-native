import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Alert,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BACK_PRIMARY, PRIMARY_COLOR} from '../styles/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/global';
import ReactPinView from 'react-native-pin-view';
import {changePin} from '../redux/action/profile';

const NewPin = ({navigation}) => {
  const pinView = useRef(null);
  const [enteredPin, setEnteredPin] = React.useState('');
  const [showRemoveButton, setShowRemoveButton] = React.useState(false);
  const [showCompletedButton, setShowCompletedButton] = React.useState(false);
  const dispatch = useDispatch();
  const token = useSelector(state => state.authUser.token);
  const CurrentPin = useSelector(state => state.profileUser.CurrentPin);
  const successMsg = useSelector(state => state.profileUser.successMsg);
  const errorMsg = useSelector(state => state.profileUser.errorMsg);
  const [modalVisible, setModalVisible] = useState(false);
  const onModal = () => {
    navigation.navigate('profile');
  };
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
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styleLocal.centeredView}>
          <View style={styleLocal.modalView}>
            <Text>
              {successMsg === 'Change Pin successfully' ? successMsg : errorMsg}
            </Text>
            <TouchableOpacity style={styleLocal.btnModal} onPress={onModal}>
              <Text style={[styles.fZ16, styles.fW700, styles.cWhite]}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Text
        style={[
          styles.fZ16,
          styles.fW400,
          styles.ctBlack,
          styles.mV15,
          styles.mB60,
        ]}>
        Type your new 6 digits security PIN to use in Zwallet.
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
              const param = {
                token: token,
                currentPin: CurrentPin,
                newPin: enteredPin,
              };
              dispatch(changePin(param));
              setModalVisible(true);
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

export default NewPin;
