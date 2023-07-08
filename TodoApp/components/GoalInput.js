import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={props.isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          // source={require("../assets/images/goal.png")}
          source={"/SomePath/goal.png"}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.addGoalButton}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              disabled={!enteredGoalText}
              color="5e0acc"
            />
          </View>
          <View style={styles.cancelButton}>
            <Button
              title="Cancel"
              onPress={props.onCancel}
              color="#f31282"
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
    color: "white",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderWidth: 1,
    width: "100%",
    marginRight: 8,
    padding: 8,
    borderRadius: 8,
  },
  buttonContainer: {
    marginTop: 12,
    flexDirection: "row",
    flex: 1,
  },
  addGoalButton: {
    marginHorizontal: 0,
    flex: 1,
  },
  cancelButton: {
    width: 100,
    marginHorizontal: 0,
  },
});
