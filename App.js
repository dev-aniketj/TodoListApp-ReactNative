import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList,SafeAreaView } from "react-native";
import React, { useState, Component } from "react";
import Header from "./components/Header";

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
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <View style={styles.content}>
        <FlatList
          style={styles.listStyle}
          data={tasks}
          renderItem={({ item }) => <Text>{item.task}</Text>}
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
