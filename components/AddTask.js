import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";

const AddTask = ({addTask}) => {
  const [text, setText] = useState("");
  const textChangeHandler = (new_task) => {
    setText(new_task);
  };
  return (
    <View>
      <TextInput
        style={styles.inputBox}
        placeholder="Add new task"
        onChangeText={textChangeHandler}
      />
      <Button
        title="Add Task"
        color="#0099ff"
        onPress={() => addTask(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    margin: 10,
    padding: 5,
    borderBottomColor: "#343434",
    borderBottomWidth: 1,
  },
});

export default AddTask;
