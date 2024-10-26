import React from "react";
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
} from 'react-native';

function ToDoList({ tasks }) {
  return (
    <ScrollView style={styles.scrollView}>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 10,
  },
  task: {
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  taskText: {
    fontSize: 16,
  },

  completed: {
    backgroundColor: '#e0e0e0',
  },
});

export default ToDoList;
