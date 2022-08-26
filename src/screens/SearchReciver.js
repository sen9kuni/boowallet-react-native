import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import React from 'react';
import {BACK_PRIMARY, SECONDARY_COLOR} from '../styles/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/global';
import CardUsers from '../components/CardUsers';
import CardUsersLong from '../components/CardUsersLong';

const SearchReciver = () => {
  return (
    <View style={styleLocal.wrapper}>
      <View style={styleLocal.wraperSearch}>
        <View style={styleLocal.searcher}>
          <View>
            <Icon name="search" size={30} color={SECONDARY_COLOR} />
          </View>
          <View style={styleLocal.inputSearch}>
            <TextInput placeholder="Search receiver here" />
          </View>
        </View>
      </View>
      <View style={styleLocal.infoSub}>
        <Text style={[styles.fZ18, styles.fW700, styles.cCBlack]}>
          Quick Access
        </Text>
      </View>
      <View style={styleLocal.wrapScrollHorisontal}>
        <ScrollView horizontal={true}>
          <CardUsers />
          <CardUsers />
          <CardUsers />
          <CardUsers />
          <CardUsers />
        </ScrollView>
      </View>
      <View style={styleLocal.infoSub2}>
        <Text style={[styles.fZ18, styles.fW700, styles.cCBlack]}>
          All Contacts
        </Text>
        <Text>17 Contact Founds</Text>
      </View>
      <View style={styleLocal.wrapScrollVer}>
        <ScrollView>
          <CardUsersLong />
          <CardUsersLong />
          <CardUsersLong />
          <CardUsersLong />
          <CardUsersLong />
          <CardUsersLong />
          <CardUsersLong />
          <CardUsersLong />
        </ScrollView>
      </View>
    </View>
  );
};

const styleLocal = StyleSheet.create({
  wrapper: {
    backgroundColor: BACK_PRIMARY,
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
    height: 320,
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
