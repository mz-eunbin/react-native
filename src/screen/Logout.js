import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

function Logout({ navigation }) {
  useEffect(() => {
    AsyncStorage.removeItem('user_email');
    navigation.replace('Splash');
  });

  return <></>;
}

export default Logout;
