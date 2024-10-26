import React from "react";
import { useState } from "react";
import {
    SafeAreaView, 
    ScrollView, 
    Alert, 
    Text, 
    StyleSheet,
} from "react-native";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (tasks.some((existingTask) => existingTask === task)) {
      Alert.alert("Task already exists");
      return;
    }
    setTasks([...tasks, task]);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={styles.heading}>Task Organizer</Text>
        <ToDoForm onAddTask={addTask} />
        <ToDoList tasks={tasks} />
      </ScrollView>
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 20,
      color: '#333', // You can change the color as desired
    },
});

export default App;
