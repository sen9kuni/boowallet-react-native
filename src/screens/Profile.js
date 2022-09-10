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
  Modal,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {
  BACK_PRIMARY,
  PRIMARY_COLOR,
  SECONDARY_BLACK,
  WHITE_COLOR,
} from '../styles/constant';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';
import styles from '../styles/global';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import imageSource from '../assets/profile/mainprofile.png';
import ButtonProfile from '../components/ButtonProfile';
import {useDispatch, useSelector} from 'react-redux';
import {deleteImage, getProfile, uploadImage} from '../redux/action/profile';
import {logout} from '../redux/reducers/authUser';
import {removeIdFromToken} from '../redux/action/authUser';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.authUser.token);
  const fcm_token = useSelector(state => state.notification.fcm_token);
  const successMsg = useSelector(state => state.profileUser.successMsg);
  const errorMsg = useSelector(state => state.profileUser.errorMsg);
  const [modalVisibleInfo, setModalVisibleInfo] = React.useState(false);
  const dataprofile = useSelector(state => state.profileUser.dataprofile);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const dataImage = dataprofile?.picture;
  const onLogout = () => {
    const param = {token: fcm_token};
    dispatch(removeIdFromToken(param));
    dispatch(logout());
  };
  const [modalVisible, setModalVisible] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [imgtemp, setImgtemp] = React.useState(null);
  const [loadUploadpic, setLoadUploadpic] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false);
      dispatch(getProfile(token));
    });
  }, [dispatch, token]);

  const onModalPic = () => {
    setModalVisible(true);
  };

  const onDeleteImage = async () => {
    await dispatch(deleteImage({token: token}));
    setModalVisibleInfo(true);
  };

  const onUploadImage = async data => {
    await dispatch(uploadImage({data, token}));
    setLoadUploadpic(false);
    setModalVisible(false);
    setImgtemp(null);
    if (errorMsg === 'upload image failed') {
      Alert.alert(errorMsg);
    }
  };

  const pickPic = async type => {
    const options = {
      mediaType: 'photo',
      maxWidth: 500,
      maxHeight: 500,
    };
    const optionsPicker = {
      mediaType: 'photo',
    };
    const pick = type
      ? await launchImageLibrary(optionsPicker, response => {
          if (response.didCancel) {
            Alert.alert('User cancel pick image');
          } else {
            return response;
          }
        })
      : await launchCamera(options, response => {
          if (response.didCancel) {
            Alert.alert('User cancel camera image');
          } else {
            return response;
          }
        });
    if (pick.assets !== null && pick.assets !== undefined) {
      if (pick.assets) {
        const pictureData = pick.assets[0];
        setLoadUploadpic(true);
        if (pictureData.fileSize > 1 * 1000 * 1000) {
          Alert.alert('Error', 'Filesize too big', [
            {
              onPress: () => {
                setModalVisible(false);
                setLoadUploadpic(false);
              },
            },
          ]);
        } else {
          setImgtemp(pick.assets[0].uri);
          onUploadImage(pictureData);
        }
      }
    }
  };
  React.useEffect(() => {
    dispatch(getProfile(token));
  }, [dispatch, token]);
  const onModal = () => {
    setModalVisibleInfo(false);
  };
  return (
    <ScrollView
      style={styleLocal.wrapper}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
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
            {/* <Text style={[styles.tCenter]}>hello</Text> */}
            <View style={styleLocal.boxImage}>
              <Image source={{uri: imgtemp}} style={styleLocal.picturePic} />
              {loadUploadpic && (
                <View style={styleLocal.loading}>
                  <Progress.Circle
                    size={60}
                    borderWidth={5}
                    indeterminate={true}
                    color={PRIMARY_COLOR}
                  />
                </View>
              )}
            </View>
            <View style={styleLocal.wrapBtnsModal}>
              <TouchableOpacity
                style={styleLocal.btnModal}
                onPress={() => pickPic(true)}>
                <Text style={[styles.fZ16, styles.fW700, styles.cWhite]}>
                  Galery
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styleLocal.btnModal}
                onPress={() => pickPic(false)}>
                <Text style={[styles.fZ16, styles.fW700, styles.cWhite]}>
                  Camera
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styleLocal.btnModalCancel}
              onPress={() => setModalVisible(false)}>
              <Text style={[styles.fZ16, styles.fW700, styles.cWhite]}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        visible={modalVisibleInfo}
        animationType="slide"
        transparent
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalVisibleInfo(!modalVisibleInfo);
        }}>
        <View style={styleLocal.centeredView}>
          <View style={styleLocal.modalView}>
            <Text>
              {successMsg === 'your picture is deleted'
                ? successMsg
                : 'your picture already deleted'}
            </Text>
            <TouchableOpacity style={styleLocal.btnModal} onPress={onModal}>
              <Text style={[styles.fZ16, styles.fW700, styles.cWhite]}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styleLocal.wrapperHeader}>
        <View style={styleLocal.wrapperPhoto}>
          <Image
            style={styleLocal.imageStyle}
            source={dataImage ? {uri: dataImage} : imageSource}
          />
        </View>
        <View style={styleLocal.editWrap}>
          <TouchableOpacity style={styleLocal.btnEdit} onPress={onDeleteImage}>
            <Icon2 name="trash-2" size={21} />
            <Text>delete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styleLocal.btnEdit} onPress={onModalPic}>
            <Icon2 name="edit-2" size={20} />
            <Text>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styleLocal.wraptext}>
          <Text
            style={[styles.fZ24, styles.fW700, styles.cCBlack, styles.mB15]}>
            {dataprofile.first_name
              ? `${dataprofile.first_name} ${dataprofile.last_name}`
              : '-'}
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    // minWidth: 300,
    width: '90%',
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
  btnModalCancel: {
    marginTop: 15,
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  boxImage: {
    backgroundColor: SECONDARY_BLACK,
    width: 150,
    height: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  picturePic: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  loading: {
    width: 150,
    height: 150,
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapBtnsModal: {
    justifyContent: 'space-around',
    width: 250,
    flexDirection: 'row',
  },
  editWrap: {
    minWidth: 150,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});

export default Profile;
