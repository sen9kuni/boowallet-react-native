import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {BACK_PRIMARY, PRIMARY_COLOR, WHITE_COLOR} from '../styles/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';
import styles from '../styles/global';
import imageSource from '../assets/profile/mainprofile.png';
import ButtonProfile from '../components/ButtonProfile';

const Profile = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styleLocal.wrapper}>
      <View style={styleLocal.wrapperHeader}>
        <View style={styleLocal.wrapperPhoto}>
          <Image style={styleLocal.imageStyle} source={imageSource} />
        </View>
        <View>
          <TouchableOpacity style={styleLocal.btnEdit}>
            <Icon2 name="edit-2" size={20} />
            <Text>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styleLocal.wraptext}>
          <Text
            style={[styles.fZ24, styles.fW700, styles.cCBlack, styles.mB15]}>
            Robert Chandler
          </Text>
          <Text style={[styles.fZ16, styles.fW400, styles.ctBlack]}>
            +62 813-9387-7946
          </Text>
        </View>
      </View>
      <View style={styleLocal.wrapBtns}>
        <ButtonProfile
          texts="Personal Information"
          adds={<Icon name="arrow-right" size={20} />}
        />
        <ButtonProfile
          texts="Change Password"
          adds={<Icon name="arrow-right" size={20} />}
        />
        <ButtonProfile
          texts="Change PIN"
          adds={<Icon name="arrow-right" size={20} />}
        />
        <ButtonProfile
          texts="Notification"
          adds={
            <Switch
              trackColor={{false: '#767577', true: BACK_PRIMARY}}
              thumbColor={isEnabled ? PRIMARY_COLOR : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          }
        />
      </View>
      <View>
        <TouchableOpacity style={styleLocal.btnLogout}>
          <Text style={[styles.fZ16, styles.fW700, styles.cRed]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    backgroundColor: BACK_PRIMARY,
    height: Dimensions.get('screen').height,
  },
  wrapperPhoto: {
    height: 80,
    width: 80,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  wrapperHeader: {
    flexDirection: 'column',
    height: 276,
    alignItems: 'center',
    // marginVertical: 15,
    justifyContent: 'space-evenly',
  },
  imageStyle: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  btnEdit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 50,
    height: 27,
  },
  wraptext: {
    alignItems: 'center',
  },
  wrapBtns: {
    height: 290,
    justifyContent: 'space-around',
  },
  btnLogout: {
    marginTop: 15,
    height: 58,
    width: '100%',
    backgroundColor: WHITE_COLOR,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
});

export default Profile;
