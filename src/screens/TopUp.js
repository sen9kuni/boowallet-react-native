import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {BACK_PRIMARY} from '../styles/constant';
import styles from '../styles/global';
import CardTopup from '../components/CardTopup';
import CardListTopup from '../components/CardListTopup';

const TopUp = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView style={styleLocal.wrapper}>
      <View style={[styles.mT15]}>
        <CardTopup />
      </View>
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
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text>Modal brooooo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>testmodal</Text>
      </TouchableOpacity>
      <View>
        <Text
          style={[
            styles.fZ16,
            styles.fW400,
            styles.ctBlack,
            styles.tCenter,
            styles.mV15,
          ]}>
          We provide you virtual account number for top up via nearest ATM.
        </Text>
      </View>
      <View style={styleLocal.infoSub}>
        <Text style={[styles.fZ18, styles.fW700, styles.cCBlack]}>
          How to Top-Up
        </Text>
      </View>
      <View>
        <CardListTopup
          number="1"
          paragraft="Go to the nearest ATM or you can
use E-Banking."
        />
        <CardListTopup
          number="2"
          paragraft="Go to the nearest ATM or you can
          use E-Banking.."
        />
        <CardListTopup number="3" paragraft="Select “Transfer” in the menu" />
        <CardListTopup
          number="4"
          paragraft="Type the virtual account number that
          we provide you at the top."
        />
        <CardListTopup
          number="5"
          paragraft="Type the amount of the money you
          want to top up."
        />
        <CardListTopup number="6" paragraft="Read the summary details" />
        <CardListTopup number="7" paragraft="Press transfer / top up" />
        <CardListTopup
          number="8"
          paragraft="You can see your money in Zwallet
          within 3 hours."
        />
      </View>
    </ScrollView>
  );
};

const styleLocal = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    backgroundColor: BACK_PRIMARY,
  },
  infoSub: {
    justifyContent: 'flex-end',
    marginTop: 15,
    marginBottom: 15,
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
});

export default TopUp;
