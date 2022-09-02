import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {WHITE_COLOR} from '../styles/constant';
import styles from '../styles/global';
import ImageProfile from './ImageProfile';
import imageSource from '../assets/profile/mainprofile.png';

const CardUsersLong = ({fullname, imageSrc, phonenum}) => {
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
            {phonenum}
          </Text>
        </View>
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

export default CardUsersLong;
