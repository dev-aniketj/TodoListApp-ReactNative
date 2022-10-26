import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import React, { useState, Component } from "react";
import Header from "./components/Header";
import Task from "./components/Tasks";
import AddTask from "./components/AddTask";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [tasks, setTasks] = useState([
    { task: "Java", done: true, id: "1" },
    { task: "C++", done: true, id: "2" },
    { task: "C", done: true, id: "3" },
    { task: "Python", done: true, id: "4" },
    { task: "Kotlin", done: true, id: "5" },
    { task: "R", done: false, id: "6" },
    { task: "Scala", done: false, id: "7" },
    { task: "JS", done: false, id: "8" },
    { task: "TypeScript", done: false, id: "9" },
  ]);
  const addTask = (text) => {
    setTasks((prevTasks) => {
      return [{ task: text, id: uuidv4() }, ...prevTasks];
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTask addTask={addTask} />
        <FlatList
          style={styles.listStyle}
          showsVerticalScrollIndicator={false}
          data={tasks}
          renderItem={({ item }) => <Task item={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    padding: 30,
  },
  listStyle: {
    marginTop: 30,
  },
});
