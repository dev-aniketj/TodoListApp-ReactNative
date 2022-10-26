import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const Task = ({ item }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Text>{item.task}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginTop: 15,
    borderColor: "#0099ff",
    borderRadius: 8,
    borderWidth: 1.25,
    borderStyle: "dashed",
  },
});

export default Task;
