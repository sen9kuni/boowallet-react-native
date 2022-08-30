import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import styles from '../styles/global';
import Input from '../components/Input';

const Signup = ({navigation}) => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const onSignup = () => {
    if (email === 'yoga@mail.com' && password === 'admin') {
      Alert.alert('Success', 'Login Success');
    } else {
      Alert.alert('Error', 'Wrong email or password');
    }
  };
  return (
    <ScrollView style={styles.wrapperMain}>
      <View style={styles.header}>
        <Text style={styles.textLogo}>Boo-Wallet</Text>
      </View>
      <View style={styles.bodyMain}>
        <View style={styles.infoAuth}>
          <Text style={[styles.fZ24, styles.textCenter, styles.fW700]}>
            Sign Up
          </Text>
          <Text style={[styles.fZ16, styles.textCenter, styles.fW400]}>
            Create your account to access FazzPay.
          </Text>
        </View>
        <View style={styles.content}>
          <View style={styles.mB60}>
            <Input
              onChange={text => setUsername(text)}
              palceHolder="Enter your firstname"
              icon="user"
              type="default"
            />
          </View>
          <View style={styles.mB60}>
            <Input
              onChange={text => setUsername(text)}
              palceHolder="Enter your lastname"
              icon="user"
              type="default"
            />
          </View>
          <View style={styles.mB60}>
            <Input
              onChange={text => setEmail(text)}
              palceHolder="Enter your e-mail"
              icon="envelope"
              type="email-address"
            />
          </View>
          <View style={[styles.mB15, styleLocal.mbToButton]}>
            <Input
              onChange={text => setPassword(text)}
              palceHolder="Create your password"
              icon="lock"
              secure={true}
            />
          </View>
          <View style={[styles.buttonWrapper, styleLocal.marginButton]}>
            <TouchableOpacity onPress={onSignup}>
              <View style={styles.button}>
                <Text style={[styles.cWhite, styles.fZ18, styles.fW700]}>
                  Sign Up
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styleLocal.marginButton}>
            <Text style={[styles.fZ16, styles.fW400, styles.textCenter]}>
              Already have an account? Let's
              <TouchableOpacity onPress={() => navigation.navigate('login')}>
                <Text style={[styles.fZ16, styles.fW700, styles.cPrimary]}>
                  {' '}
                  Login
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styleLocal = StyleSheet.create({
  mbToButton: {
    marginBottom: 42,
  },
  marginButton: {
    marginBottom: 15,
  },
});

export default Signup;
