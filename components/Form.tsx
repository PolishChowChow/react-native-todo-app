import { Button, Text } from "@rneui/base";
import { View, StyleSheet, GestureResponderEvent} from "react-native";
import { Input } from "@rneui/themed";
import { useState } from "react";
type FormProps = {
  addTask: (taskValue: string) => void;
};
export default function Form({ addTask }: FormProps) {
  const [taskName, setTaskName] = useState("");
  const handleSubmit = (event: GestureResponderEvent) => {
    event.preventDefault();
    addTask(taskName)
    setTaskName("")
  };
  return (
    <View style={style.container}>
      <View style={style.grow_1}>
        <Input
          style={style.inputs}
          id="name"
          placeholder="Enter a task"
          value={taskName}
          onChangeText={(text) => setTaskName(text)}
        />
      </View>
      <View>
        <Button onPress={handleSubmit}>+</Button>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  grow_1: {
    flexGrow: 1,
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  inputs: {
    fontSize: 16,
    color: "#DDDDDD",
    backgroundColor: "#333333",
    paddingHorizontal: 10,
  },
});
