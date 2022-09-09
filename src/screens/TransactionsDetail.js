import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {BACK_PRIMARY, PRIMARY_COLOR, WHITE_COLOR} from '../styles/constant';
import 'intl';
import 'intl/locale-data/jsonp/en';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/global';
import Cardtransctions from '../components/Cardtransctions';
import CardTransactionExpense from '../components/CardTransactionExpense';
import GraficImage from '../assets/images/graphicstat.png';
import {useSelector} from 'react-redux';

export const numberFormat = value =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value);

const TransactionsDetail = ({navigation}) => {
  const dataHistoryHome = useSelector(
    state => state.historyUser.dataHistoryHome,
  );
  const loginId = useSelector(state => state.authUser.id);
  return (
    // <ScrollView style={styleLocal.wrapperMain}>
    //   {/* info header */}
    //   <View style={styleLocal.infoWrap}>
    //     <View style={styleLocal.blockInfo}>
    //       <Icon name="arrow-down" size={25} color={WHITE_COLOR} />
    //       <Text style={[styles.fZ14, styles.fW400, styles.cWhite]}>Income</Text>
    //       <Text style={[styles.fZ18, styles.fW700, styles.cWhite]}>
    //         Rp2.120.000
    //       </Text>
    //     </View>
    //     <View style={styleLocal.blockInfo}>
    //       <Icon name="arrow-up" size={25} color={WHITE_COLOR} />
    //       <Text style={[styles.fZ14, styles.fW400, styles.cWhite]}>
    //         Expense
    //       </Text>
    //       <Text style={[styles.fZ18, styles.fW700, styles.cWhite]}>
    //         Rp1.560.000
    //       </Text>
    //     </View>
    //   </View>
    //   {/* info header */}
    //   {/* info sub */}
    //   <View style={styleLocal.infoSub}>
    //     <Text style={[styles.fZ18, styles.fW700, styles.cCBlack]}>
    //       In This Week
    //     </Text>
    //   </View>
    //   {/* info sub */}
    //   {/* grapfic */}
    //   <View style={styleLocal.warpperImageProfile}>
    //     <Image source={GraficImage} style={styleLocal.imageStyle} />
    //   </View>
    //   {/* grapfic */}
    //   <View style={styleLocal.textInfoHistory}>
    //     <Text style={[styles.fZ18, styles.fW700]}>Transaction History</Text>
    //     <TouchableOpacity
    //       onPress={() => navigation.navigate('Transaction History')}>
    //       <Text style={[styles.fZ14, styles.fW600, styles.cPrimary]}>
    //         See all
    //       </Text>
    //     </TouchableOpacity>
    //   </View>
    //   <Cardtransctions />
    //   <Cardtransctions />
    //   <Cardtransctions />
    //   <Cardtransctions />
    //   <Cardtransctions />
    // </ScrollView>
    <View>
      <FlatList
        data={dataHistoryHome}
        ListHeaderComponent={() => {
          return (
            <View style={styleLocal.paddH}>
              <View style={[styleLocal.infoWrap]}>
                <View style={styleLocal.blockInfo}>
                  <Icon name="arrow-down" size={25} color={WHITE_COLOR} />
                  <Text style={[styles.fZ14, styles.fW400, styles.cWhite]}>
                    Income
                  </Text>
                  <Text style={[styles.fZ18, styles.fW700, styles.cWhite]}>
                    Rp2.120.000
                  </Text>
                </View>
                <View style={styleLocal.blockInfo}>
                  <Icon name="arrow-up" size={25} color={WHITE_COLOR} />
                  <Text style={[styles.fZ14, styles.fW400, styles.cWhite]}>
                    Expense
                  </Text>
                  <Text style={[styles.fZ18, styles.fW700, styles.cWhite]}>
                    Rp1.560.000
                  </Text>
                </View>
              </View>
              {/* info header */}
              {/* info sub */}
              <View style={styleLocal.infoSub}>
                <Text style={[styles.fZ18, styles.fW700, styles.cCBlack]}>
                  In This Week
                </Text>
              </View>
              {/* info sub */}
              {/* grapfic */}
              <View style={styleLocal.warpperImageProfile}>
                <Image source={GraficImage} style={styleLocal.imageStyle} />
              </View>
              {/* grapfic */}
              <View style={styleLocal.textInfoHistory}>
                <Text style={[styles.fZ18, styles.fW700]}>
                  Transaction History
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Transaction History')}>
                  <Text style={[styles.fZ14, styles.fW600, styles.cPrimary]}>
                    See all
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => item.id + item.receiverfirstname + index}
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
  );
};

const styleLocal = StyleSheet.create({
  wrapperMain: {
    paddingHorizontal: 16,
    backgroundColor: BACK_PRIMARY,
  },
  infoWrap: {
    flexDirection: 'row',
    marginVertical: 60,
    padding: 20,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'space-between',
    borderRadius: 15,
  },
  blockInfo: {
    height: 90,
    width: 117,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  infoSub: {
    justifyContent: 'flex-end',
  },
  warpperImageProfile: {
    overflow: 'hidden',
    position: 'relative',
    alignItems: 'center',
    marginVertical: 40,
  },
  imageStyle: {
    width: '100%',
    height: 268,
  },
  textInfoHistory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  paddH: {
    paddingHorizontal: 16,
  },
  sparator: {
    height: 5,
  },
});

export default TransactionsDetail;
