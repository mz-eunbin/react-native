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

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5003/api/v1/user?service_type=gcp')
      .then(response => setUsers(response.data.data))
      .catch(error => console.log(error));
  });

  return (
    <SafeAreaView>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style>{item.name}</Text>
            <Button
              title="details"
              onPress={() => {
                alert(
                  `name: ${item.name}\nemail:${item.email}\ntype:${item.type
                  }\ndescription: ${item.description || null}\ncreated_at:${item.created_at
                  }\nupdated_at:${item.updated_at}`,
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

export default User;
