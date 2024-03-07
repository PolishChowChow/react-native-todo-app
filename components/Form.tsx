import { Text } from "@rneui/base";
import { TaskType } from "../App";
type FormProps = {
  addTask: (newTask: TaskType) => void;
};
export default function Form({ addTask }: FormProps) {
  return <Text>Form</Text>;
}
