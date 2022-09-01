import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import {BACK_PRIMARY, SECONDARY_COLOR} from '../styles/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/global';
import CardUsers from '../components/CardUsers';
import CardUsersLong from '../components/CardUsersLong';
import {useDispatch, useSelector} from 'react-redux';
import {getAllUsers, nextUsers} from '../redux/action/authUser';
import {costomPagesPlus, costomPagesReset} from '../redux/reducers/costomPage';
import { resetDataUsers, resetPage } from '../redux/reducers/authUser';

const SearchReciver = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.authUser.token);
  const numberPages = useSelector(state => state.costomPage.page);
  const allUsers = useSelector(state => state.authUser.dataUsers);
  const onPage = useSelector(state => state.authUser.nowPage);
  const [page, setPage] = React.useState();
  // console.log(onPage);
  React.useEffect(() => {
    const param = {token: token, search: ''};
    dispatch(getAllUsers(param));
  }, []);
  // console.log(allUsers);
  // console.log(allUsers);
  const onRefresh = async () => {
    // dispatch(costomPagesReset());
    // const param = {page: numberPages, token: token, search: ''};
    // console.log(numberPages);
    // // console.log(param);
    // dispatch(resetDataUsers());
    await dispatch(resetPage());
    // console.log(onPage);
    const param = {token: token, search: ''};
    await dispatch(getAllUsers(param));
  };
  const nextPage = () => {
    const dumy = onPage + 1;
    setPage(dumy);
    console.log(page);
    const param = {page: page, token: token, search: ''};
    dispatch(nextUsers(param));
  };
  // console.log(allUsers);
  return (
    // <View style={styleLocal.wrapper}>
    //   <View style={styleLocal.wraperSearch}>
    //     <View style={styleLocal.searcher}>
    //       <View>
    //         <Icon name="search" size={30} color={SECONDARY_COLOR} />
    //       </View>
    //       <View style={styleLocal.inputSearch}>
    //         <TextInput placeholder="Search receiver here" />
    //       </View>
    //     </View>
    //   </View>
    //   {/* <View style={styleLocal.infoSub}>
    //     <Text style={[styles.fZ18, styles.fW700, styles.cCBlack]}>
    //       Quick Access
    //     </Text>
    //   </View>
    //   <View style={styleLocal.wrapScrollHorisontal}>
    //     <ScrollView horizontal={true}>
    //       <CardUsers />
    //       <CardUsers />
    //       <CardUsers />
    //       <CardUsers />
    //       <CardUsers />
    //     </ScrollView>
    //   </View> */}
    //   <View style={styleLocal.infoSub2}>
    //     <Text style={[styles.fZ18, styles.fW700, styles.cCBlack]}>
    //       All Contacts
    //     </Text>
    //     <Text>17 Contact Founds</Text>
    //   </View>
    //   <View style={styleLocal.wrapScrollVer}>
    //     <ScrollView>
    //       <CardUsersLong />
    //       <CardUsersLong />
    //       <CardUsersLong />
    //       <CardUsersLong />
    //       <CardUsersLong />
    //       <CardUsersLong />
    //       <CardUsersLong />
    //       <CardUsersLong />
    //     </ScrollView>
    //   </View>
    // </View>
    <View style={styleLocal.wrapper}>
      <FlatList
        onRefresh={onRefresh}
        refreshing={false}
        data={allUsers}
        onEndReached={nextPage}
        onEndReachedThreshold={2}
        keyExtractor={(item, index) => item.user_id + index + item.phonenumber}
        renderItem={({item}) => {
          return (
            <CardUsersLong
              fullname={`${item.first_name} ${item.last_name}`}
              imageSrc={item.picture}
              phonenum={item.phonenumber}
              number={item.id}
            />
          );
        }}
      />
    </View>
  );
};

const styleLocal = StyleSheet.create({
  wrapper: {
    backgroundColor: BACK_PRIMARY,
    height: Dimensions.get('screen').height + 100,
  },
  infoSub: {
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
  },
  infoSub2: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    marginVertical: 25,
  },
  wrapScrollHorisontal: {
    height: 150,
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  wrapScrollVer: {
    height: 400,
  },
  wraperSearch: {
    paddingHorizontal: 16,
  },
  searcher: {
    padding: 13,
    backgroundColor: '#3A3D421A',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 15,
  },
  inputSearch: {
    flex: 1,
    marginLeft: 15,
  },
});

export default SearchReciver;
