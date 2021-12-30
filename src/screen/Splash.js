import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const Splash = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      AsyncStorage.getItem('user_email').then(value =>
        navigation.replace(value === null ? 'Login' : 'Main'),
      );
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator animating={animating} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
