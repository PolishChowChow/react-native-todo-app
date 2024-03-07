import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import Form from './components/Form';
import TaskList from './components/TaskList';
import { useState } from 'react';
export type TaskType = { 
  id: string,
  name: string,
  price: number,
  createdAt: Date
}
export default function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const addTask = (newTask:TaskType) => {
    setTasks(prevTasks => {
      return {
        ...prevTasks,
        newTask
      }
    })
  }
  return (
    <ScrollView>
      <View style={styles.layout}>
        <>
          <Form addTask = {addTask}/>
          <TaskList />
        </>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#333333",
  },
  layout: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }
});
