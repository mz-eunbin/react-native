import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

function Profile() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [groups, setGroups] = useState();
  const [roles, setRoles] = useState();
  const [created, setCreated] = useState();

  useEffect(() => {
    AsyncStorage.getItem('user_email').then(value => setEmail(value));
    AsyncStorage.getItem('user_name').then(value => setName(value));
    AsyncStorage.getItem('user_type').then(value => setType(value));
    AsyncStorage.getItem('user_groups').then(value => setGroups(value));
    AsyncStorage.getItem('user_roles').then(value => setRoles(value));
    AsyncStorage.getItem('user_created').then(value => setCreated(value));
  });

  return (
    <View>
      <Text>{email}</Text>
      <Text>{name}</Text>
      <Text>{type}</Text>
      <Text>{groups}</Text>
      <Text>{roles}</Text>
      <Text>{email}</Text>
      <Text>{created}</Text>
    </View>
  );
}

export default Profile;
