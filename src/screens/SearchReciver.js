import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {BACK_PRIMARY, SECONDARY_COLOR} from '../styles/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/global';
import CardUsers from '../components/CardUsers';
import {Formik} from 'formik';
import CardUsersLong from '../components/CardUsersLong';
import {useDispatch, useSelector} from 'react-redux';
import {
  getAllUsers,
  getProfileById,
  nextUsers,
  searchUsers,
} from '../redux/action/authUser';
import {
  resetPage,
  resetSearchkey,
  setSearchkey,
} from '../redux/reducers/authUser';

const SearchReciver = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.authUser.token);
  const loginId = useSelector(state => state.authUser.id);
  const allUsers = useSelector(state => state.authUser.dataUsers);
  const onPage = useSelector(state => state.authUser.nowPage);
  const searchKey = useSelector(state => state.authUser.searchKey);
  React.useEffect(() => {
    dispatch(resetSearchkey());
    const param = {page: 1, token: token, search: ''};
    dispatch(getAllUsers(param));
  }, []);
  const onRefresh = async () => {
    dispatch(resetSearchkey());
    await dispatch(resetPage());
    const param = {page: 1, token: token, search: ''};
    await dispatch(getAllUsers(param));
  };
  const nextPage = () => {
    const dumy = onPage + 1;
    const param = {page: dumy, token: token, search: searchKey};
    dispatch(nextUsers(param));
  };
  const onChoseProfile = user_id => {
    const param = {user_id: user_id, token: token};
    dispatch(getProfileById(param));
    navigation.navigate('amount input');
  };
  const onSearch = async value => {
    dispatch(setSearchkey(value.search));
    const param = {page: 1, token: token, search: searchKey};
    dispatch(searchUsers(param));
  };
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
      <Formik initialValues={{search: ''}} onSubmit={onSearch}>
        {({errors, handleChange, handleSubmit, values, isValid}) => (
          <View>
            <View style={styleLocal.wraperSearch}>
              <View style={styleLocal.searcher}>
                <View>
                  <Icon name="search" size={30} color={SECONDARY_COLOR} />
                </View>
                <View style={styleLocal.inputSearch}>
                  <TextInput
                    name="search"
                    placeholder="Search receiver here"
                    onSubmitEditing={handleSubmit}
                    onChangeText={handleChange('search')}
                    value={values.search}
                  />
                </View>
              </View>
            </View>
          </View>
        )}
      </Formik>
      <View>
        <FlatList
          style={styleLocal.listWrap}
          onRefresh={onRefresh}
          refreshing={false}
          data={allUsers}
          onEndReached={nextPage ? nextPage : null}
          onEndReachedThreshold={0.5}
          // ListHeaderComponent={() => {
          //   return (
          //     <View style={styleLocal.wraperSearch}>
          //       <View style={styleLocal.searcher}>
          //         <View>
          //           <Icon name="search" size={30} color={SECONDARY_COLOR} />
          //         </View>
          //         <View style={styleLocal.inputSearch}>
          //           <TextInput placeholder="Search receiver here" />
          //         </View>
          //       </View>
          //     </View>
          //   );
          // }}
          ItemSeparatorComponent={() => <View style={styleLocal.sparator} />}
          keyExtractor={(item, index) =>
            item.user_id + index + item.phonenumber
          }
          renderItem={({item}) => {
            return (
              <>
                {item.user_id !== loginId && (
                  <TouchableOpacity
                    onPress={() => onChoseProfile(item.user_id)}>
                    <CardUsersLong
                      fullname={`${item.first_name} ${item.last_name}`}
                      imageSrc={item.picture}
                      phonenum={item.phonenumber}
                    />
                  </TouchableOpacity>
                )}
              </>
            );
          }}
        />
      </View>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  wrapper: {
    backgroundColor: BACK_PRIMARY,
    // height: Dimensions.get('screen').height + 100,
  },
  infoSub: {
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
  },
  listWrap: {
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
    marginVertical: 15,
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
  sparator: {
    height: 5,
  },
});

export default SearchReciver;
