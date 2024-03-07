import { StyleSheet, Text, ScrollView, View } from "react-native";
import 'react-native-get-random-values'
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
export type TaskType = {
  id: string;
  name: string;
  createdAt: string;
};
export default function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  useEffect(()=>{
    console.log(tasks);
    
  },[tasks])
  const addTask = (taskValue: string) => {
    const newTask: TaskType = {
      id: v4(),
      name: taskValue, 
      createdAt: new Date().toDateString()
    }
    setTasks((prevTasks) => {
      return [
        ...prevTasks,
        newTask,
      ]
    });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewChild}>
        <Form addTask={addTask} />
        <TaskList tasks = {tasks}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222222",
    paddingTop: 100,
    paddingHorizontal: 100,
  },
  viewChild: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }
});
