import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Switch,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {BACK_PRIMARY, PRIMARY_COLOR, WHITE_COLOR} from '../styles/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';
import styles from '../styles/global';
import imageSource from '../assets/profile/mainprofile.png';
import ButtonProfile from '../components/ButtonProfile';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../redux/reducers/authUser';
import {getProfile} from '../redux/action/authUser';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.authUser.token);
  const dataprofile = useSelector(state => state.authUser.dataprofile);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  React.useEffect(() => {
    dispatch(getProfile(token));
  }, [dispatch, token]);
  console.log(dataprofile);
  const dataImage = dataprofile?.picture;
  const onLogout = () => {
    dispatch(logout());
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false);
      dispatch(getProfile(token));
    });
  }, [dispatch, token]);
  return (
    <ScrollView
      style={styleLocal.wrapper}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styleLocal.wrapperHeader}>
        <View style={styleLocal.wrapperPhoto}>
          <Image style={styleLocal.imageStyle} source={{uri: dataImage}} />
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
            {dataprofile.fullname ? dataprofile.fullname : '-'}
          </Text>
          <Text style={[styles.fZ16, styles.fW400, styles.ctBlack]}>
            {dataprofile.phonenumber ? dataprofile.phonenumber : '-'}
          </Text>
        </View>
      </View>
      <View style={styleLocal.wrapBtns}>
        <TouchableOpacity
          onPress={() => navigation.navigate('personal information')}>
          <ButtonProfile
            texts="Personal Information"
            adds={<Icon name="arrow-right" size={20} />}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('change password')}>
          <ButtonProfile
            texts="Change Password"
            adds={<Icon name="arrow-right" size={20} />}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('input old pin')}>
          <ButtonProfile
            texts="Change PIN"
            adds={<Icon name="arrow-right" size={20} />}
          />
        </TouchableOpacity>
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
      <View style={[styles.mB15]}>
        <TouchableOpacity style={styleLocal.btnLogout} onPress={onLogout}>
          <Text style={[styles.fZ16, styles.fW700, styles.cRed]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
