import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import styles from '../styles/global';
import ImageProfile from './ImageProfile';
import imageSource from '../assets/profile/mainprofile.png';
import {WHITE_COLOR} from '../styles/constant';

const CardTransactionExpense = ({fullname, typeTrans, amount, imageSrc}) => {
  return (
    <View style={styleLocal.warpperCildernHeader}>
      <View style={styleLocal.wrapper}>
        <View style={styleLocal.warpperImageName}>
          <ImageProfile
            sourceImage={
              imageSrc === null
                ? imageSource
                : imageSrc === undefined
                ? imageSource
                : {uri: imageSrc}
            }
          />
        </View>
        <View style={styleLocal.warpperNameProfile}>
          <Text style={[styles.fZ16, styles.fW700, styles.cCBlack]}>
            {fullname}
          </Text>
          <Text style={[styles.fZ14, styles.fW400, styles.cSecondary]}>
            {typeTrans}
          </Text>
        </View>
      </View>
      <View>
        <Text style={[styles.fZ18, styles.fW700, styles.cRed]}>-{amount}</Text>
      </View>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  warpperCildernHeader: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginVertical: 10,
    backgroundColor: WHITE_COLOR,
    elevation: 1,
  },
  wrapperMain: {
    elevation: 1,
  },
  wrapper: {
    flexDirection: 'row',
    backgroundColor: WHITE_COLOR,
  },
  warpperImageName: {
    flexDirection: 'row',
  },
  warpperNameProfile: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default CardTransactionExpense;
