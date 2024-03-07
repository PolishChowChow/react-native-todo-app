import { Text } from "@rneui/base";
import { TaskType } from "../App";
import { StyleSheet, View } from "react-native";
type TaskListProps = {
  tasks: TaskType[];
};
export default function TaskList({ tasks }: TaskListProps) {
  return (
    <View>
      {tasks.map((task) => {
        return <Text key={task.id} style={style.task}>{task.name}</Text>;
      })}
    </View>
  );
}
const style = StyleSheet.create({
  task: {
    color: "white"
  }
})
