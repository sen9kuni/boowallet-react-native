import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/en';
import {
  BACK_PRIMARY,
  GREEN,
  RED,
  SECONDARY_BLACK,
  WHITE_COLOR,
} from '../styles/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/global';
import Cardtransctions from '../components/Cardtransctions';
import {useDispatch, useSelector} from 'react-redux';
import {getHistory, nextGetHistory} from '../redux/action/history';
import CardTransactionExpense from '../components/CardTransactionExpense';
import {resetNextPageHistory} from '../redux/reducers/historyUser';

export const numberFormat = value =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value);

const TransactionsHistory = ({navigation}) => {
  const dispatch = useDispatch();
  const loginId = useSelector(state => state.authUser.id);
  const token = useSelector(state => state.authUser.token);
  const dataHistory = useSelector(state => state.historyUser.dataHistory);
  const nextPageHistory = useSelector(
    state => state.historyUser.nextPageHistory,
  );
  const [btnUp, setBtnUp] = React.useState(true);
  const [btnDown, setBtnDown] = React.useState(true);
  // const [sort, setSort] = React.useState('');
  const [sort, setSort] = React.useState('DESC');
  React.useEffect(() => {
    if (sort === 'ASC' || sort === 'DESC') {
      dispatch(getHistory({page: 1, token: token, sort_by: sort}));
    } else {
      dispatch(getHistory({page: 1, token: token, sort_by: ''}));
    }
    // const param = {page: 1, token: token};
    // dispatch(getHistory(param));
  }, [dispatch, sort, token]);
  const onRefresh = async () => {
    setBtnDown(true);
    setBtnUp(true);
    dispatch(resetNextPageHistory());
    const param = {page: 1, token: token, sort_by: ''};
    dispatch(getHistory(param));
  };
  const nextPage = async () => {
    if (nextPageHistory !== null && nextPageHistory !== undefined) {
      const param = {page: nextPageHistory, token: token, sort_by: sort};
      await dispatch(nextGetHistory(param));
    }
  };
  // const onDown = () => {
  //   if (btnUp === false) {
  //     setBtnUp(true);
  //     setBtnDown(!btnDown);
  //     if (btnDown === true) {
  //       setSort('ASC');
  //     } else {
  //       setSort('DESC');
  //     }
  //   } else {
  //     setBtnDown(!btnDown);
  //     if (btnDown === true) {
  //       setSort('ASC');
  //     } else {
  //       setSort('DESC');
  //     }
  //   }
  // };
  // const onUp = async () => {
  //   if (btnDown === false) {
  //     setBtnDown(true);
  //     await setBtnUp(!btnUp);
  //     if (btnUp === true) {
  //       setSort('DESC');
  //     }
  //   } else {
  //     await setBtnUp(!btnUp);
  //     if (btnUp === true) {
  //       setSort('DESC');
  //     }
  //   }
  // };
  const onShorting = () => {
    if (sort === 'DESC') {
      setSort('ASC');
    } else {
      setSort('DESC');
    }
  };
  return (
    <View style={styleLocal.wrapper}>
      {/* <View style={styleLocal.wrapperScroll}>
        <ScrollView>
          <View style={styleLocal.infoSub}>
            <Text style={[styles.fZ16, styles.fW400, styles.cCBlack]}>
              This Week
            </Text>
          </View>
          <Cardtransctions />
          <Cardtransctions />
          <Cardtransctions />
          <Cardtransctions />

          <View style={styleLocal.infoSub}>
            <Text style={[styles.fZ16, styles.fW400, styles.cCBlack]}>
              This Month
            </Text>
          </View>
          <Cardtransctions />
          <Cardtransctions />
          <Cardtransctions />
          <Cardtransctions />
        </ScrollView>
      </View> */}
      <FlatList
        data={dataHistory}
        onRefresh={onRefresh}
        refreshing={false}
        onEndReached={nextPage ? nextPage : null}
        onEndReachedThreshold={0.5}
        ItemSeparatorComponent={() => <View style={styleLocal.sparator} />}
        keyExtractor={(item, index) => index + 'history' + item.id + item.time}
        renderItem={({item}) => {
          return (
            <>
              {item.receiverid !== parseInt(loginId, 10) ? (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Detai Transaction History', {item})
                  }>
                  <CardTransactionExpense
                    fullname={`${item.receiverfirstname} ${item.receiverlastname}`}
                    typeTrans={item.type}
                    imageSrc={item.imgreceiver}
                    amount={numberFormat(parseInt(item.amount, 10))}
                  />
                </TouchableOpacity>
              ) : (
                <>
                  {item.type === 'transfer' ? (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Detai Transaction History', {item})
                      }>
                      <Cardtransctions
                        fullname={`${item.senderfirstname} ${item.senderlastname}`}
                        typeTrans={item.type}
                        imageSrc={item.imgsender}
                        amount={numberFormat(parseInt(item.amount, 10))}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Detai Transaction History', {item})
                      }>
                      <Cardtransctions
                        fullname={`${item.receiverfirstname} ${item.receiverlastname}`}
                        typeTrans={item.type}
                        imageSrc={item.imgreceiver}
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
      {/* <View style={styleLocal.wrapperButton}>
        <TouchableOpacity
          style={btnUp ? styleLocal.btnMini : styleLocal.btnMiniUp}
          onPress={() => onUp()}>
          <Icon
            name="arrow-up"
            size={25}
            color={btnUp ? SECONDARY_BLACK : WHITE_COLOR}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={btnDown ? styleLocal.btnMini : styleLocal.btnMiniDown}
          onPress={() => onDown()}>
          <Icon
            name="arrow-down"
            size={25}
            color={btnDown ? SECONDARY_BLACK : WHITE_COLOR}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styleLocal.btnMedium}>
          <Text style={[styles.fZ18, styles.fW700, styles.cPrimary]}>
            Filter by Date
          </Text>
        </TouchableOpacity>
      </View> */}
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
  wrapper: {
    height: Dimensions.get('screen').height - 150,
    backgroundColor: BACK_PRIMARY,
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingHorizontal: 16,
  },
  wrapperScroll: {
    height: Dimensions.get('screen').height - 150,
  },
  infoSub: {
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
  },
  wrapperButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  btnMini: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: WHITE_COLOR,
    elevation: 1,
  },
  btnMiniUp: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: RED,
    elevation: 1,
  },
  btnMiniDown: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: GREEN,
    elevation: 1,
  },
  btnMedium: {
    paddingVertical: 16,
    paddingHorizontal: 38,
    borderRadius: 10,
    backgroundColor: WHITE_COLOR,
    elevation: 1,
  },
  sparator: {
    height: 5,
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
});

export default TransactionsHistory;
