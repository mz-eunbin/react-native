import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

function Account() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/v1/account?active=true&reseller_seq=0')
      .then(response => setAccounts(response.data))
      .catch(error => console.log(error));
  });

  return (
    <SafeAreaView>
      <FlatList
        data={accounts}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Button
              title="details"
              onPress={() => {
                alert(
                  `id: ${item.id}\nname: ${item.name}\ndescription: ${item.description || null
                  }\ncreated_at:${item.created_at}\nupdated_at:${item.updated_at
                  }`,
                );
              }}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Account;
