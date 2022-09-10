import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/en';
import {
  BACK_PRIMARY,
  PRIMARY_COLOR,
  RED,
  WHITE_COLOR,
} from '../styles/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/global';
import Cardtransctions from '../components/Cardtransctions';
import CardTransactionExpense from '../components/CardTransactionExpense';
import {useDispatch, useSelector} from 'react-redux';
import {getHistoryHome} from '../redux/action/history';
import {getProfile} from '../redux/action/profile';
import {countNotif} from '../redux/action/notification';
import {useIsFocused} from '@react-navigation/native';

export const numberFormat = value =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value);

const Home = ({navigation}) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const token = useSelector(state => state.authUser.token);
  const loginId = useSelector(state => state.authUser.id);
  const countNotifVal = useSelector(state => state.notifUser.countHomeNotif);
  const dataHistoryHome = useSelector(
    state => state.historyUser.dataHistoryHome,
  );
  const [notif, setNotif] = React.useState(false);

  const dataprofile = useSelector(state => state.profileUser.dataprofile);

  const pin = useSelector(state => state.authUser.pin);

  React.useEffect(() => {
    const param = {token: token, page: 1};
    dispatch(getProfile(token));
    dispatch(countNotif({token: token}));
    dispatch(getHistoryHome(param));
    if (pin === null) {
      navigation.navigate('Create Pin');
    }
    let val = null;
    val = countNotifVal;
    if (parseInt(val, 10) > 0) {
      setNotif(true);
    } else {
      setNotif(false);
    }
  }, [isFocused, countNotifVal, dispatch, navigation, pin, token]);

  const dataImage = dataprofile?.picture;
  return (
    <>
      {/* header */}
      <View style={styleLocal.warpperHaderProfile}>
        <View style={styleLocal.warpperCildernHeader}>
          <View style={styleLocal.warpperImageName}>
            <View style={styleLocal.warpperImageProfile}>
              <Image style={styleLocal.imageStyle} source={{uri: dataImage}} />
            </View>
            <View style={styleLocal.warpperNameProfile}>
              <Text style={[styles.fZ14, styles.fW400, styles.cWhite]}>
                Balance
              </Text>
              <Text style={[styles.fZ24, styles.fW700, styles.cWhite]}>
                {numberFormat(parseInt(dataprofile?.balance, 10))}
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Notifications')}>
              <Icon name="bell-o" size={28} color={WHITE_COLOR} />
              {notif && (
                <View style={styleLocal.bubleNotif}>
                  <Text style={[styles.cWhite, styles.tCenter, styles.fZ5]}>
                    {countNotifVal > 10 ? '10+' : countNotifVal}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* header */}
      {/* button transfer & top up */}
      <View style={styleLocal.wrapper}>
        <TouchableOpacity
          style={styleLocal.wrapperButton}
          onPress={() => navigation.navigate('Transfer')}>
          <View style={styleLocal.wrapperContent}>
            <Icon name="arrow-up" size={25} color={PRIMARY_COLOR} />
            <Text style={[styles.fZ18, styles.fW700]}>Transfer</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleLocal.wrapperButton}
          onPress={() => navigation.navigate('Top Up')}>
          <View style={styleLocal.wrapperContent}>
            <Icon name="plus" size={25} color={PRIMARY_COLOR} />
            <Text style={[styles.fZ18, styles.fW700]}>Top Up</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* button transfer & top up */}
      <View style={styleLocal.textInfoHistory}>
        <Text style={[styles.fZ18, styles.fW700]}>Transaction History</Text>
        <TouchableOpacity onPress={() => navigation.navigate('History')}>
          <Text style={[styles.fZ14, styles.fW600, styles.cPrimary]}>
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={dataHistoryHome}
          keyExtractor={(item, index) =>
            item.id + item.receiverfirstname + index
          }
          ItemSeparatorComponent={() => <View style={styleLocal.sparator} />}
          renderItem={({item}) => {
            return (
              <>
                {item.receiverid !== parseInt(loginId, 10) ? (
                  <View style={styleLocal.paddH}>
                    <CardTransactionExpense
                      fullname={`${item.receiverfirstname} ${item.receiverlastname}`}
                      typeTrans={item.type}
                      imageSrc={item.imgreceiver}
                      amount={numberFormat(parseInt(item.amount, 10))}
                    />
                  </View>
                ) : (
                  <View style={styleLocal.paddH}>
                    <Cardtransctions
                      fullname={`${item.receiverfirstname} ${item.receiverlastname}`}
                      typeTrans={item.type}
                      imageSrc={item.imgreceiver}
                      amount={numberFormat(parseInt(item.amount, 10))}
                    />
                  </View>
                )}
              </>
            );
          }}
        />
      </View>
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
  sparator: {
    height: 5,
  },
  paddH: {
    paddingHorizontal: 16,
  },
  bubleNotif: {
    position: 'absolute',
    height: 15,
    width: 15,
    backgroundColor: RED,
    borderRadius: 20,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
