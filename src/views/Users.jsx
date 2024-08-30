import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const [userList, setUserList] = useState([]);

  const userInfoSelector = useSelector((state) => state.users);

  useEffect(() => {
    if (userInfoSelector.data) {
      setUserList(userInfoSelector.data?.data);
    }
  }, [userInfoSelector]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>
        {item.first_name}&nbsp;{item.last_name}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={userList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  name: {
    fontSize: 16,
    flex: 2,
  },
  
});
