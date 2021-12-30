import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [errortext, setErrortext] = useState('');

  const login = () => {
    setErrortext('');
    if (!email) {
      alert('fill email');
      return;
    }
    axios
      .get(`http://localhost:5003/api/v1/user?email=${email}&service_type=gcp`)
      .then(response => {
        console.log('response', response);
        if (response.data.data.email) {
          AsyncStorage.setItem('user_name', response.data.data.name);
          AsyncStorage.setItem('user_email', response.data.data.email);
          AsyncStorage.setItem('user_type', response.data.data.type);
          AsyncStorage.setItem(
            'user_groups',
            response.data.data.groups.map(group => group.name).join(', '),
          );
          AsyncStorage.setItem(
            'user_roles',
            response.data.data.roles.map(role => role.name).join(', '),
          );
          AsyncStorage.setItem('user_created', response.data.data.created_at);
          navigation.replace('Main');
        } else {
          setErrortext('undefined');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.main}>
      <View style={styles.Section}>
        <TextInput
          style={styles.input}
          onChangeText={email => setEmail(email)}
          placeholder="email"
          autoCapitalize="none"
        />
      </View>
      {errortext != '' ? (
        <Text style={styles.errorText}>{errortext}</Text>
      ) : null}
      <Button title="Login" onPress={login} />
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  Section: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  input: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
