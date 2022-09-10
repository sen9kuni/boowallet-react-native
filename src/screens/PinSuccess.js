import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import styles from '../styles/global';
import {BACK_PRIMARY, PRIMARY_COLOR, WHITE_COLOR} from '../styles/constant';
import Icon from 'react-native-vector-icons/FontAwesome';

const PinSuccess = ({navigation}) => {
  return (
    <ScrollView style={styleLocal.mainWrapper}>
      <View style={styleLocal.wrapper}>
        <Text style={styles.textLogo}>Boo-Wallet</Text>
      </View>
      <View style={styleLocal.wrapperButton}>
        <View style={[styleLocal.circleCheck, styles.mT15]}>
          <Icon name="check" size={40} color="white" />
        </View>
        <View style={styles.infoAuth}>
          <Text
            style={[styles.fZ24, styles.textCenter, styles.fW700, styles.mB15]}>
            PIN Successfully Created
          </Text>
          <Text style={[styles.fZ16, styles.textCenter, styles.fW400]}>
            Your PIN was successfully created and you can now access all the
            features in Boo-Wallet. Login to your new account and start
            exploring!
          </Text>
        </View>
        <View style={[styles.buttonWrapper, styleLocal.marginButton]}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.button}>
              <Text style={[styles.cWhite, styles.fZ18, styles.fW700]}>
                Home
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styleLocal = StyleSheet.create({
  mainWrapper: {
    backgroundColor: BACK_PRIMARY,
  },
  circleCheck: {
    height: 70,
    width: 70,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    height: Dimensions.get('screen').height / 3,
    justifyContent: 'center',
  },
  wrapperButton: {
    flex: 1,
    height: Dimensions.get('screen').height / 2,
    justifyContent: 'center',
    elevation: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    backgroundColor: WHITE_COLOR,
  },
});

export default PinSuccess;
