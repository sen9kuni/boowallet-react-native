import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/en';
import {BACK_PRIMARY, WHITE_COLOR} from '../styles/constant';
import NotifIn from '../components/NotifIn';
import styles from '../styles/global';
import {useDispatch, useSelector} from 'react-redux';
import {getNotis} from '../redux/action/notification';
import {nextGetNotis, resetNextPageNotif} from '../redux/reducers/notifUser';

export const numberFormat = value =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value);

const Notifications = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.authUser.token);
  const loginId = useSelector(state => state.authUser.id);
  const dataNotif = useSelector(state => state.notifUser.dataNotif);
  const nextPageNotif = useSelector(state => state.notifUser.nextPageNotif);
  const [sort, setSort] = React.useState('DESC');
  React.useEffect(() => {
    if (sort === 'DESC' || sort === 'ASC') {
      dispatch(getNotis({token: token, page: 1, sort_by: sort}));
    } else {
      dispatch(getNotis({token: token, page: 1, sort_by: ''}));
    }
  }, [dispatch, sort, token]);
  const onRefresh = async () => {
    setSort('DESC');
    dispatch(resetNextPageNotif());
    dispatch(getNotis({token: token, page: 1, sort_by: ''}));
  };
  const onNextPage = async () => {
    if (nextPageNotif !== null && nextPageNotif !== undefined) {
      await dispatch(
        nextGetNotis({token: token, page: nextPageNotif, sort_by: sort}),
      );
    }
  };
  const onShorting = () => {
    if (sort === 'DESC') {
      setSort('ASC');
    } else {
      setSort('DESC');
    }
  };
  return (
    // <View style={styleLocal.wrapper}>
    //   <NotifIn
    //     positionUser="reciver"
    //     title="Transfered from Joshua Lee"
    //     amount="Rp220.000"
    //   />
    //   <NotifIn
    //     positionUser="sender"
    //     title="Transfered to Joshua Lee"
    //     amount="Rp220.000"
    //   />
    // </View>
    <View style={styleLocal.mainWrapper}>
      <FlatList
        data={dataNotif}
        onRefresh={onRefresh}
        refreshing={false}
        onEndReached={onNextPage ? onNextPage : null}
        onEndReachedThreshold={0.5}
        ItemSeparatorComponent={() => <View style={styleLocal.sparator} />}
        keyExtractor={(item, index) =>
          index + 'notification' + item.id + item.created_at
        }
        renderItem={({item}) => {
          return (
            <>
              {item.receiverid !== parseInt(loginId, 10) ? (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Notification Detail', {item})
                  }>
                  <NotifIn
                    positionUser="sender"
                    title={`Transfered success to ${item.receiverfirstname} ${item.receiverlastname}`}
                    amount={numberFormat(parseInt(item.amount, 10))}
                  />
                </TouchableOpacity>
              ) : (
                <>
                  {item.type === 'transfer' ? (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Notification Detail', {item})
                      }>
                      <NotifIn
                        positionUser="reciver"
                        title={`Get Transfered from ${item.senderfirstname} ${item.senderlastname}`}
                        amount={numberFormat(parseInt(item.amount, 10))}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Notification Detail', {item})
                      }>
                      <NotifIn
                        positionUser="reciver"
                        title={`Top up success ${item.receiverfirstname} ${item.receiverlastname}`}
                        amount={numberFormat(parseInt(item.amount, 10))}
                      />
                    </TouchableOpacity>
                  )}
                </>
              )}
            </>
          );
        }}
      />
      <TouchableOpacity style={styleLocal.btnShoting} onPress={onShorting}>
        <Text style={[styles.fZ18, styles.fW700, styles.cPrimary]}>
          {/* SHORTING */}
          {sort === 'DESC' ? 'SHORTING LATEST' : 'SHORTING OLDEST'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  mainWrapper: {
    paddingHorizontal: 16,
    backgroundColor: BACK_PRIMARY,
    height: Dimensions.get('screen').height - 150,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  wrapper: {
    paddingHorizontal: 16,
    backgroundColor: BACK_PRIMARY,
    height: Dimensions.get('screen').height,
    flexDirection: 'column',
  },
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'purple',
    height: 40,
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnShoting: {
    width: '100%',
    backgroundColor: WHITE_COLOR,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 1,
    marginVertical: 15,
  },
  sparator: {
    height: 5,
  },
});

export default Notifications;
