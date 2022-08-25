import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {BACK_PRIMARY, PRIMARY_COLOR, WHITE_COLOR} from '../styles/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/global';
import imageProfile from '../assets/profile/mainprofile.png';
import Cardtransctions from '../components/Cardtransctions';

const Home = () => {
  return (
    <>
      {/* header */}
      <View style={styleLocal.warpperHaderProfile}>
        <View style={styleLocal.warpperCildernHeader}>
          <View style={styleLocal.warpperImageName}>
            <View style={styleLocal.warpperImageProfile}>
              <Image style={styleLocal.imageStyle} source={imageProfile} />
            </View>
            <View style={styleLocal.warpperNameProfile}>
              <Text style={[styles.fZ14, styles.fW400, styles.cWhite]}>
                Balance
              </Text>
              <Text style={[styles.fZ24, styles.fW700, styles.cWhite]}>
                Rp120.000
              </Text>
            </View>
          </View>
          <View>
            <Icon name="bell-o" size={28} color={WHITE_COLOR} />
          </View>
        </View>
      </View>
      {/* header */}
      {/* button transfer & top up */}
      <View style={styleLocal.wrapper}>
        <TouchableOpacity style={styleLocal.wrapperButton}>
          <View style={styleLocal.wrapperContent}>
            <Icon name="arrow-up" size={25} color={PRIMARY_COLOR} />
            <Text style={[styles.fZ18, styles.fW700]}>Transfer</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styleLocal.wrapperButton}>
          <View style={styleLocal.wrapperContent}>
            <Icon name="plus" size={25} color={PRIMARY_COLOR} />
            <Text style={[styles.fZ18, styles.fW700]}>Top Up</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* button transfer & top up */}
      <View style={styleLocal.textInfoHistory}>
        <Text style={[styles.fZ18, styles.fW700]}>Transaction History</Text>
        <Text style={[styles.fZ14, styles.fW600, styles.cPrimary]}>
          See all
        </Text>
      </View>
      <ScrollView style={styleLocal.scrollWrapper}>
        <Cardtransctions />
        <Cardtransctions />
        <Cardtransctions />
        <Cardtransctions />
        <Cardtransctions />
      </ScrollView>
    </>
  );
};
const styleLocal = StyleSheet.create({
  wrapper: {
    width: Dimensions.get('screen').width,
    // backgroundColor: PRIMARY_COLOR,
    paddingHorizontal: 16,
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperButton: {
    width: 162,
    height: 57,
    borderRadius: 10,
    backgroundColor: '#EAEDFF',
    justifyContent: 'center',
    paddingHorizontal: 27,
    paddingVertical: 16,
    alignItems: 'center',
  },
  wrapperContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  mRight: {
    marginLeft: 15,
  },
  warpperHaderProfile: {
    marginBottom: 20,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height: 112,
    width: '100%',
    backgroundColor: PRIMARY_COLOR,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  warpperCildernHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  warpperImageName: {
    flexDirection: 'row',
  },
  warpperImageProfile: {
    height: 53,
    width: 53,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    alignItems: 'center',
    marginRight: 20,
  },
  imageStyle: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  warpperNameProfile: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textInfoHistory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  scrollWrapper: {
    backgroundColor: BACK_PRIMARY,
  },
});

export default Home;
